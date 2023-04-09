import {IWeekGoal} from "./interface";

export default function WeekGoal (props: IWeekGoal) {

    return (
        <>
            {props.goal}
        </>
    )
}