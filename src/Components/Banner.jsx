import React from 'react'
import Logo from '../assets/1.png'
import back from '../assets/banner1.png'

const Banner = () => {
  return (
    <div className='h-80'>
        <div className="relative z-20 top-56 px-5 flex justify-center">
            <img src="https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&dpr=1&w=384" alt="" className="h-40 w-30 rounded-full" />
        </div>
        <div className="absolute z-10 inset-0 h-10">
            <img src="https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs?auto=format&dpr=1&w=3840" alt="" className="w-full h-80" />
        </div>
    </div>
  )
}

export default Banner