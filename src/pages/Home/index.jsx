import { Button } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
    return (
        <div className='flex-1 h-full border-r-2 overflow-y-auto'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-2 py-6     items-center justify-center flex-col">
                    <img
                        className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                        alt="hero"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        I'm Professional Web Designer & Wordpress Developer
                        </h1>
                        <p className="mb-8 leading-relaxed">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                        <Button>Download Cv</Button>
                    </div>
                </div>
            </section>

        </div>
    )
}
