import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const HeaderItem = styled.div`
    border: 1px solid rgba(218, 197, 167, 0.15);
    border-radius: 2px;
    padding: 12px 12px 12px 24px;
    width: 594px;
    height: 65px;
    backdrop-filter: blur(30px);
    background: rgba(218, 197, 167, 0.05);
    position: absolute;
    top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    a { 
        font-family: 'Satoshi Regular',sans-serif;
        font-weight: 400;
        font-size: 13px;
        line-height: 160%;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #dac5a7;
    }
`


const ButtonItem = styled.button`
    border-radius: 2px;
    padding: 10px 16px;
    width: 111px;
    height: 41px;
    background: #dac5a7;

`


const Header = () => {
    return (
        <HeaderItem>
            <svg width="53" height="21" viewBox="0 0 53 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.00201 19.5982C9.31925 19.5982 11.2083 18.3255 12.1402 16.4673V19.3437H13.6263V13.1328C13.6263 9.51821 10.8053 6.71821 7.20351 6.71821C3.55134 6.71821 0.805908 9.62003 0.805908 13.1328C0.805908 16.6964 3.47577 19.5982 7.00201 19.5982ZM7.20351 18.0964C4.50846 18.0964 2.36753 15.8564 2.36753 13.1582C2.36753 10.46 4.50846 8.22003 7.20351 8.22003C9.92375 8.22003 12.0647 10.46 12.0647 13.1582C12.0647 15.8564 9.92375 18.0964 7.20351 18.0964Z" fill="#DAC5A7" />
                <path d="M20.1121 19.3437V11.8091C20.1121 9.69639 21.2708 8.3473 23.1346 8.3473C23.8399 8.3473 24.5199 8.52549 25.1244 8.88185V7.27821C24.4947 6.97276 23.7643 6.82003 23.0087 6.82003C20.1877 6.82003 18.5505 8.85639 18.5505 11.7328V19.3437H20.1121Z" fill="#DAC5A7" />
                <path d="M29.0238 4.02003C29.6535 4.02003 30.1321 3.51094 30.1321 2.84912C30.1321 2.1873 29.6535 1.67821 29.0238 1.67821C28.3942 1.67821 27.8904 2.1873 27.8904 2.84912C27.8904 3.51094 28.3942 4.02003 29.0238 4.02003ZM28.243 6.99821V19.3437H29.8047V6.99821H28.243Z" fill="#DAC5A7" />
                <path d="M37.124 19.3437V13.82H38.9123C39.0383 14.2018 39.2398 14.5837 39.5672 14.9146L43.9246 19.3437H45.9648L40.6503 13.9218C40.3984 13.6673 40.2473 13.4128 40.2473 13.1582C40.2473 12.8782 40.3984 12.6491 40.6503 12.3946L45.99 6.99821H44.0254L39.6176 11.4528C39.3153 11.7582 39.0887 12.0891 38.9627 12.42H37.124V1.29639H35.5624V19.3437H37.124Z" fill="#DAC5A7" />
                <path d="M51.0166 19.5473C51.6462 19.5473 52.15 19.0382 52.15 18.3764C52.15 17.74 51.6462 17.2564 51.0166 17.2564C50.3869 17.2564 49.8831 17.74 49.8831 18.3764C49.8831 19.0382 50.3869 19.5473 51.0166 19.5473Z" fill="#DAC5A7" />
            </svg>
            <div className='flex justify-center items-center gap-3'>
                <Link to="#!" >SERVICES</Link>
                <Link to="#!" >WORK</Link>
                <Link to="#!" >ABOUT</Link>
                <Link to="#!" >BLOG</Link>
            </div>
            <ButtonItem className="satoshi-regular">
                Let's Talk
            </ButtonItem>
        </HeaderItem>
    )
}

export default Header