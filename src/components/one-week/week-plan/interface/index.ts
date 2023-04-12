export interface IWeeklyPlan {
    period: IWeekPlanDate;
    goal: string;
    plans: IDay[];
}

export interface IWeekPlanDate {
    startDt: string;
    endDt: string;
}

export interface IWeekGoal {
    goal: string;
}


export interface IDay {
    day: string;
    content: string;
}

