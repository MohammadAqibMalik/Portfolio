import React, {ReactNode} from 'react';

interface PropsType {
    children: ReactNode,
    cssClass?: string,
}

const TextHighLighter: React.FC<PropsType> = ({ children, cssClass='' }) => {
    return (
        <span className={`font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 ${cssClass}`}>{children}</span>
    );
}

export default TextHighLighter;