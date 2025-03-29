import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import SubscribeBox from '../components/SubscribeBox'

const Contact = () => {
  return (
    <div className='max-w-7xl mx-auto px-5'>
      <div className='border-t pt-8'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='flex flex-col md:flex-row justify-center gap-10 my-10'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='text-gray-600 text-xl font-semibold'>Our Store</p>
          <p className='text-gray-500'>54709 Willims Station <br /> Suite 350, Washington, USA</p>
          <p className='text-gray-500'>Tel: (415) 555-0132 <br /> Email: admin@forever.com</p>
          <p className='text-gray-600 text-xl font-semibold'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our team and job openings</p>
          <button className='border border-black px-8 py-3 hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <SubscribeBox />
    </div>
  )
}

export default Contact