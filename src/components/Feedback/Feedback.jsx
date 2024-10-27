const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => (
	<div>
		<h2>Feedback Statistics</h2>
		<p>Good: {good}</p>
		<p>Neutral: {neutral}</p>
		<p>Bad: {bad}</p>
		<p>Total Feedback: {totalFeedback}</p>
		<p>Positive Feedback: {positiveFeedback}%</p>
	</div>
);

export default Feedback;
