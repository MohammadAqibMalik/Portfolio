import React from 'react';
import SubHeader from "../SubHeader";
import SkillsList from "./SkillsList";
import Marquee from "react-fast-marquee";
import { ICONS_OBJECT } from '../Icons/utils'


interface Props {
    headerText: string,
    dataList: string[],
    direction?: "left" | "right" | "up" | "down",
}

const Empty = () => <></>

const SkillsComponent: React.FC<Props> = ({ headerText, dataList, direction='left'}) => {
    return (
        <section className={'pt-2'}>
            <SubHeader fontLg={'text-3xl'} fontSm={'text-lg'}>{headerText}</SubHeader>
            <SkillsList data={dataList} />
            <Marquee className={'mt-3 p-3'} direction={direction} >
                {dataList.map(icon => {
                    const iconName = icon.toLowerCase().replace(' ', '_')
                    const Icons = ICONS_OBJECT[iconName] || Empty
                    return (
                        <div key={`marque-${iconName}`} className={'hover:scale-105 ease-in-out duration-300'}>
                            <Icons key={`icons-${iconName}`} />
                        </div>
                    )
                })}

            </Marquee>
        </section>
    );
}

export default SkillsComponent;
