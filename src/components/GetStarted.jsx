import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} bg-blue-gradient h-[140px] w-[140px] rounded-full p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] select-none'>
            <span className='text-gradient '>Get</span> 
          </p>
          <img src={arrowUp} className='h-[23px] w-[23px] object-contain' alt="" />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px] select-none'>
          <span className='text-gradient '>Started</span>
        </p>
      </div>
      <div></div>
      <div></div>


    </div>

  )
}

export default GetStarted;