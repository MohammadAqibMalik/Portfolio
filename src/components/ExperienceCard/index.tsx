import React, {ReactNode} from 'react';

interface Props {
    date: string,
    skills: string[],
    role: string,
    projectName: string,
    children: ReactNode,
}

const ExperienceCard: React.FC<Props> = ({ date='2024 — Present', skills, role,projectName, children}) => {
    return (
        <div
            className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 group relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 opacity-50 lg:group-hover/list:opacity-50 transform transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:!opacity-100">
            <div
                className="absolute -inset-x-1 -inset-y-1 z-0 rounded-md transition motion-reduce:transition-none lg:-inset-x-1 lg:block bg-slate-800/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg"
            ></div>
            <header
                className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                aria-label="2024 to Present">{date}
            </header>
            <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                    <div className={'flex flex-col items-baseline justify-between font-medium leading-tight text-teal-300 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base'}>
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <div className={'text-2xl'}>{projectName} Project</div>
                        <div className={'text-white'}>{role}</div>
                    </div>
                </h3>
                <div className="mt-3 text-sm leading-normal">
                    {children}
                </div>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {skills.map((item, index) => {
                        return (
                            <li key={`skills-${index}`} className="mr-1.5 mt-2">
                                <div
                                    className="flex items-center rounded-lg bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{item}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ExperienceCard;