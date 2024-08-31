import React from 'react';
import TextHighLighter from "../TextHighLighter";
import { IoHomeOutline } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";

function Navbar() {
    return (
        <nav
            className="relative flex w-full flex-nowrap items-center justify-between py-2 lg:px-10 lg:flex-wrap lg:justify-start"
        >
            <div
                className="absolute -inset-x-0 -inset-y-1 -z-10 rounded-md transition motion-reduce:transition-none bg-slate-800/50"
            ></div>
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <button
                    className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                    type="button"
                    data-twe-target="#navbarSupportedContent7"
                    aria-controls="navbarSupportedContent7"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span
                        className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor">
          <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"/>
        </svg>
      </span>
                </button>

                <div
                    className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                    id="navbarSupportedContent7"
                >
                    <ul
                        className="list-style-none flex flex-col ps-0 lg:mt-1 lg:flex-row"
                    >
                        <li
                            className="lg:my-0 lg:pe-1"
                        >
                            <a className={"lg:px-2 flex"} href={'https://github.com/MohammadAqibMalik'} target={'_blank'}><SiGithub size={'25px'}/></a>
                        </li>
                        <li
                            className="lg:my-0 lg:pe-1"
                        >
                            <a className={"lg:px-2 flex"} href={'https://www.linkedin.com/in/aqib-malik-36a019256/'} target={'_blank'}><SiLinkedin size={'25px'}/></a>
                        </li>
                        <li
                            className="lg:my-0 lg:pe-1"
                        >
                            <a className={"lg:px-2 flex"} href={'mailto:aqibmalik8041181@gmail.com'} target={'_blank'}><SiGmail size={'25px'}/></a>
                        </li>

                    </ul>
                    <ul
                        className="list-style-none ms-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
                    >
                        <li
                            className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                        >
                            <a
                                className="lg:px-2 flex"
                                aria-current="page"
                                href="/"
                            >
                                <TextHighLighter cssClass={'flex flex-row items-center'}>
                                    <IoHomeOutline/>
                                    <div>Home</div>
                                </TextHighLighter>
                            </a
                            >
                        </li>
                        <li
                            className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                        >
                            <a
                                className="lg:px-2 flex"
                                href="/experience"

                            ><TextHighLighter cssClass={'flex flex-row items-center'}><GoProjectRoadmap />{' '} <span>Experience</span></TextHighLighter></a
                            >
                        </li>
                        <li
                            className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                        >
                            <a
                                className="lg:px-2 flex"
                                href="/resume"

                            ><TextHighLighter cssClass={'flex flex-row items-center'}><FaFileDownload />{' '} <span>Resume</span></TextHighLighter></a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;