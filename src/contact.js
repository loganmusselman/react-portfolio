import React from 'react';
import './contact.css';

class Contact extends React.Component {
	
	constructor(props){
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			reason: '',
			comment: ''
			
		}

		this.handleInputFirstName = this.handleInputFirstName.bind(this);
		this.handleInputLastName = this.handleInputLastName.bind(this);
		this.handleInputEmail = this.handleInputEmail.bind(this);
		this.handleInputReason = this.handleInputReason.bind(this);
		this.handleInputComment = this.handleInputComment.bind(this);
		
	}

	handleInputFirstName(event){
		this.setState({ firstName: event.target.value });
		console.log(this.state.firstName);
	}

	handleInputLastName(event){
		this.setState({ lastName: event.target.value });
	}

	handleInputEmail(event){
		this.setState({ email: event.target.value });
	}

	handleInputReason(event){
		this.setState({ reason: event.target.value });
	}

	handleInputComment(event){
		this.setState({ comment: event.target.value });
	}

	
	render(){

		return(

			<div className="Contact-holder">
				<h1 className="Contact-title">Contact Me</h1>
				<form className="Contact-container">
					<input className="first" value={this.state.firstName} onChange={this.handleInputFirstName} type="text" name="first-name" placeholder="First Name (required)" required/>
					<input className="last" value={this.state.lastName} onChange={this.handleInputLastName} type="text" name="last-name" placeholder="Last Name (required)" required/>
					<input className="email" value={this.state.email} onChange={this.handleInputEmail} type="email" name="email" placeholder="Email (required)" required/>
					<select className="reason" value={this.state.reason}  onChange={this.handleInputReason}>
						<option defaultValue hidden>Reason for response</option>
						<option name="job">A Job Opportunity</option>
						<option name="feedback">Website Feedback</option>
					</select>
					<textarea className="comment" value={this.state.comment} onChange={this.handleInputComment} type="text" name="feedback" placeholder="Leave Comment Here"></textarea>
				<button className="submit" type="submit" action="submit">Send Message</button>
				</form>
				<ReactForm className="Contact-input" first={this.state.firstName} last={this.state.lastName} email={this.state.email} reason={this.state.reason} comment={this.state.comment} />

			</div>

		);

	}
}


class ReactForm extends React.Component {
	constructor(props){
		super(props);

		this.handleInputFirstName = this.handleInputFirstName.bind(this);
		this.handleInputLastName = this.handleInputLastName.bind(this);
		this.handleInputEmail = this.handleInputEmail.bind(this);
		this.handleInputReason = this.handleInputReason.bind(this);
		this.handleInputComment = this.handleInputComment.bind(this);
	}

	handleInputFirstName(event){
		this.props.handleInputFirstName(event.target.value);
	}

	handleInputLastName(event){
		this.props.handleInputLastName(event.target.value);
	}

	handleInputEmail(event){
		this.props.handleInputEmail(event.target.value);
	}

	handleInputReason(event){
		this.props.handleInputReason(event.target.value);
	}

	handleInputComment(event){
		this.props.handleInputComment(event.target.value);
	}

	render(){

		const first = this.props.first;
		const last = this.props.last;
		const email = this.props.email;
		const reason = this.props.reason;
		const message = this.props.comment;

		return(

			<div className="Form-container">
					<p>John, </p>
					<p>{'I can be reached at ' + email}</p>
					<p>{'This message is for ' + reason}</p>
					<p>{'I hope this finds you well. ' + message}</p>
					<p>Regards,</p>
					<p className="signature"><br/> {first + ' ' + last}</p>
				
			</div>
		)
	}
}

export default Contact;