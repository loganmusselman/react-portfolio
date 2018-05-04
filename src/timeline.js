import React from 'react';
import './timeline.css';




class TimelineContinued extends React.Component {
	constructor(props){
		super(props);

		this.state = { show: false };

		this.onPageScrollContinued = this.onPageScrollContinued.bind(this);
		
	}

	componentDidMount(){
		window.addEventListener('scroll', this.onPageScrollContinued);
	}

	onPageScrollContinued(){
		if(window.pageYOffset > 1650){
			this.setState({ show: true });
		}
	}

	render(){
		return(
			<div className={this.state.show ? "Timeline-continued-show" : "Timeline-continued"}>
				<i className="fas fa-thermometer-half fa-3x"></i>
				<h3 className="Timeline-continued-title">Continued Education</h3>
				<p className="Timeline-continued-wordsOne">I learned most of what I know by taking online courses through Coursera. These courses gave me a better understanding of how to write clean semantic HTML, and responsive web pages.</p>
				<p className="Timeline-continued-wordsTwo">The first course that I took really pushed me to continue and further cultivated my passion for designing webpages. This first course was comprised of Introduction to HTML5, Introduction to CSS3, Interactivity with JavaScript, and Responsive Web Design.</p>
			</div>

		)
	}
}

class TimelineFurther extends React.Component {
	constructor(props){
		super(props);

		this.state = { show: false };

		
		this.onPageScrollFurther = this.onPageScrollFurther.bind(this);
		
	}

	componentDidMount(){
		window.addEventListener('scroll', this.onPageScrollFurther);
	}

	onPageScrollFurther(){
		if(window.pageYOffset > 2000){
			this.setState({ show: true });
		}
	}

	render(){
		return(
			<div className={this.state.show ? "Timeline-further-show" : "Timeline-further"}>
				<i className="fas fa-thermometer-three-quarters fa-3x"></i>
				<h3 className="Timeline-further-title">Further Development</h3>
				<p className="Timeline-further-wordsOne">Following the completion of introductory courses, I was eager to consume as much knowledge as possible. This pushed me towards a course specialization for Full Stack Development that focused on the MEAN stack.</p>
				<p className="Timeline-further-wordsTwo">This course covered topics such as Angular, Ionic, Nativescript, Express, and MongoDB. Learning a framework was an eye opening experience, and provided more insight into the complexity of the web design world. Having this knowledge only pushed me further into the development world, and I began to look for more areas to improve.</p>
			</div>

		)
	}
}

class TimelineNow extends React.Component {
	constructor(props){
		super(props);

		this.state = { show: false };

		this.onPageScrollNow = this.onPageScrollNow.bind(this);
	}

	componentDidMount(){
		window.addEventListener('scroll', this.onPageScrollNow);
	}

	onPageScrollNow(){
		if(window.pageYOffset > 2500){
			this.setState({ show: true });
		}
	}

	render(){
		return(
			<div className={this.state.show ? "Timeline-now-show" : "Timeline-now"}>
					<i className="fas fa-star fa-3x"></i>
					<h3 className="Timeline-now-title">Now</h3>
					<p className="Timeline-now-wordsOne">Having the prior knowledge of developing in Angular framework, becoming more comfortable working with node modules, and working with the Material Design layout. I began to feel comfortable enough to begin pursueing a career in web development.</p>
					<p className="Timeline-now-wordsTwo">Following this decision, I also began to look into further knowledge. This brought me to React. I am currently building my knowledge, and constructing a better understanding of the React framework every day.</p>
			</div>

		)
	}
}

class Timeline extends React.Component {
	constructor(props){
		super(props);

		this.state = { show: false };
		
		this.onPageScrollBeginning = this.onPageScrollBeginning.bind(this);
		
	}

	componentDidMount(){
		window.addEventListener('scroll', this.onPageScrollBeginning);
		
	}

	onPageScrollBeginning(){
		if(window.pageYOffset > 1150){
			this.setState({ show: true });
		}
	}

	render(){
		return(
			<div className="timeline-background">
				<h1 className="title">Development Timeline</h1>
				<div className="timeline">
					<span className="Timeline-beginning-dot"></span>
					<span className="Timeline-continued-dot"></span>
					<span className="Timeline-further-dot"></span>
					<span className="Timeline-now-dot"></span>
					<div className="Timeline-line">

					</div>
					<div className={this.state.show ? "Timeline-beginning-show" : "Timeline-beginning"}>
						<i className="fas fa-thermometer-quarter fa-3x"></i>
						<h3 className="Timeline-beginning-title">The Beginning</h3>
						<p className="Timeline-beginning-wordsOne">I started learning to code as a hobby using tools such as CodeAcademy, FreeCodeCamp, and Google.</p>
						<p className="Timeline-beginning-wordsTwo">Working on simple projects, such as coding a hangman game, sparked an ember that would eventually catch fire and drive me toward a career in Web Development.</p>
					</div>
					
					<TimelineContinued />
					<TimelineFurther />
					<TimelineNow />
				</div>
			</div>

			)
	}
}

export default Timeline;