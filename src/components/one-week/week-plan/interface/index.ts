export interface IWeeklyPlan {
    period: IWeekPlanDate;
    goal: string;
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
    mon: string;
    tue: string;
    wed: string;
    thr: string;
    fri: string;
    sat: string;
    sun: string;
}
