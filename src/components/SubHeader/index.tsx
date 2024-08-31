import React, {ReactNode} from 'react';

interface Props {
    children: ReactNode,
    fontLg?: string,
    fontSm?: string,
    cssClass?: string,
}

const SubHeader: React.FC<Props> = ({ children,fontLg='text-lg', fontSm='text-3xl', cssClass='' }) => {
    return (
        <h2 className={`mt-3 ${fontLg} font-medium tracking-tight text-slate-200 sm:${fontSm} ${cssClass}`}>{children}</h2>
    );
}

export default SubHeader;