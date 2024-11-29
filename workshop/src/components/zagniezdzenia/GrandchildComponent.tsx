import React from 'react';

const GrandchildComponent = ({children}) => {
    return (
        <div id="grandchild">
            <div id="tu_wstaw">

            </div>
            <div>
                Test
            </div>
            <div>
                Test 2
            </div>
            {children}
        </div>
    );
};

export default GrandchildComponent;
