"use client";

import { useState } from "react";
import { ProceduralForm, ThankYouScreen } from "./ProceduralForm";


function QuickRequestPage() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (formData: any) => {
    setSubmitted(true);
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <main className='bg-grad'>
        <div className='bg-grad py-20 p-8 lg:p-20 text-white'>
          <h1 className='text-[3.5em] font-bold uppercase'>Quick Request</h1>
          <h3 className='lg:w-[40%]'>Tasks, communication, support. All together at last.</h3>
        </div>
      </main>
      <div className="min-h-screen" id="quick-request-form">
        { submitted ? (
            <ThankYouScreen />
        ) : (
          <div className="p-8 px-20 text-center">
            <h1 className="font-bold">Quick Request</h1>
            <p className="px-72">EraDigiLight Solution is a creative IT company deals in variety of IT services and has helped hundreds of business to build their identity on the internet.</p>
            <ProceduralForm onSubmit={handleSubmit} />
          </div>
        )}
      </div>
    </div>
  )
}




export default QuickRequestPage