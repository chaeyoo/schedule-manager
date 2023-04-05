import {IWeeklyPlan} from "./week-plan/interface";
import {IDailyPlan} from "./day-plan/interface";
import {IWeeklyReview} from "./week-review/interface";

export interface IOneWeek {
    weeklyPlan: IWeeklyPlan;
    dailyPlan: IDailyPlan;
    weeklyReview: IWeeklyReview;
}