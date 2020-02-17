import React from 'react';
import Nav from './Nav';
import What from './What';
import GuessList from './GuessList';

import './reset.css';
import './style.css';
export default class Main extends React.Component {
	constructor(props){
		super(props);
		this.whatEnableHandler = this.whatEnableHandler.bind(this);
		this.whatDisableHandler = this.whatDisableHandler.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.navHandler = this.navHandler.bind(this);
		this.state = {
			headerState: false,
			inputNum: 0,
			counter: 0,
			triedNumbers: [],
			winStatus: false,
			winNum: 50,
			msg: {
				hot:"hot",
				kindaHot:"Kinda hot",
				warm:"warm",
				lessThanWarm:"less than warm",
				cold:"cold",
				win: "You Won.Click new game to play again",
				new: "Make your Guess!"
			},
			message: "Make your Guess!"
		}
	}

	componentDidMount(){
		this.generator();
	}

	generator(){
		
		let newNum = Math.random();
		newNum = (newNum*100).toFixed(0);
		//console.log(newNum);
		this.setState({winNum:newNum}, function(){console.log("winning Number: "+this.state.winNum)});
		//console.log("winning Number: "+this.state.winNum);
		
	}

	setMessage(message){
		this.setState({message});
	}

	whatEnableHandler(){
		this.setState({headerState: true})};

	whatDisableHandler(){
		this.setState({headerState: false})};

	navHandler(r){
		if(r === "what"){
			this.whatEnableHandler();
		} else if(r === "newGame"){			
			this.newGame();
		}
	}

	getDiff(inputNum){
		let diff = Math.abs(this.state.winNum - inputNum);
		if(diff<5){
			this.updateMessage(this.state.msg.hot);
		} else if(diff<10){
			this.updateMessage(this.state.msg.kindaHot);
		} else if(diff<20){
			this.updateMessage(this.state.msg.warm);
		} else if(diff<30){
			this.updateMessage(this.state.msg.lessThanWarm);
		} else {
			this.updateMessage(this.state.msg.cold);
		}
		//} else if(diff<40){
	}

	updateMessage(message){
		this.setState({
			message
		});
	}

	handleSubmit(e){
		e.preventDefault();
		if(!this.state.winStatus){
			const inputNum = this.state.inputNum;
			this.state.triedNumbers.push(inputNum);
			this.setCounter();

			this.getDiff(inputNum);

			if(inputNum == this.state.winNum) {
				this.setWinStatus(true);
				this.setMessage(this.state.msg.win);
			}
		}		
	}	

	setNum(inputNum){
		this.setState({
			inputNum
		});
	}

	setWinStatus(winStatus){
		this.setState({
			winStatus
		});
	}

	setCounter(){
		this.setState({counter:this.state.counter+1});
	}

	newGame(){
		this.setState({
			inputNum: 0,
			counter: 0,
			triedNumbers: [],
			winStatus: false,
			message: this.state.msg.new
		});
		this.generator();
	}

	render(){
		
		let navSection;
		if(this.state.headerState){
			navSection = <What onClick={this.whatDisableHandler}/>;
		} else {
			navSection = <Nav onClick={r=>this.navHandler(r)}/>;
		}
		let submitButton;
		if(!this.state.winStatus){
			submitButton = <input 
  				type="submit" 
  				id="guessButton" 
  				className="button" 
  				name="submit" 
  				value="Guess"
  			/>;
		} else {
			submitButton = <input 
				type="submit" 
  				id="guessButton" 
  				className="button" 
  				name="submit" 
  				value="Finished!"
			/>;
		}
		
		return(
			<div>
				<header>					
					{navSection}
					<h1>HOT and COLD</h1>
				</header>

				<section className="game">

					<h2 id="feedback">{this.state.message}</h2>

					<form onSubmit={e=>this.handleSubmit(e)}>
					
						<input 
							type="text" 
							name="userGuess" 
							id="userGuess" 
							className="text" 
							maxLength="3" 
							autoComplete="off" 
							placeholder="Enter your Guess" 
							required							
							onChange={e=>this.setNum(e.target.value)}
							value={this.state.inputNum}
						/>
		      			
		      			{submitButton}
		      			
					</form>
					
		      		<p>Guess #<span id="count">{this.state.counter}</span>!</p>
					
					<GuessList triedNumbers={this.state.triedNumbers}/>

				</section>
			</div>
		);
	}
}