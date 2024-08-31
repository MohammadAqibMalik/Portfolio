import React from 'react';
import TextHighLighter from "../TextHighLighter";
import { SiGithub } from "react-icons/si";
import { SiLinkedin, SiGmail } from "react-icons/si";

function Footer() {
    return (
        <footer className="py-2 relative w-full flex flex-row justify-between">
            <div
                className="absolute -inset-x-0 -inset-y-1 -z-10 rounded-md transition motion-reduce:transition-none bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg"
            ></div>
            <div className={'w-1/3'} />
            <div className={'w-1/3 flex flex-row justify-center'}>
                <TextHighLighter>M AQIB MALIK</TextHighLighter>{' '}©{' '} <TextHighLighter>2024</TextHighLighter>
            </div>
            <div className={'flex flex-row items-center gap-5 px-10 w-1/3'}>
                <a href={'https://github.com/MohammadAqibMalik'} target={'_blank'}><SiGithub size={'25px'}/></a>
                <a href={'https://www.linkedin.com/in/aqib-malik-36a019256/'} target={'_blank'}><SiLinkedin size={'25px'}/></a>
                <a href={'mailto:aqibmalik8041181@gmail.com'} target={'_blank'}><SiGmail size={'25px'}/></a>
            </div>
        </footer>);
}

export default Footer;