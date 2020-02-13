import React from 'react';

export default class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {

		}
	}

	render(){


		return(
				<header> 
															
					<div class="overlay" id="modal">
						<div class="content">
							<h3>What do I do?</h3>
							<div>
								<p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
								<ul>
									<li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
									<li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
									<li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
								</ul>
								<p>So, Are you ready?</p>
								<a class="close" href="#">Got It!</a>
							</div>
						</div>
					</div>

					<h1>HOT or COLD</h1>

				</header>
			);
	}
}