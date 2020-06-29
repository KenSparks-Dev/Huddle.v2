import React from 'react';
import '../css/text.css';

function Text({textTitle, textPara, button}){
		return (
			<div className="text">
				<h4 className="fadeIn-text">{textTitle}</h4>
				<p className="fadeIn-text">
					{textPara}
				</p>
				<button className="fadeIn-text">{button} </button>
			</div>
		);
	}

export default Text;
