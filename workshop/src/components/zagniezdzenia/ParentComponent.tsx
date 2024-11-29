import React from 'react';
import ChildComponent from "./ChildComponent.tsx";

const ParentComponent = () => {
    return (
        <div id="parent">
            <ChildComponent />
        </div>
    );
};

export default ParentComponent;
