import React from 'react'
import { RiGlobalFill, RiQuillPenLine, RiPantoneFill } from '@remixicon/react'
import Title from '../ui/title'
import ZoomIn from '../animations/zoomIn'
import { RiCss3Fill } from '@remixicon/react'
import { RiDatabase2Fill } from '@remixicon/react'
import { RiSmartphoneFill } from '@remixicon/react'

const servicesList = [
    {
        id: 1,
        icon: <RiCss3Fill size={65} />,
        service_name: "FrontEnd Development",
        service_description: "Our front-end development services focus on crafting visually appealing and responsive interfaces using the latest web technologies."
    },
    {
        id: 2,
        icon: <RiDatabase2Fill size={65} />,
        service_name: "Backend Development",
        service_description: "We offer robust backend development services, ensuring your web applications are secure, scalable, and efficient."
    },
    {
        id: 3,
        icon: <RiSmartphoneFill size={65} />,
        service_name: "Application Development",
        service_description: "Our application development services cover mobile and desktop apps, providing a seamless and engaging user experience across all platforms."
    },
]

const Services = () => {
    return (
        <section id="services" className="services-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>Services</p>
                            <h2>Quality Services</h2>
                        </Title>
                    </div>
                </div>
                <div className="row">
                    {
                        servicesList.map(({ icon, id, service_description, service_name }) => {
                            return (
                                <div key={id} className="col-lg-4 col-md-6">
                                    <ZoomIn id={id}>
                                        <div className="service-item">
                                            {icon}
                                            <h4>{service_name}</h4>
                                            <p>{service_description}</p>
                                        </div>
                                    </ZoomIn>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services