import React from 'react'
import LetsTalkSection from '../Components/LetsTalkSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contacts"
}

function ContactPage() {
  return (
    <main>
        <div className='bg-grad py-20 p-8 lg:p-20 text-white'>
          <h1 className='text-[3.5em] font-bold uppercase'>Contact Us</h1>
          <h3 className='lg:w-[40%]'>Let us not stay strangers anymore.</h3>
        </div>
        {/* <div className='p-4 h-[50vh]'>
            contact details
        </div> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14021.811694361848!2d77.0799658!3d28.526103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bebc1d1120f%3A0xd5fd309a085f912e!2sERADIGILIGHT!5e0!3m2!1sen!2sin!4v1729074523998!5m2!1sen!2sin" width="600" height="450" loading="lazy" className='w-full'></iframe>
        <LetsTalkSection />
    </main>
  )
}

export default ContactPage