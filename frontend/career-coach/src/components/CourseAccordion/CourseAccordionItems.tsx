import React, { useState } from 'react'
import { DownChevron } from '../../assets/icons/DownChevron';

interface CourseInfo {
    coursename: string;
    link: string;
    skilllevel: string;
    price: string;
    description: string;
  }

  interface AccordionItemProps {
    month: string;
    title: string;
    courseInfo: CourseInfo;
  }

export const CourseAccordionItems: React.FC<AccordionItemProps> = ({ month, title, courseInfo }) => {
    const [open, setOpen] = useState<boolean>(false);

    const url = courseInfo.link;

    const transformURL = (url: string) => {
        const pattern = /https?:\/\/(?:www\.)?([^\/]+)\/.*\/([^\/?#]+)(?:[?#]|$)/;
        const match = url.match(pattern);
        if (match) {
            const domain = match[1].replace(/\..+$/, '');
            const lastPartOfPath = match[2].replace(/-/g, ' ');
            return `${domain} - ${lastPartOfPath}`;
        }
        return 'Course Link';
    }

    const transformed = transformURL(url);

    const capitalizeWords = (str: string) => {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    const formattedUrl = capitalizeWords(transformed)

  return (
    <div className="flex justify-center items-center">
        <div className="border-4 rounded-md border-purpleText p-5 w-[1100px]">
            <div className="flex flex-col">
                <div className="flex justify-between">
                    <span className="font-bold text-base text-purpleText">{month}: {title}</span>
                    <div>
                        <button
                            onClick={() => setOpen(!open)}
                            aria-expanded={open}
                            className="border-4 rounded-lg border-purpleText p-1"
                        >
                            <DownChevron />
                        </button>
                    </div>
                </div>
                <p className="text-xs font-medium text-purpleText">{courseInfo.description}</p>
            </div>
            {open && (
            <div className="bg-buttonWhite border-2 border-purpleText rounded-md p-3 text-purpleText">
                <p className="">Course Name: {courseInfo.coursename}</p>
                <p>
                    <a
                        href={courseInfo.link}
                        className="underline cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {formattedUrl}
                    </a>
                </p>
                <p>Skill Level: {courseInfo.skilllevel}</p>
                <p>Price: {courseInfo.price}</p>
            </div>
            )}
        </div>
    </div>
  )
}
