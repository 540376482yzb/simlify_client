import React from "react"
import {openSignUp, openDialog} from "../actions/control"
import {connect} from "react-redux"
import "../css/about.css"
import Sims from "../sims.png"
import MediaQuery from "react-responsive"

export function About(props) {
	const {dispatch} = props
	const handleOpenDialog = () => {
		dispatch(openDialog())
		return dispatch(openSignUp())
	}
	return (
		<div className="about">
			<MediaQuery query="(min-device-width: 320px)">
				<main role="main" className="about-container">
					<section className="about-image">
						<img src={Sims} alt="4 Sims taking a selfie" />
					</section>
					<section className="about-info">
						<h1 className="about-header">Learn Simlish at your own pace.</h1>
						<p>
							<b>Simlify</b> is an app that teaches Simlish using spaced repetition. Simlish is a
							fictional language featured in The Sims, a video-game franchise by EA Games.
						</p>
						<hr />
						<h3 className="about-header">Adaptive Learning</h3>
						<section className="about-content">
							<div
								style={{
									border: "solid 0.5px rgba(15,15,15,0.2)",
									padding: 10
								}}
							>
								<img src="about1.png" alt="positive feedback" width="100%" />
							</div>
							<p>
								Uses <i>Space-repetition algorithm</i> to adapt your learning style. The frequency
								of the same question occurs depends on accuracy of your answers.
							</p>
						</section>
						<br />
						<hr />
						<h3 className="about-header">Incentive Learning</h3>
						<section className="about-content">
							<div
								style={{
									border: "solid 0.5px rgba(15,15,15,0.2)",
									padding: 10
								}}
							>
								<img src="about2.png" alt="positive feedback" width="100%" />
							</div>
							<p>
								Grow your experiences and levels with learning. Every time you hit a correct answer,
								the system will reward you with certain experiences to help you reach next level.
							</p>
						</section>
					</section>
				</main>
			</MediaQuery>
		</div>
	)
}

export default connect()(About)
