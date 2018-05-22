import React from "react"
import { connect } from "react-redux"
import "../css/report.css"
import { Circle } from "rc-progress"
export function Report(props) {
	if (props.loading || !props.reports) {
		return <div>Page is loading ...</div>
	}
	if (props.error) {
		return <div>Something is not right</div>
	}
	const renderReport = props.reports.map((report, index) => {
		if (report.totalAttempt !== 0) {
			const accurate =
				100 - Math.round(100 * Number(report.inCorrect) / Number(report.totalAttempt))
			return (
				<li key={index} className="report-item">
					<span className="report-question">
						<strong>{report.question}</strong>
					</span>
					<span>
						<p>{report.answer}</p>
					</span>
					<div className="report-progress">
						<Circle percent={accurate} strokeWidth="4" strokeColor="#43A047" />
						<div className="report-progress-text">
							<b>{accurate}%</b>
						</div>
					</div>
				</li>
			)
		}
		return ""
	})
	return <ul style={{ padding: "0", backgroundColor: "white" }}>{renderReport}</ul>
}

const mapStateToProps = state => ({
	reports: state.trainning.report,
	loading: state.trainning.loading,
	error: state.trainning.error
})

export default connect(mapStateToProps)(Report)
