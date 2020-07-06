import React from 'react';
import '../css/text.css';

function Text({title, textPara, buttonCopy}){
	return (
		<div className="text">
			<h4 className="fade-in-text">{title}</h4>
			<p className="fade-in-text">
				{textPara}
			</p>
			<button className="fade-in-text">{buttonCopy} </button>
		</div>
	);
	}

export default Text;


