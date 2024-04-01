/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFile } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"
function Card({data,refernce}) {
  return (
    <motion.div drag dragConstraints={refernce} whileDrag={{scale:1.2}} dragElastic={0.08} dragTransition={{bounceStiffness:100,bounceDamping:30}} className=' relative  flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden'>
     <FaFile />
    <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
    <div className='footer absolute bottom-0  w-full  left-0'>
     <div className='flex items-center justify-between py-3 px-8 py-3 mb-5'>
        <h5>{data.filesize}</h5>
        <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoMdClose/>: <LuDownload size=".8em" color="#000"/>}
           
            </span>
        
     </div>
     {
        data.tag.isOpen && ( <div className={`tag w-full h-py-6 ${data.tag.tagColor=== "blue" ? "bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
        <h3 className='text-sm h-10 font-semibold'>{data.tag.tagTitle}</h3>
     </div>) 
     }
    
    </div>
    </motion.div>
    
    
  )
}

export default Card
