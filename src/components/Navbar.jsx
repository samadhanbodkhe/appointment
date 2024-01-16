import React from 'react'

const Navbar = () => {
    return <>
        <div className='bg-white h-20 p-4 px-20 flex gap-4 flex-1'>
            <div className='flex gap-4 flex-1'>
                <img src="https://doccure-wp.dreamguystech.com/elementor/wp-content/uploads/2021/10/logo.png" alt="logo" />
                <details className="dropdown mb-32">
                    <summary className="m-1 btn">open or close</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </details>
            </div>
            <div className='flex gap-4'>
                <div className='flex items-center gap-4'>
                    <span>icon</span>
                    <div className='flex flex-col'>
                        <span>contact</span>
                        <span>+91 9988776655</span>
                    </div>
                    <button className="btn btn-primary">Primary</button>
                </div>
            </div>


        </div>
    </>
}

export default Navbar