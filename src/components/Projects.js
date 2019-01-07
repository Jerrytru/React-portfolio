import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component {
    render() {
        return (
        <div className="box is-radiusless">
            <p className="title has-text-centered is-size-4 has-text-black is-uppercase">My projects</p>
            <div className="columns">
                <Project />
                <Project />
            </div>
        </div>
        )
    }
}

export default Projects;
