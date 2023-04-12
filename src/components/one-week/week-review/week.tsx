interface IWeekProps {
    week: IDay[];
}

interface IDay {
    day: string;
    content: string;
}

export default function Week(props: IWeekProps) {
    const { week } = props;
    return (
        <>

        </>
    )
}