import React from 'react';

interface Props {
    data: string[]
}

const SkillsList: React.FC<Props> = ({ data }) => {
    return (
        <ul className="mt-2 flex flex-wrap">
            {data.map((item, index) => (
                <li key={`${item}-${index}`} className="mr-2.5 mt-2">
                    <div
                        className="flex items-center rounded-lg bg-teal-400/10 px-4 py-2 text-xl font-medium leading-5 text-teal-300 ">{item}
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default SkillsList;