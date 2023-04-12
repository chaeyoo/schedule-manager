import WeekPlan from "./components/one-week/week-plan";
import WeekReview from "./components/one-week/week-review";


function App() {
  const planMock = {
    period: {
      startDt: '2023-04-10',
      endDt: '2023-04-16'
    },
    goal: "가보자고우",
    plans: [
      {day: "mon", content: "plan1"},
      {day: "tue", content: "plan1"},
      {day: "wed", content: "plan1"},
      {day: "thr", content: "plan1"},
      {day: "fri", content: "plan1"},
      {day: "sat", content: "plan1"},
      {day: "sun", content: "plan1"},

    ]
  }

  const reviewMock = {
    feedback: "Feedback",
    week: [
      {day: "mon", content: "plan1"},
      {day: "tue", content: "plan1"},
      {day: "wed", content: "plan1"},
      {day: "thr", content: "plan1"},
      {day: "fri", content: "plan1"},
      {day: "sat", content: "plan1"},
      {day: "sun", content: "plan1"},

    ]
  }
  return (

    <div>

      <WeekPlan period={planMock.period} goal={planMock.goal} plans={planMock.plans} />
      <WeekReview feedback={reviewMock.feedback} week={reviewMock.week} />
    </div>
  );
}

export default App;
