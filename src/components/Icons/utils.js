import React from 'react'
import { DiReact, DiJavascript1, DiCss3  } from "react-icons/di";
import {
    SiDjango,
    SiPython,
    SiStyledcomponents,
    SiBootstrap,
    SiSass,
    SiAntdesign,
    SiStorybook,
    SiRedux,
    SiMobx,
    SiReduxsaga,
    SiAmazonaws,
    SiWebpack,
    SiBabel,
    SiGithub,
    SiGitlab,
    SiJira,
    SiClickup,
    SiJest,
    SiMocha,
    SiChai,
    SiCypress
} from "react-icons/si";
import { TbBrandNextjs, TbGhost2 } from "react-icons/tb";
import { ImHtmlFive2 } from "react-icons/im";
import { RiTailwindCssFill } from "react-icons/ri";

import Icon from "./Icon";
import {white} from "next/dist/lib/picocolors";

export const ICONS_OBJECT = {
    'react': ({ text= 'React Js', color= '#5ED3F3'}) => <Icon text={text}><DiReact color={color} /></Icon>,
    'nextjs': ({ text= 'NEXT.js', color= 'white'}) => <Icon text={text}><TbBrandNextjs color={color} /></Icon>,
    'javascript': ({ text= 'JavaScript', color= 'white'}) => <Icon text={text}><DiJavascript1 color={color} /></Icon>,
    'python': ({ text= 'Python', color= 'gold'}) => <Icon text={text}><SiPython color={color} /></Icon>,
    'django': ({ text= 'Django', color= 'white'}) => <Icon text={text}><SiDjango color={color} /></Icon>,
    'html': ({ text= 'HTML', color= 'gold'}) => <Icon text={text}><ImHtmlFive2 color={color} /></Icon>,
    'css': ({ text= 'css', color= 'blue'}) => <Icon text={text}><DiCss3 color={color} /></Icon>,
    'tailwind_css': ({ text= 'Tailwind Css', color= '#38BDF8'}) => <Icon text={text}><RiTailwindCssFill color={color} /></Icon>,
    'styled_component': ({ text= 'Styled Component', color= '#9C663D'}) => <Icon text={text}><SiStyledcomponents color={color} /></Icon>,
    'bootstraps': ({ text= 'Bootstraps', color= '#7911F7'}) => <Icon text={text}><SiBootstrap color={color} /></Icon>,
    'sass': ({ text= 'SASS', color= '#CF649A'}) => <Icon text={text}><SiSass color={color} /></Icon>,
    'ant_design': ({ text= 'Ant Design', color= '#38BDF8'}) => <Icon text={text}><SiAntdesign color={color} /></Icon>,
    'storybook': ({ text= 'Storybook', color= '#CF649A'}) => <Icon text={text}><SiStorybook color={color} /></Icon>,
    'redux': ({ text= 'Redux', color= '#764ABC'}) => <Icon text={text}><SiRedux color={color} /></Icon>,
    'mobx': ({ text= 'Mobx', color= '#E15F12'}) => <Icon text={text}><SiMobx color={color} /></Icon>,
    'rtk_query': ({ text= 'RTK Query', color= '#764ABC'}) => <Icon text={text}><SiReduxsaga color={color} /></Icon>,
    'aws': ({ text= 'AWS', color= 'white'}) => <Icon text={text}><SiAmazonaws color={color} /></Icon>,
    'webpack': ({ text= 'Webpack', color= '#1C78C0'}) => <Icon text={text}><SiWebpack color={color} /></Icon>,
    'babel': ({ text= 'Babel', color= 'gold'}) => <Icon text={text}><SiBabel color={color} /></Icon>,
    'github': ({ text= 'Github', color= 'white'}) => <Icon text={text}><SiGithub color={color} /></Icon>,
    'gitlab': ({ text= 'Gitlab', color= '#FC6D26'}) => <Icon text={text}><SiGitlab color={color} /></Icon>,
    'jira': ({ text= 'Jira', color= '#0D63DD'}) => <Icon text={text}><SiJira color={color} /></Icon>,
    'clickup': ({ text= 'Click UP', color= '#FC6187'}) => <Icon text={text}><SiClickup color={color} /></Icon>,
    'jest': ({ text= 'Jest', color= '#9A435C'}) => <Icon text={text}><SiJest color={color} /></Icon>,
    'mocha': ({ text= 'Mocha', color= '#9C663D'}) => <Icon text={text}><SiMocha color={color} /></Icon>,
    'chai': ({ text= 'Chai', color= '#9C663D'}) => <Icon text={text}><SiChai color={color} /></Icon>,
    'ghost_inspector': ({ text= 'Ghost Inspector', color= 'white'}) => <Icon text={text}><TbGhost2 color={color} /></Icon>,
}