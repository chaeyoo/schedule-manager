export interface IWeeklyReview {
    weekReviews: IWeekReviews;
    feedback: IWeekFeedback;
}

export interface IWeekReviews {
    mon: IWeekReview;
    tue: IWeekReview;
    wed: IWeekReview;
    thr: IWeekReview;
    fri: IWeekReview;
    sat: IWeekReview;
    sun: IWeekReview;
}

export interface IWeekReview {
    review: string;
}

export interface IWeekFeedback {
    feedback: string;
}
