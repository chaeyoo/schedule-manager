import Feedback from "./feedback";
import Week from "./week";

interface IDay {
    day:string;
    content: string;
}
interface IWeekReviewProps {
    feedback: string;
    week: IDay[];
}

export default function WeekReview(props: IWeekReviewProps) {
    const {feedback, week} = props;
    return (
        <>
            <Week week={week}/>
            <Feedback feedback={feedback} />
        </>
    )
}