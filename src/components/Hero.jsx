import React from 'react'

const Hero = () => {
    return <>
        <div className='flex items-center bg-gray-200'>
            <div className='flex-1 p-14'>

                <img className='ml-[80%]' src="https://doccure-wp.dreamguystech.com/elementor/wp-content/themes/doccure/assets/images/header-icon.svg" alt="" />


                <p className='text-5xl font-serif '>Consult
                    <span className='text-blue-500'> Best Doctors</span>
                    Your Nearby Location.</p>
                <p className='my-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className='flex gap-10'>
                    <button type="button" class="btn btn-primary">Primary</button>
                    <img src="https://doccure-wp.dreamguystech.com/elementor/wp-content/themes/doccure/assets/images/down-arrow-img.png" alt="" />
                </div>
            </div >
            <div className='top-9'>
                <img className='h-screen' src="https://doccure-wp.dreamguystech.com/elementor/wp-content/uploads/2023/07/banner-img.png" alt="" />
                <img className=' h-12 absolute right-1/3 top-1/2 animate-bounce' src="https://doccure-wp.dreamguystech.com/elementor/wp-content/uploads/2023/07/banner-img1.png" alt="" />
                <img className=' h-40 absolute right-10 top-1/2 animate-bounce' src="https://doccure-wp.dreamguystech.com/elementor/wp-content/uploads/2023/07/banner-img2.png" alt="" />
                <img className=' h-16 absolute right-1/3 top-[90%] animate-bounce' src="https://doccure-wp.dreamguystech.com/elementor/wp-content/uploads/2023/07/banner-img3.png" alt="" />
            </div>

            <div className='input-group absolute left-10 top-[90%] w-[75%]'>
                <input type="text" placeholder='type here' className='input input-bordered' />
                <input type="text" placeholder='type here' className='input input-bordered' />
                <button type="button" class="btn btn-primary">Primary</button>
            </div>
        </div>
    </>
}

export default Hero