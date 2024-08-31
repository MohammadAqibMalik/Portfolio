import ProfileHeader from "@/components/ProfileHeader";
import SkillsComponent from "@/components/SkillsComponent";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col px-24 py-6 divide-y divide-gray-500 gap-5">
            <ProfileHeader />
            <SkillsComponent headerText={'Languages'} dataList={['React', 'NextJs', 'JavaScript', 'Python', 'Django','HTML']} />
            <SkillsComponent headerText={'Styles'} dataList={['Tailwind CSS', 'Styled Component', 'Bootstraps', 'SASS', 'CSS']} direction={'right'} />
            <SkillsComponent headerText={'Component / State Management Libraries'} dataList={['Material UI', 'Ant Design', 'React Bootstrap', 'Storybook', 'Redux', 'Mobx', 'RTK Query']} />
            <SkillsComponent headerText={'Test Case'} dataList={['Jest', 'Mocha', 'chai', 'Enzyme', 'Cypress', 'Ghost Inspector']} direction={'right'} />
            <SkillsComponent headerText={'Knowledge of'} dataList={['AWS', 'Webpack', 'Babel', 'PipeLine', 'Github', 'Gitlab', 'Jira', 'ClickUp']} />
        </main>
    );
}
