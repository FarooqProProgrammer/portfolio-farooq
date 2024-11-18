
import UserImage from "../../assets/images/user.png"
import styled from 'styled-components'
import Header from '../Header'

const Text = styled.h2`
    color: #d9c4a7;
    font-size: 85px;
    max-width: 50%;
    font-weight: 300;
    text-align: center;
    line-height: 108px;
    position: absolute;
    bottom: 80px;  // Adjusted bottom value to move text a bit higher on the screen
    left: 50%;
    transform: translateX(-50%);
`

const SubText = styled.p`
    color: #d9c4a7;
    font-size: 20px;  // Adjusted for better readability
    text-align: center;
    font-weight: 200;
    position: absolute;
    bottom: 20px;  // Position it below the heading text
    left: 50%;
    transform: translateX(-50%);
    max-width: 30%;
`

const Hero = () => {
    return (
        <div className='w-full h-screen relative flex justify-center items-center'>
            <Header />
            <img src={UserImage} alt='' className='h-full object-cover' />
            <Text>
                WEB DESIGNER & 
                <span className='italic'>DEVELOPER</span>
            </Text>
            <SubText>
                Premium web design, development, and SEO services to help your business stand out.
            </SubText>
        </div>
    )
}

export default Hero
