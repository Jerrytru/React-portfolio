import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
        <div className="box is-radiusless">
            <p className="title has-text-centered is-size-4 has-text-black is-uppercase">My skills</p>
            <div className="field is-horizontal">
                <div className="field-label">
                    <label className="label">HTML5</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <progress className="progress" value="15" max="100">15%</progress>
                        </div>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label">
                    <label className="label">CSS3</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <progress className="progress" value="15" max="100">15%</progress>
                        </div>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label">
                    <label className="label">ES5</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <progress className="progress" value="15" max="100">15%</progress>
                        </div>
                    </div>
                </div>
            </div>	
        </div>
        )
    }
}

export default Skills;