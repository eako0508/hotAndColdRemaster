import React from 'react';

export default function Nav(props){
	return(
			<nav>
				<ul className="clearfix">
					<li><a className="what" href="#" onClick={()=>props.onClick("what")}>What ?</a></li>
					<li><a className="new" href="#" onClick={()=>props.onClick("newGame")}>+ New Game</a></li>
				</ul>
			</nav>
		);
}