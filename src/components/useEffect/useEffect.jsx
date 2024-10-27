import React, { useState, useEffect } from "react";

// Інші компоненти залишаються такими ж, як і раніше

const App = () => {
	const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

	// Завантаження стану з локального сховища при завантаженні сторінки
	useEffect(() => {
		const storedFeedback = localStorage.getItem("feedback");
		if (storedFeedback) {
			setFeedback(JSON.parse(storedFeedback));
		}
	}, []);

	// Збереження стану в локальне сховище при зміні відгуків
	useEffect(() => {
		localStorage.setItem("feedback", JSON.stringify(feedback));
	}, [feedback]);

	const updateFeedback = (feedbackType) => {
		setFeedback((prevFeedback) => ({
			...prevFeedback,
			[feedbackType]: prevFeedback[feedbackType] + 1,
		}));
	};

	const resetFeedback = () => {
		setFeedback({ good: 0, neutral: 0, bad: 0 });
	};

	const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
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
