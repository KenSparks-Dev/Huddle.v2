import React, { Component } from 'react';

export class Text extends Component {
	static defaultProps = {
		textTitle:'Build The Community Your Fans Will Love'
	}
	render() {
		return (
			<div className="text">
				<h4 className="fadeIn-text">{this.props.textTitle}</h4>
				<p className="fadeIn-text">
					Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create
					connections with your users as you engage in genuine discussion.
				</p>
				<button className="fadeIn-text">Register</button>
			</div>
		);
	}
}

export default Text;
