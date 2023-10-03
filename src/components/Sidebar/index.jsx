import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Links } from '../../Data'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (

        <div className='flex-[0.2] flex flex-col justify-start py-10 items-center gap-3 h-full border-r-2 shadow-lg'>

            <div className='w-[200px] h-[200px] border'>
                <img
                    src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                    className='w-full h-full'
                    alt=''
                />
            </div>
            <Text textAlign={'start'} fontSize={'17px'}>Muhammad Farooq</Text>
            <div className='flex flex-col justify-center items-center gap-5'>
                {Links?.map((item) => {
                    return (
                        <>
                            <Link to={item.path} className='text-gray-500 hover:text-gray-800 hover:transition-all'>{item.Text}</Link>
                        </>

                    )
                })}
                <Button>Hire Me</Button>
            </div>
        </div>
    )
}
