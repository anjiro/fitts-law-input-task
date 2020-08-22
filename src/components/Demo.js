import React, { Component } from 'react';
import * as d3 from 'd3';

export class Demo extends Component {

    constructor(props) {

        super(props);

        this.state = {
            username: "Twinji",
            device: "Mouse",
            sequences: [
                {
                    distance: 300,
                    radius: 20,
                    count: 9,
                    repetitions: 15,
                    direction: 1
                },
                {
                    distance: 200,
                    radius: 30,
                    count: 9,
                    repetitions: 15,
                    direction: 1
                }
            ],
            generated: [],
            results: [],
            currentSequenceIndex: 0,
            currentRepetition: 1,
            currentCircleIndex: 0
        }

        this.restartTimer();
    }

    restartTimer = () => {
        this.startTime = performance.now();
        this.timeElapsed = null;
    }

    stopTimer = () => {
        this.timeElapsed = performance.now() - this.startTime;
    }

    onClick = (d, i) => {

        let hit = i === this.state.currentCircleIndex;

        if (hit) {
            this.stopTimer();
        }

        const s = this.state.sequences[this.state.currentSequenceIndex];

        this.appendResultLog(
            this.state.username,
            this.state.device,
            this.state.currentSequenceIndex + 1,
            this.state.currentRepetition,
            s.distance,
            s.radius,
            s.direction,
            hit,
            this.timeElapsed
        );

        if (hit)
        {
            let currentSequenceIndex = this.state.currentSequenceIndex;
            let s = this.state.sequences[currentSequenceIndex];
            let currentCircleIndex = (this.state.currentCircleIndex + Math.round(s.count / 2)) % s.count;
            let currentRepetition = this.state.currentRepetition + 1;

            if (currentRepetition > s.repetitions) {
                currentRepetition = 1;
                currentCircleIndex = 0;
                currentSequenceIndex = currentSequenceIndex >= this.state.sequences.length - 1 ? 0 : currentSequenceIndex + 1;
            }

            this.setState({
                currentCircleIndex,
                currentRepetition,
                currentSequenceIndex
            }, () => {
                this.renderCircles();
                this.restartTimer();
            });
        }
    }

    appendResultLog = (username, device, sequence, rep, distance, radius, direction, hit, time) => {

        let existingLog = false;
        var modifiedResults = this.state.results.map(l => {
            if (l.username === username && l.device === device && l.sequence === sequence && l.rep === rep) {
                existingLog = true;
                l.timestamp = Date.now();
                if (!hit) {
                    l.misses++;
                } else {
                    l.hit = hit;
                    l.time = this.timeElapsed;
                }
            }
            return l;
        });

        if (existingLog) {
            this.setState({
                results: modifiedResults
            });
        } else {
            this.setState(prevState => ({
                results: [...prevState.results, {
                    username, 
                    device, 
                    sequence, 
                    rep, 
                    distance, 
                    radius, 
                    direction, 
                    hit, 
                    time, 
                    misses: hit ? 0 : 1, 
                    timestamp: Date.now()
                }]
            }));
        }
    }
    
    generateCircleData = () => {

        this.setState({
            generated: this.state.sequences.map((s) => {
                
                let rev = Math.PI * 2;
                let center = {
                    x: this.container.clientWidth / 2,
                    y: this.container.clientHeight / 2
                }

                return {
                    circles: Array(s.count).fill().map((_, i) => {
                        let rotationOffset = Math.PI * 1.5;
                        return {
                            x: center.x + Math.cos(rotationOffset + i * (rev / s.count)) * s.distance / 2,
                            y: center.y + Math.sin(rotationOffset + i * (rev / s.count)) * s.distance / 2,
                            radius: s.radius,
                            color: 'lightgray',
                            activeColor: 'crimson'
                        }
                    })
                }
            })
        }, this.renderCircles);
    }

    renderCircles = () => {

        d3.selectAll("svg > *").remove();
        
        let svgContainer = d3
            .select("#demoContainer > svg")
            .attr("width", this.container.clientWidth)
            .attr("height", this.container.clientHeight)
            .on("click", e => {
                d3.event.stopPropagation();
                this.onClick(null, -1);
            });

        let circles = svgContainer
            .selectAll("circle")
            .data(this.state.generated[this.state.currentSequenceIndex].circles)
            .enter()
            .append("circle");

        circles
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("r", d => d.radius)
            .attr("fill", (d, i) => i === this.state.currentCircleIndex ? d.activeColor : d.color)
            .on("click", (d, i) => {
                d3.event.stopPropagation();
                this.onClick(d, i);
            });
    }
    
    componentDidMount() {
        this.generateCircleData();
    }

    render() {

        const containerStyle = {
            width: 'auto',
            height: 'auto',
            position: 'absolute',
            zIndex: -100,
            right: 0, left: 0, top: 0, bottom: 0,
            margin: 'auto',
            maxWidth: '100%',
            maxHeight: '100%',
            overflow: 'visible'
        }

        return (
            <React.Fragment>
                <div id="demoContainer" ref={ container => this.container = container } style={containerStyle}><svg></svg></div>
            </React.Fragment>
        )
    }
}

export default Demo
