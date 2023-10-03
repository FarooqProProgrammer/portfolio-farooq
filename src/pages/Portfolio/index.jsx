import { Flex, IconButton, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { portfolioData } from '../../Data'
import "./index.css"
import { AiFillCopy } from "react-icons/ai"
import { toast } from 'react-toastify'


export default function Portfolio() {
    const [filtervalue,setFilterValue] = useState('All');
    const [filtertransition,setFilterTransition] = useState(false);

    const ToggleFilter = (value) => {
        setFilterValue(value);
        setFilterTransition(!filtertransition)
    }
 
  


    return (
        <div className='flex-1 bg-[#EAEAEA] h-full flex flex-col gap-5 justify-start items-start overflow-y-auto px-10 py-5'>

            <button className='text-xs px-3 py-1 bg-white rounded-md'>PORTFOLIO</button>
            <Text fontSize={29} _hover={{ textDecoration: 'underline' }}>My Works</Text>

            <Flex justifyContent={'center'} alignItems={'center'} gap={6}>
                <Text cursor={'pointer'} onClick={()=>ToggleFilter('All')} fontSize={'xs'}>All</Text>
                <Text cursor={'pointer'} onClick={()=>ToggleFilter('React Js')} fontSize={'xs'}>React Js</Text>
                <Text cursor={'pointer'} onClick={()=>ToggleFilter('Vue Js')} fontSize={'xs'}>Vue Js</Text>
                <Text cursor={'pointer'} onClick={()=>ToggleFilter('HTML')} fontSize={'xs'}>HTML</Text>
                <Text cursor={'pointer'} onClick={()=>ToggleFilter('Wordpress')} fontSize={'xs'}>Wordpress</Text>
            </Flex>

            <div className='w-full py-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 place-items-center gap-4'>
                {portfolioData?.filter((item) => {
                    if(filtervalue === 'All') {
                        return item
                    }
                    return item.category === filtervalue
                }).map((item) => {
                    return (
                        <div
                            className={` card relative`}>
                            <div className='absolute right-0 z-50'>
                                <IconButton onClick={()=> toast('Copy Link Success')}>
                                     <AiFillCopy  size={22}/>
                                </IconButton>
                               
                            </div>
                            <div className="imgBx">
                                <img
                                    src={item.img}
                                    alt="images"
                                />
                            </div>
                            <div className="details">
                                <h2>
                                    {item.Name}
                                    <br />
                                    <span>{item.category}</span>
                                </h2>
                            </div>
                        </div>


                    )
                })}
            </div>


                    

        </div>
    )
}
