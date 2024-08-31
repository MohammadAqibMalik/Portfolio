import React from 'react';
import SubHeader from "../SubHeader";
import TextHighLighter from "../TextHighLighter";

function Icon({ text, children}) {
    return (
        <div className="tech-icons">
            {children}
            <TextHighLighter cssClass={'ml-1 mb-2'}>{text}</TextHighLighter>
        </div>
    );
}

export default Icon;