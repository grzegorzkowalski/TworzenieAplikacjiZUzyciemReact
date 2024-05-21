import {FC} from "react";

const ClockDate: FC<{time: Date}> = ({time}) => {
    return (
        <div>
            <h1>{time.toLocaleDateString()}</h1>
        </div>
    );
};

export default ClockDate;