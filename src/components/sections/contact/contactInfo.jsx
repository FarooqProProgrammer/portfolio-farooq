import React from 'react'
import {  RiPhoneLine, RiMailLine } from '@remixicon/react'
import { RiWhatsappLine } from '@remixicon/react'
import ReactWhatsapp from 'react-whatsapp'


const ContactInfo = () => {
    return (
        <div className="col-lg-4">
            <div className="contact-content-part  wow fadeInUp delay-0-2s">

                {/* <div className="single-contact wow fadeInUp" data-wow-delay=".2s">
                    <div className="contact-icon">
                        <i><RiMapPinLine size={20} /></i>
                    </div>
                    <h2>our office:</h2>
                    <p>Jurain,Dhaka Bangladesh</p>
                </div> */}


                <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                    <div className="contact-icon">
                        <i><RiPhoneLine size={20} /></i>
                    </div>
                    <h2>contact number:</h2>
                    <p>+923090450173</p>
                </div>


                <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                    <div className="contact-icon">
                        <i><RiMailLine size={20} /></i>
                    </div>
                    <h2>Email us:</h2>
                    <p>farooqayub646@mail.com</p>
                </div>

                <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                    <div className="contact-icon">
                        <a  href="https://wa.me/923090450173" target="_blank">
                        <i><RiWhatsappLine size={20} /></i>
                        </a>
                    </div>
                    <h2>Click the Whatsapp Icon</h2>
                
                </div>

            </div>
        </div>
    )
}

export default ContactInfo