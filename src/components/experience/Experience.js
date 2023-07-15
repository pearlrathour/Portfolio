import React, { useEffect } from 'react'
// import ExperienceCard from './ExperienceCard'
import GSSoC from '../../assets/GSSoC.png'
import SSoC from '../../assets/ssoc.png'
import Hacktoberfest from '../../assets/Hacktoberfest.jpg'
import CodessCafe from '../../assets/CodessCafe.gif'
import SPEC from '../../assets/spec.png'
import Vibhav from '../../assets/Vibhav.png'

export default function Experience() {

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const handleScroll = () => {
        const cards = document.querySelectorAll('.card');
        const baseHeight = Math.max(
          ...Array.from(cards).map((card) => card.offsetHeight)
        );
    
        cards.forEach((card) => {
          card.style.height = `${baseHeight}px`;
        });
      };

    // const experience = [
    //     {
    //         id: 1,
    //         img: GSSoC,
    //         bg: "red-100",
    //         position: "Open Source Developer",
    //         company: "GSSoC",
    //         link: "https://gssoc.girlscript.tech/",
    //         date: "May 2023 - Aug 2023",
    //         desc: "Thjhwhbd nx jskhs xbjaxjbsx bssbx xbhxvvsx xbhsvxvx xvsxvvxbvx xvshvxsx xvsxvhx sxv. xvsvxg ssxvgx  fheuwd dwdkand  . xhgdbamn,sndsnd chdjhcsknc. sdhwudhjkwdf dnjkhczm c njhdfsnc  cmnbcb. xnjkjshjdjd."
    //     },
    //     {
    //         id: 2,
    //         img: SSoC,
    //         bg: "yellow-100",
    //         position: "Open Source Developer",
    //         company: "SSoC",
    //         link: "https://www.linkedin.com/showcase/socialsummerofcode/",
    //         date: "Jun 2023 - Aug 2023",
    //         desc: "Thjhwhbd nx jskhs xbjaxjbsx bssbx xbhxvvsx xbhsvxvx xvsxvvxbvx xvshvxsx xvsxvhx sxv. xvsvxg ssxvgx  fheuwd dwdkand  . xhgdbamn,sndsnd chdjhcsknc. sdhwudhjkwdf dnjkhczm c njhdfsnc  cmnbcb. xnjkjshjdjd."
    //     },
    //     {
    //         id: 3,
    //         img: Hacktoberfest,
    //         bg: "red-100",
    //         position: "Open Source Developer",
    //         company: "Hacktoberfest",
    //         link: "https://www.linkedin.com/company/hacktoberfest/",
    //         date: "Oct 2022",
    //         desc: "Thjhwhbd nx jskhs xbjaxjbsx bssbx xbhxvvsx xbhsvxvx xvsxvvxbvx xvshvxsx xvsxvhx sxv. xvsvxg ssxvgx  fheuwd dwdkand  . xhgdbamn,sndsnd chdjhcsknc. sdhwudhjkwdf dnjkhczm c njhdfsnc  cmnbcb. xnjkjshjdjd."
    //     },
    //     {
    //         id: 4,
    //         img: CodessCafe,
    //         bg: "red-100",
    //         position: "Mentee",
    //         company: "CodessCafe",
    //         link: "https://www.linkedin.com/company/codesscafe/",
    //         date: "Jan 2023 - Present",
    //         desc: "Thjhwhbd nx jskhs xbjaxjbsx bssbx xbhxvvsx xbhsvxvx xvsxvvxbvx xvshvxsx xvsxvhx sxv. xvsvxg ssxvgx  fheuwd dwdkand  . xhgdbamn,sndsnd chdjhcsknc. sdhwudhjkwdf dnjkhczm c njhdfsnc  cmnbcb. xnjkjshjdjd."
    //     },
    //     {
    //         id: 5,
    //         img: SPEC,
    //         bg: "red-100",
    //         position: "Executive",
    //         company: "SPEC",
    //         link: "https://www.linkedin.com/company/spec-nith/",
    //         date: "Aug 2022 - Mar 2023",
    //         desc: "Thjhwhbd nx jskhs xbjaxjbsx bssbx xbhxvvsx xbhsvxvx xvsxvvxbvx xvshvxsx xvsxvhx sxv. xvsvxg ssxvgx  fheuwd dwdkand  . xhgdbamn,sndsnd chdjhcsknc. sdhwudhjkwdf dnjkhczm c njhdfsnc  cmnbcb. xnjkjshjdjd."
    //     },
    //     {
    //         id: 6,
    //         img: Vibhav,
    //         bg: "red-100",
    //         position: "Volunteer",
    //         company: "Vibhav",
    //         link: "https://www.linkedin.com/company/team-vibhav/",
    //         date: "Mar 2022 - Dec 2022",
    //         desc: "Thjhwhbd nx jskhs xbjaxjbsx bssbx xbhxvvsx xbhsvxvx xvsxvvxbvx xvshvxsx xvsxvhx sxv. xvsvxg ssxvgx  fheuwd dwdkand  . xhgdbamn,sndsnd chdjhcsknc. sdhwudhjkwdf dnjkhczm c njhdfsnc  cmnbcb. xnjkjshjdjd."
    //     },
    //]
    return (
        <div name="experience" className="h-full w-full my-20">
            <div className='max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className="flex flex-col justify-center h-full w-full">
                    <div className='flex flex-row justify-center text-4xl text-white sm:text-7xl font-bold'>
                        Experience
                    </div>

                    <div className="flex flex-col mx-auto p-10 md:py-20 px-0 md:p-20 md:px-2 w-3/4">
                        <div className="grid grid-cols-3 gap-10 antialiased">
                            {/* {experience.map((exp) => (
                                <ExperienceCard exp={exp} />
                            ))} */}

                            <a href="https://gssoc.girlscript.tech/" className="flex flex-col shadow-lg shadow-gray-500 mx-auto max-w-lg bg-orange-100 py-10 transform duration-500 hover:-translate-y-2 cursor-pointer h-[30pc] max-h-190 rounded-md">
                                <div>
                                    <img className="mx-auto h-36 w-36" src={GSSoC} alt="" />
                                </div>
                                <div className="font-bold text-xl mt-8 mb-4 text-gray-800 flex justify-center">Open Source Developer</div>
                                <div className='flex flex-row justify-between mb-4 text-gray-800 px-4'>
                                    <div className='font-semibold'>GSSoC</div>
                                    <div className='font-medium'>May 2023 - Aug 2023</div>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-700 mt-4 px-5">
                                    Contributed to various frontend projects and algorithms. I actively participated in collaborative coding, showcasing my expertise in web development and problem-solving.
                                </p>
                            </a>

                            <a href="https://www.linkedin.com/showcase/socialsummerofcode/" className="flex flex-col shadow-lg shadow-gray-500 mx-auto max-w-sm bg-yellow-100 py-10 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 h-[30pc] max-h-190 rounded-md">
                                <div>
                                    <img className="mx-auto h-36 w-36" src={SSoC} alt="" />
                                </div>
                                <div className="font-bold text-xl mt-8 mb-4 text-gray-800 flex justify-center">Open Source Developer</div>
                                <div className='flex flex-row justify-between mb-4 text-gray-800 px-4'>
                                    <div className='font-semibold'>SSoC</div>
                                    <div className='font-medium'>Jun 2023 - Aug 2023</div>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-700 mt-4 px-5">
                                    I actively engaged in diverse coding challenges, leveraging my expertise to provide innovative solutions and positively impact the open-source community.
                                </p>
                            </a>

                            <a href="https://www.linkedin.com/company/hacktoberfest/" className="flex flex-col shadow-lg shadow-gray-500 mx-auto max-w-sm bg-blue-100 py-10  transform duration-500 hover:-translate-y-2 cursor-pointer h-[30pc] max-h-190 rounded-md">
                                <div>
                                    <img className="mx-auto h-36 w-36" src={Hacktoberfest} alt="" />
                                </div>
                                <div className="font-bold text-xl mt-8 mb-4 text-gray-800 flex justify-center">Open Source Developer</div>
                                <div className='flex flex-row justify-between mb-4 text-gray-800 px-4'>
                                    <div className='font-semibold'>Hacktoberfest</div>
                                    <div className='font-medium'>Oct 2022</div>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-700 mt-4 px-5">
                                    I contributed algorithms, problem-solving solutions, and web development projects, showcasing my coding expertise and passion for collaborative problem-solving.
                                </p>
                            </a>
                        </div>

                        <div className="grid grid-cols-3 gap-10 antialiased">
                            <a href="https://www.linkedin.com/company/codesscafe/" className="flex flex-col shadow-lg shadow-gray-500 mx-auto max-w-lg bg-violet-200 py-10 transform duration-500 hover:-translate-y-2 cursor-pointer h-[30pc] max-h-190 rounded-md">
                                <div>
                                    <img className="mx-auto h-36 w-36" src={CodessCafe} alt="" />
                                </div>
                                <div className="font-bold text-xl mt-8 mb-4 text-gray-800 flex justify-center">Mentee</div>
                                <div className='flex flex-row justify-between mb-4 text-gray-800 px-4'>
                                    <div className='font-semibold'>Codess.Cafe</div>
                                    <div className='font-medium'>Jan 2023 - Present</div>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-700 mt-4 px-5">
                                Codes Cafee: mentorship cohort empowering women in tech with industry guidance from industry professionals to excel in their technical pursuits.
                                </p>
                            </a>

                            <a href="https://www.linkedin.com/company/spec-nith/" className="flex flex-col shadow-lg shadow-gray-500 mx-auto max-w-sm bg-red-100 py-10 transform duration-500 hover:-translate-y-2 cursor-pointer md:mt-20 h-[31pc] max-h-190 rounded-md">
                                <div>
                                    <img className="mx-auto h-36 w-36" src={SPEC} alt="" />
                                </div>
                                <div className="font-bold text-xl mt-8 mb-4 text-gray-800 flex justify-center">Executive Member</div>
                                <div className='flex flex-row justify-between mb-4 text-gray-800 px-4'>
                                    <div className='font-semibold'>SPEC</div>
                                    <div className='font-medium'>Aug 2022 - Mar 2023</div>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-700 mt-4 px-5">
                                Worked with the content team and contributed to the annual hackathon—Electrothon's frontend development, empowered by MLH. Organised and conducted workshops.
                                </p>
                            </a>

                            <a href="https://www.linkedin.com/company/team-vibhav/" className="flex flex-col shadow-lg shadow-gray-500 mx-auto max-w-lg bg-lime-100 py-10 transform duration-500 hover:-translate-y-2 cursor-pointer h-[30pc] max-h-190 rounded-md">
                                <div>
                                    <img className="mx-auto h-36 w-36" src={Vibhav} alt="" />
                                </div>
                                <div className="font-bold text-xl mt-8 mb-4 text-gray-800 flex justify-center">Volunteer</div>
                                <div className='flex flex-row justify-between mb-4 text-gray-800 px-4'>
                                    <div className='font-semibold'>Vibhav</div>
                                    <div className='font-medium'>Mar 2022 - Dec 2022</div>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-700 mt-4 px-5">
                                Collaborated with the content team and also Participated in exhibition to showcase projects made under the supervision of the club leads.
                                </p>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
