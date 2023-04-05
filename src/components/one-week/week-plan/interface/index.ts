export interface IWeeklyPlan {
    period: IWeekPlanDate;
    goal: IWeekGoal;
    plans: IWeekPlans;
}

export interface IWeekPlanDate {
    startDt: string;
    endDt: string;
}

export interface IWeekGoal {
    goal: string;
}

export interface IWeekPlans {
    mon: IWeekPlan;
    tue: IWeekPlan;
    wed: IWeekPlan;
    thr: IWeekPlan;
    fri: IWeekPlan;
    sat: IWeekPlan;
    sun: IWeekPlan;
}

export interface IWeekPlan {
    plan: string;
}