import {FC} from 'react';


const ClockDate : FC<{date: string}> = ({date}) => {

    return <h2>{date}</h2>
};

export default ClockDate;
