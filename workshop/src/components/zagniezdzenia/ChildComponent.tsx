import React from 'react';
import GrandchildComponent from "./GrandchildComponent.tsx";
import Calculator from "../01_Chapter/Calculator.tsx";

const ChildComponent = () => {
    return (
        <div id="child">
            <GrandchildComponent>
                <h2>Test child</h2>
            </GrandchildComponent>
        </div>
    );
};

export default ChildComponent;
