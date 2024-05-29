import React from 'react';

function ToolCardOne(props) {
    return (
        <div className="tool-card-1" style={{flexDirection: props.Index % 2 === 0 ? 'row-reverse' : 'row'}}>
			<div className="tool-image">
				<img src={props.Image} />
			</div>
			<div className="tool-desription-parent">
				<div className="tool-index">{props.Index}</div>
				<div className="tool-name">{props.Name}</div>
				<p className="tool-description">{props.Description}</p>
			</div>
		</div>
    );
}

export default ToolCardOne;