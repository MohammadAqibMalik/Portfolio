import ExperienceCard from "@/components/ExperienceCard";
import TextHighLighter from "@/components/TextHighLighter";

export default function Experience() {
    return (
        <main className="flex min-h-screen flex-col px-24 py-6">
            <h1 className={"text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl mb-9 w-full flex justify-center border-b-2 border-gray-500 pb-4"}>Experience</h1>
            <div
                className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-50 before:to-transparent">
                <div
                    className="relative group flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div
                        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-teal-300 group-[.is-active]:bg-teal-950 group-[.is-active]:text-teal-300 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        1
                    </div>
                    <ExperienceCard
                        date={'April 2024 - Present'}
                        skills={['React', 'RTK Query', 'Storybook', 'Material UI']}
                        role={'Software Engineer | React | RTK Query'}
                        projectName={'Learning Management'}
                    >
                        <div className={'flex flex-col gap-2'}>
                            <div>
                                As a <TextHighLighter>Software Engineer</TextHighLighter> dedicated to creating{' '}
                                impactful <TextHighLighter>educational tools</TextHighLighter>, Contributed in developed{' '}
                                a comprehensive Learning Management System <TextHighLighter>(LMS)</TextHighLighter>{' '}
                                that bridges the gap between teachers, students, and district administration.
                            </div>
                            <div>
                                Built with React, RTK Query, and Storybook, this project streamlines the assessment
                                process while maintaining vital records for teachers, students, and district schools.{' '}
                                The system enables teachers to easily <TextHighLighter>create</TextHighLighter> and{' '}
                                <TextHighLighter>submit assessments</TextHighLighter>, allows students to interact{' '}
                                intuitively by attempting and submitting their work, and provides a platform for{' '}
                                teachers to review submissions and provide feedback and marks.
                            </div>
                            <div>
                                Additionally, it manages detailed records, ensuring seamless administration and{' '}
                                oversight. This project reflects my commitment to enhancing educational experiences{' '}
                                and administrative efficiency through technology.
                            </div>
                        </div>
                    </ExperienceCard>
                </div>


                <div
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div
                        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-teal-300 group-[.is-active]:bg-teal-950 group-[.is-active]:text-teal-300 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        2
                    </div>
                    <ExperienceCard
                        date={`August 2022 - March 2024`}
                        skills={['React', 'Django', 'Redux', 'Storybook', 'D3', 'single-spa', 'mocha', 'enzyme', 'style-component', 'launchdarkly', 'AWS', 'Jira']}
                        role={'Software Engineer | React | Django | Micro-Service'}
                        projectName={'Elevate Security'}
                    >
                        <div className={'flex flex-col gap-2'}>
                            <div>
                                I contributed to the development of web applications by
                                leveraging <TextHighLighter>React</TextHighLighter>, <TextHighLighter>Django</TextHighLighter>,
                                and <TextHighLighter>micro-services</TextHighLighter>,
                                with a focus on designing user interfaces using React JS, Redux, D3, Storybook, and
                                styled-components.
                            </div>
                            <div>
                                My responsibilities included participating in <TextHighLighter>code
                                reviews</TextHighLighter> to uphold code quality and ensure compliance with coding
                                standards. I implemented new features, resolved bugs, and optimized application
                                performance, achieving a 20% increase in user satisfaction.
                            </div>
                            <div>
                                Collaborating closely with cross-functional teams, I ensured that project requirements
                                were met, delivering high-quality software solutions within tight deadlines.
                                Additionally, I utilized a <TextHighLighter>custom-built component
                                library</TextHighLighter> to maintain seamless integration and a consistent look and
                                feel throughout the application.
                            </div>
                        </div>
                    </ExperienceCard>
                </div>

                <div
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div
                        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-teal-300 group-[.is-active]:bg-teal-950 group-[.is-active]:text-teal-300 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        3
                    </div>
                    <ExperienceCard
                        date={'January 2022 - July 2022'}
                        skills={['Next.js', 'Tailwind']}
                        role={'Senior Front End Engineer | Next.Js | TailWind'}
                        projectName={'E-commerce SEO'}
                    >
                        <div className={'flex flex-col gap-2'}>
                            <div>
                                I implemented on-page <TextHighLighter>SEO strategies</TextHighLighter> specifically
                                tailored for <TextHighLighter>Next.js</TextHighLighter>, focusing on optimizing product
                                pages, meta tags, and URL structures.
                            </div>
                            <div>
                                In addition to enhancing <TextHighLighter>SEO</TextHighLighter>, I worked on improving
                                the overall user experience and{' '}
                                <TextHighLighter>mobile responsiveness</TextHighLighter>, which are critical for
                                E-commerce success.
                            </div>
                            <div>
                                My contributions extended to the redesign of the company website, leading to a 30%
                                increase in user engagement. I also participated in {' '}
                                <TextHighLighter>code reviews</TextHighLighter> to ensure high code quality and
                                consistency across the project.
                            </div>
                        </div>
                    </ExperienceCard>
                </div>

                <div
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div
                        className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-teal-300 group-[.is-active]:bg-teal-950 group-[.is-active]:text-teal-300 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                        4
                    </div>
                    <ExperienceCard
                        date={'June 2021 - January 2022'}
                        skills={['React', 'SCSS', 'AntD', 'Mobx']}
                        role={'Front-End Developer | React | Mobx'}
                        projectName={'Enterprise Resource Planning'}
                    >
                        <div className={'flex flex-col gap-2'}>
                            <div>
                                I led the development of an Enterprise Resource Planning (ERP) system, where I enhanced
                                the user interface using <TextHighLighter>React.js</TextHighLighter> to create a
                                more user-friendly experience.
                            </div>
                            <div>
                                I collaborated closely with the development team to ensure the effective integration
                                of features and a seamless user experience. Additionally, I played a crucial role
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                in improving the system's efficiency and functionality.
                            </div>
                        </div>
                    </ExperienceCard>
                </div>
            </div>
        </main>
    )
}