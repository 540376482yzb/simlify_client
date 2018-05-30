import React from "react"
import Report from "./report"
import {connect} from "react-redux"
export class Preview extends React.Component {
	render() {
		return (
			<div className="preview">
				<header>
					<h1 className="preview-header">
						{this.props.greeting}, <span className="preview-name">{this.props.name}</span>!
					</h1>
				</header>
				<section />
				<main className="preview-content">
					<section>
						<h2 className="preview-message">{this.props.message}</h2>
						<p className="preview-question">{this.props.question}</p>
					</section>
				</main>
			</div>
		)
	}
}

export default connect()(Preview)
