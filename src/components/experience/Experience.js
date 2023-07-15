import React from 'react'
import ExperienceCard from './ExperienceCard'
import GSSoC from '../../assets/GSSoC.png'
import SSoC from '../../assets/ssoc.png'
import Hacktoberfest from '../../assets/Hacktoberfest.jpg'
import CodessCafe from '../../assets/CodessCafe.gif'
import SPEC from '../../assets/spec2.png'
import Vibhav from '../../assets/Vibhav.png'

export default function Experience() {

    const experience = [
        {
            id:1,
            img: GSSoC,
            bg: "red-100",
            position: "Open Source Developer",
            company: "GSSoC",
            link: "https://gssoc.girlscript.tech/",
            date: "May 2023 - Aug 2023",
            desc: "Thjhwhbd nx jskhs xbjaxjbsx bssbx xbhxvvsx xbhsvxvx xvsxvvxbvx xvshvxsx xvsxvhx sxv. xvsvxg ssxvgx  fheuwd dwdkand  . xhgdbamn,sndsnd chdjhcsknc. sdhwudhjkwdf dnjkhczm c njhdfsnc  cmnbcb. xnjkjshjdjd."
        },
        {
            id:2,
            img: SSoC,
            bg: "yellow-100",
            position: "Open Source Developer",
            company: "SSoC",
            link: "https://www.linkedin.com/showcase/socialsummerofcode/",
            date: "Jun 2023 - Aug 2023",
            desc: "Thjhwhbd nx jskhs xbjaxjbsx bssbx xbhxvvsx xbhsvxvx xvsxvvxbvx xvshvxsx xvsxvhx sxv. xvsvxg ssxvgx  fheuwd dwdkand  . xhgdbamn,sndsnd chdjhcsknc. sdhwudhjkwdf dnjkhczm c njhdfsnc  cmnbcb. xnjkjshjdjd."
        },
        {
            id:3,
            img: Hacktoberfest,
            bg: "red-100",
            position: "Open Source Developer",
            company: "Hacktoberfest",
            link: "https://www.linkedin.com/company/hacktoberfest/",
            date: "Oct 2022",
            desc: "Thjhwhbd nx jskhs xbjaxjbsx bssbx xbhxvvsx xbhsvxvx xvsxvvxbvx xvshvxsx xvsxvhx sxv. xvsvxg ssxvgx  fheuwd dwdkand  . xhgdbamn,sndsnd chdjhcsknc. sdhwudhjkwdf dnjkhczm c njhdfsnc  cmnbcb. xnjkjshjdjd."
        },
        {
            id:4,
            img: CodessCafe,
            bg: "red-100",
            position: "Mentee",
            company: "CodessCafe",
            link: "https://www.linkedin.com/company/codesscafe/",
            date: "Jan 2023 - Present",
            desc: "Thjhwhbd nx jskhs xbjaxjbsx bssbx xbhxvvsx xbhsvxvx xvsxvvxbvx xvshvxsx xvsxvhx sxv. xvsvxg ssxvgx  fheuwd dwdkand  . xhgdbamn,sndsnd chdjhcsknc. sdhwudhjkwdf dnjkhczm c njhdfsnc  cmnbcb. xnjkjshjdjd."
        },
        {
            id:5,
            img: SPEC,
            bg: "red-100",
            position: "Executive",
            company: "SPEC",
            link: "https://www.linkedin.com/company/spec-nith/",
            date: "Aug 2022 - Mar 2023",
            desc: "Thjhwhbd nx jskhs xbjaxjbsx bssbx xbhxvvsx xbhsvxvx xvsxvvxbvx xvshvxsx xvsxvhx sxv. xvsvxg ssxvgx  fheuwd dwdkand  . xhgdbamn,sndsnd chdjhcsknc. sdhwudhjkwdf dnjkhczm c njhdfsnc  cmnbcb. xnjkjshjdjd."
        },
        {
            id:6,
            img: Vibhav,
            bg: "red-100",
            position: "Volunteer",
            company: "Vibhav",
            link: "https://www.linkedin.com/company/team-vibhav/",
            date: "Mar 2022 - Dec 2022",
            desc: "Thjhwhbd nx jskhs xbjaxjbsx bssbx xbhxvvsx xbhsvxvx xvsxvvxbvx xvshvxsx xvsxvhx sxv. xvsvxg ssxvgx  fheuwd dwdkand  . xhgdbamn,sndsnd chdjhcsknc. sdhwudhjkwdf dnjkhczm c njhdfsnc  cmnbcb. xnjkjshjdjd."
        },
    ]
    return (
        <div name="experience" className="h-full w-full my-20">
            <div className='max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className="flex flex-col justify-center h-full w-full">
                    <div className='flex flex-row justify-center text-4xl text-white sm:text-7xl font-bold'>
                        Experience
                    </div>

                    <div className="mx-auto p-10 md:py-20 px-0 md:p-20 md:px-2">
                        <div className="grid grid-cols-4 gap-10 antialiased ">   
                            {experience.map((exp) => (
                                <ExperienceCard exp={exp} />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
