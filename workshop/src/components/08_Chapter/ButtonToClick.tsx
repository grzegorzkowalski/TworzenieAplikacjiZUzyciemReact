import React from 'react';

const ButtonToClick = ({updateCounter}: {updateCounter : Function}) => {
    return <button onClick={updateCounter}>Klik</button>
};

export default ButtonToClick;
