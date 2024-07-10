import React from 'react';

function Footer() {
  return (
    <footer className="hidden sm:block bg-gray-400  text-white pt-10 ">
      <div className=" mx-10 px-10 text-xl mb-16">
        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-start">
          <div className='mb-4'>
            <img className="w-72 h-20 mb-4" src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <p className='w-[370px]'>This is India's largest Laundry & Dry Cleaning chain with over 300+ stores spread across 85+ cities. we are also India's highest rated Laundry brand</p>
          </div>
          <div className="mb-6 mr-4">
    
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-1">PAGES</h3>
            <div className='flex w-[100%] flex-row  mb-6'>
              <div className='border-green-300 border-t-[1px] w-[100%]'>
                <div className='border-green-500  border-t-[3px] w-[45%]'></div>
              </div>
            </div>
            <ul className="space-y-1">
              <li><a href="#">Locate us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Media</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">T&C</a></li>
              <li><a href="#">COVID-19</a></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-1">CONTACT US</h3>
            <div className='flex w-[100%] flex-row  mb-6'>
              <div className='border-green-300 border-t-[1px] w-[100%]'>
                <div className='border-green-500  border-t-[3px] w-[45%]'></div>
              </div>
            </div>
            <ul className="space-y-1">
              <li className='flex items-center'>
                <img className='w-4 h-4 mr-2'  alt="" />
                <span>Address</span>
              </li>
              <li className='flex items-center'>
                <img className='w-4 h-4 mr-2'  alt="" />
                <span>+91 xxxxxxxxxx</span>
              </li>
              <li className='flex items-center'>
                <img className='w-4 h-4 mr-2'  alt="" />
                <span>mail@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-1">FOLLOW US</h3>
            <div className='flex w-[100%] flex-row  mb-6'>
              <div className='border-green-3  00 border-t-[1px] w-[100%]'>
                <div className='border-green-500  border-t-[3px] w-[45%]'></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mt-6 mb-4">
              Download the App
            </h3>
          </div>
        </div>

      </div>
      <div className='border-gray-600 shadow-lg border-2 p-3 flex justify-between'>
        <p className='text-xl'>@2024 All Rights Reserved
        </p>
        <div>
          <a href="#" className='mr-3 hover:text-blue-600 text-xl'>Privacy Policy |</a>
          <a href="#" className=' hover:text-blue-600 text-xl'>Terms and Condition</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;