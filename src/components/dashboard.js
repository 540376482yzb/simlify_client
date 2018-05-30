import React from "react"
import requiresLogin from "./requires-login"
import Preview from "./preview"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import {fetchQuestion, generateQuestions, fetchReport} from "../actions/trainning"
import "../css/dashboard.css"
import MediaQuery from "react-responsive"
import {Circle} from "rc-progress"
import Report from "./report"
export class Dashboard extends React.Component {
	constructor(props) {
		super(props)

		this.state = {Redirect: false}
	}

	componentDidMount() {
		this.props.dispatch(fetchQuestion())
		this.props.dispatch(fetchReport())
	}

	render() {
		if (this.props.loading) {
			return (
				<div>
					<p>One second, the page is still loading!</p>
				</div>
			)
		}

		if (this.state.Redirect === true) {
			return <Redirect to={`/trainning/${this.props.id}`} />
		}

		const {name, currentQuestion, grade, experience} = this.props
		let renderContent
		if (currentQuestion) {
			renderContent = (
				<div>
					<Preview
						greeting="Welcome back"
						name={name}
						message="Your last word was"
						question={currentQuestion}
					/>
					<button
						className="preview-primary-button"
						onClick={() => this.setState({Redirect: true})}
					>
						Continue
					</button>
				</div>
			)
		} else {
			renderContent = (
				<div>
					<Preview greeting="Hello" name={name} message="Start learning" experience={experience} />
					<button
						className="preview-primary-button"
						onClick={e => {
							e.preventDefault()
							this.props.dispatch(generateQuestions()).then(() => this.setState({Redirect: true}))
						}}
					>
						Start new session
					</button>
					{/* <button className="preview-button">Favorites (Coming soon!)</button> */}
					<div>
						<b style={{color: "black"}}>User Level</b>
					</div>
				</div>
			)
		}

		return (
			<div className="dashboard">
				<main>
					<MediaQuery query="(min-device-width: 320px)">{renderContent}</MediaQuery>
					<section className="progress">
						<Circle percent={experience} strokeWidth="4" strokeColor="#43A047" />
						<div className="progress-text">
							<b>Level: </b> {grade}
						</div>
					</section>
				</main>
				<section className="dashboard-report">
					<header>
						<h3>Report</h3>
					</header>
					<Report />
				</section>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const {currentUser} = state.user
	if (currentUser) {
		return {
			name: currentUser.firstname,
			id: currentUser.id,
			currentQuestion: state.trainning.currentQuestion,
			next: state.trainning.next,
			loading: state.trainning.loading,
			grade: state.trainning.grade,
			experience: state.trainning.experience,
			report: state.trainning.report
		}
	} else {
		return {
			name: null,
			id: null
		}
	}
}

export default requiresLogin()(connect(mapStateToProps)(Dashboard))
