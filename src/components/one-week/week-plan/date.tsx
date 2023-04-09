import {IWeekPlanDate} from "./interface";
import {DatePicker} from "antd";

export default function WeekPlanDate (props: IWeekPlanDate) {
    const { startDt, endDt } = props;
    return (
        <>
            <DatePicker />
            <DatePicker />
        </>
    )
}