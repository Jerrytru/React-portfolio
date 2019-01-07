import React, { Component } from 'react';
import Bio from './Bio';
import Skills from './Skills';
import Socials from './Socials';
import Projects from './Projects';

class Main extends Component {
  render() {
    return(
    <div className="hero-body">
			<div className="container">
				<Bio />
				<br />
				<div className="columns is-multiline">
					<div className="column is-6">
						<Skills />
						<Socials />
					</div>
					<div className="column is-6">
						<Projects />
					</div>
				</div>
			</div>
		</div>
    )
  }
}

export default Main;
