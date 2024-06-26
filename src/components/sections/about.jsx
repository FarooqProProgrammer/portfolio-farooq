import React from 'react'
import { RiArrowRightUpLine, RiDownloadLine, RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiGithubLine } from '@remixicon/react'
import profile_img from "../../assets/images/about/profile.jpg"
import SlideUp from '../animations/slideUp'
import profileImage from "../../assets/images/user.jpeg"


const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    {/*  START ABOUT IMAGE DESIGN AREA  */}
                    <div className="col-lg-5">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={profileImage} alt="About Me" />
                                <h2>Muhammad Farooq</h2>
                                <div className="about-btn btn-one text-center">
                                    <h6>Available for Work</h6>
                                    <div className="circle pulse color-pulse"></div>
                                </div>
                                <div className="about-social text-center">
                                    <ul>
                                        {/* <li><a href=""><i><RiFacebookCircleFill size={20} /></i></a></li> */}
                                        {/* <li><a href=""><i><RiTwitterXLine size={20} /></i></a></li> */}
                                        <li><a target='_blank' href="https://www.linkedin.com/in/farooq-ayub-9177b7242/"><i><RiLinkedinFill size={20} /></i></a></li>
                                        <li><a target='_blank' href="https://github.com/FarooqProProgrammer"><i><RiGithubLine size={20} /></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/*  END ABOUT IMAGE DESIGN AREA  */}
                    {/*  START ABOUT TEXT DESIGN AREA  */}
                    <div className="col-lg-7">
                        <div className="about-content-part">
                            <SlideUp>
                                <h2>
                                    Hello, I’m Muhammad Farooq, <span>Full Stack</span> React Native & Wordpress
                                    Based in Pakistan.
                                </h2>
                                <div className="hero-btns">
                                    <a href="#" className="theme-btn">Download CV <i><RiDownloadLine size={16} /></i></a>
                                </div>
                            </SlideUp>
                            <SlideUp>
                                <ul className="list-style-one two-column">
                                    <li><i><RiArrowRightUpLine size={18} /></i> FrontEnd Developer</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Backend Developer</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Seo Based Website</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> WordPress Developer</li>
                                </ul>
                            </SlideUp>
                        </div>
                    </div>
                    {/*  END ABOUT TEXT DESIGN AREA  */}
                </div>
            </div>
        </section>
    )
}

export default About