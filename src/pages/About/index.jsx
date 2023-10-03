import { Button, Stack } from '@chakra-ui/react'
import React from 'react'

export default function About() {
    return (
        <div className='flex-1 bg-[#EAEAEA] flex justify-center items-center h-full border-r-2 overflow-y-auto'>
            <section className="text-gray-600 body-font h-[80vh] overflow-hidden">
                <div className="container px-5 py-6 mx-auto">
                    <div className="lg:w-4/5 mx-auto space-y-5 flex flex-wrap">
                        <img
                            alt="ecommerce"
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 style={{ maxWidth: '30%' }} className="text-xs px-4 py-2 rounded-md mb-2 title-font bg-white  text-gray-800 tracking-widest">
                                ABOUT ME
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                Muhammad Farooq
                            </h1>

                            <p className="leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className='w-full mt-3 py-2 gap-3 grid grid-cols-2'>
                                <h4 className='font-bold'>Birthday: </h4>
                                <h4 className=''>05/04/2023</h4>

                                <h4 className='font-bold'>Phone No: </h4>
                                <h4 className=''>+77 022 177 05 05</h4>

                                <h4 className='font-bold'>Email: </h4>
                                <h4 className=''>mail@gmail.com</h4>

                                <h4 className='font-bold'>Freelance </h4>
                                <h4 className=''>Available</h4>

                            </div>

                            <Stack direction={'row'} mt={3} >
                                <Button colorScheme='teal' variant='solid'>
                                    Hire Me
                                </Button>
                                <Button border={'1px solid teal'} colorScheme='teal' variant='ghost'>
                                    Download CV
                                </Button>
                            </Stack>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
