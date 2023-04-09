import WeekPlan from "./components/one-week/week-plan";


function App() {
  const mock = {
    period: {
      startDt: '2023-04-10',
      endDt: '2023-04-16'
    },
    goal: "가보자고우",
    plans: {
      mon: "plan1",
      tue: "plan2",
      wed: "plan3",
      thr: "plan4",
      fri: "plan5",
      sat: "plan6",
      sun: "plan7",
    }
  }
  return (

    <div>
      <WeekPlan period={mock.period} goal={mock.goal} plans={mock.plans} />
    </div>
  );
}

export default App;
