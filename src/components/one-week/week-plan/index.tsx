import {IWeeklyPlan} from "./interface";
import WeekPlanDate from "./date";
import WeekGoal from "./goal";
import Week from "./week";

export default function WeekPlan (props: IWeeklyPlan) {
    const { period, plans, goal} = props;
    return (
        <>
            <WeekPlanDate startDt={period.startDt} endDt={period.endDt}/>
            <WeekGoal goal={goal}/>
            <Week week={plans}/>
        </>
    )
}