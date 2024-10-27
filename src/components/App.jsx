import React, { useState } from "react";

// Компонент Feedback для відображення статистики
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

// Компонент Options для кнопок відгуків
const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => (
	<div>
		<h2>
			Please leave your feedback about our service by selecting one of the
			options below.
		</h2>
		<button onClick={() => onLeaveFeedback("good")}>Good</button>
		<button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
		<button onClick={() => onLeaveFeedback("bad")}>Bad</button>
		{totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
	</div>
);

// Компонент Notification для повідомлення про відсутність статистики
const Notification = () => <p>No feedback given yet.</p>;

// Основний компонент App
const App = () => {
	// Ініціалізація стану
	const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

	// Функція для оновлення стану відгуків
	const updateFeedback = (feedbackType) => {
		setFeedback((prevFeedback) => ({
			...prevFeedback,
			[feedbackType]: prevFeedback[feedbackType] + 1,
		}));
	};

	// Функція для скидання відгуків
	const resetFeedback = () => {
		setFeedback({ good: 0, neutral: 0, bad: 0 });
	};

	// Підрахунок загальної кількості відгуків
	const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

	// Підрахунок відсотка позитивних відгуків
	const positiveFeedback = totalFeedback
		? Math.round((feedback.good / totalFeedback) * 100)
		: 0;

	return (
		<div>
			<h1>Sip Happens Café</h1>
			<Options
				onLeaveFeedback={updateFeedback}
				onReset={resetFeedback}
				totalFeedback={totalFeedback}
			/>
			{totalFeedback > 0 ? (
				<Feedback
					good={feedback.good}
					neutral={feedback.neutral}
					bad={feedback.bad}
					totalFeedback={totalFeedback}
					positiveFeedback={positiveFeedback}
				/>
			) : (
				<Notification />
			)}
		</div>
	);
};

export default App;
