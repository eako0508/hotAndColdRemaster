import React from 'react';

export default function GuessList(props){

	const showList = props.triedNumbers.map((input, index)=>
			<li key={index}>{input}</li>
		);
	return(
		<ul id="guessList" className="guessBox clearfix">
			{showList}
		</ul>
	);
}