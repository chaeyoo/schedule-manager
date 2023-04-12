interface IFeedbackProps {
    feedback: string
}

export default function Feedback(props: IFeedbackProps) {
    return (
        <>
            {props.feedback}
        </>
    )
}