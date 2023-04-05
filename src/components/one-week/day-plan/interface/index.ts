export interface IDailyPlan {
    date: IDayPlanDate;
    todos: IDayTodos;
    records: ITimeRecords;
    feedback: IDayFeedback;
    progress: IDayProgress;
}

export interface IDayPlanDate {
    date: string;
}

export interface IDayTodos {
    todos: IDayTodo[];
}

export interface IDayTodo {
    id: number;
    category: string;
    content: string;
    status: string;
}

export interface ITimeRecords {
    records: ITimeRecord[];
}

export interface ITimeRecord {
    id: number;
    color: string;
    startTime: string;
    endTime: string;
}

export interface IDayFeedback {
    totalTime: string;
    feedback: string;
}

export interface IDayProgress {
    progress: number;
}