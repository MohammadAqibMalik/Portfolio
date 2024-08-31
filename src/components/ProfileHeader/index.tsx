import React from 'react';
import TextHighLighter from "../TextHighLighter";
import SubHeader from "../SubHeader";
import TypeWriter from "../TypeWritter";

const ProfileHeader: React.FC = () => {
    return (
        <section className={'flex flex-row justify-between align-top'}>
            <div>
                <h1 className={"text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"}>M Aqib Malik</h1>
                <SubHeader fontLg={'text-lg'} fontSm={'text-xl'}>
                    <TypeWriter />
                </SubHeader>
                <SubHeader fontLg={'text-lg'} fontSm={'text-xl'}>Hi There! <span className="wave" role="img"
                                                                                 aria-labelledby="wave">👋🏻</span>
                </SubHeader>
            </div>
            <p className="mt-4 max-w-screen-md leading-normal text-justify">
                As a <TextHighLighter>Software Engineer</TextHighLighter> with over <TextHighLighter>4
                Years</TextHighLighter> of experience, I specialize in creating intuitive and responsive user interfaces
                that enhance user experience and drive engagement through innovative design and seamless functionality.
                My expertise includes working with modern frameworks
                like <TextHighLighter>React</TextHighLighter>, <TextHighLighter>Next</TextHighLighter> and <TextHighLighter>Django</TextHighLighter>.
                I have a
                strong background in HTML, CSS, and JavaScript. I am passionate about optimizing web performance and
                ensuring accessibility, and I thrive in collaborative environments where I can mentor junior developers
                and ensure project success from concept to completion.</p>
        </section>
    );
}

export default ProfileHeader;