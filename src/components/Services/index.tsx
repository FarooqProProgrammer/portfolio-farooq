import React from 'react'
import styled from 'styled-components'


const ServiceItem = styled.div`
    border: 1px solid rgba(218, 197, 167, 0.15);
    border-radius: 2px;
    padding: 48px;
    width: 100%;
    height: auto;
    background: rgba(218, 197, 167, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;


    h6 { 
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 13px;
        line-height: 160%;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color:rgba(218, 197, 167, 0.6);
    }

    h5 { 
      
        font-weight: 300;
        font-size: 24px;
        line-height: 130%;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: rgba(218, 197, 167, 0.6);
    }

    p { 
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        color: rgba(218, 197, 167, 0.6);
    }
`



const Services = () => {
    return (
        <div className='container mx-auto py-24'>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-3'>
                <ServiceItem className='gap-3'>
                    <h6 className='satoshi-regular'>01</h6>
                    <h5 className='satoshi-regular'>WEB DESIGN</h5>
                    <p className='chillax-regular'>
                        Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.
                    </p>
                </ServiceItem>
                <ServiceItem className='gap-3'>
                    <h6 className='satoshi-regular'>02</h6>
                    <h5 className='satoshi-regular'>DEVELOPMENT</h5>
                    <p className='chillax-regular'>
                        Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.
                    </p>
                </ServiceItem>
                <ServiceItem className='gap-3'>
                    <h6 className='satoshi-regular'>03</h6>
                    <h5 className='satoshi-regular'>CONTENT & SEO</h5>
                    <p className='chillax-regular'>
                        Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.
                    </p>
                </ServiceItem>

            </div>
        </div>
    )
}

export default Services
