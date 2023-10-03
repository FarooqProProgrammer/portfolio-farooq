import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { AcademicIcon } from '../../assets/Icon'
import { EducationData } from '../../Data'

export default function Education() {
    return (
        <div className='flex-1 overflow-y-auto  h-full '> 
        <div className='w-full  flex flex-col justify-start items-start pl-10 py-10 '>
            <h4 className='lg:text-3xl md:text-3xl sm:text-3xl hover:underline hover:cursor-pointer'>Education</h4>
        </div>
            <VerticalTimeline>
            {
                EducationData?.map((item)=>{return(
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date={item.Year}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<AcademicIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.Degree}</h4>
                        <p>
                            {item.description}
                        </p>
                    </VerticalTimelineElement>
                )})
            }
                
                
            </VerticalTimeline>
        </div>
        
    )
}
