"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

export const ProceduralForm = ({ onSubmit }: { onSubmit: Function }) => {
  const [formData, setFormData] = useState({
    helpOption: '',
    description: '',
    name: '',
    phone: '',
    email: ''
  });

  const [completedSteps, setCompletedSteps] = useState({
    step1: false,
    step2: false,
    step3: false,
  });

  // Handle change and update form data
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Check if each step is completed
  const checkCompletion = () => {
    const step1Completed = formData.helpOption !== '';
    const step2Completed = formData.description !== '';
    const step3Completed =
      formData.name !== '' && formData.phone !== '' && formData.email !== '';

    setCompletedSteps({
      step1: step1Completed,
      step2: step2Completed,
      step3: step3Completed,
    });
  };

  // Call checkCompletion on every form update
  useEffect(() => {
    checkCompletion();
  }, [formData]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-[60%] mx-auto mt-10 p-6 bg-white rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-0">

        {/* Step 1 */}
        <StepComponent stepCount={1} completed={completedSteps.step1} >
          <h3 className={`text-xl font-bold mb-6 ${completedSteps.step1 ? 'text-orange-500': ''} `}>
            How can we help you?
          </h3>
          <div className="flex space-x-10">
            <label className="flex space-x-2">
              <input
                type="radio"
                name="helpOption"
                value="SEO"
                checked={formData.helpOption === 'SEO'}
                onChange={handleChange}
                className="h-6 w-4"
              />
              <span>SEO</span>
            </label>
            <label className="flex space-x-2">
              <input
                type="radio"
                name="helpOption"
                value="Digital Marketing"
                checked={formData.helpOption === 'Digital Marketing'}
                onChange={handleChange}
                className="h-6 w-4"
              />
              <span>Digital Marketing</span>
            </label>
            <label className="flex space-x-2">
              <input
                type="radio"
                name="helpOption"
                value="Web Development"
                checked={formData.helpOption === 'Web Development'}
                onChange={handleChange}
                className="h-6 w-4"
              />
              <span>Web Development</span>
            </label>
          </div>
        </StepComponent>

        {/* Step 2 */}
        <StepComponent stepCount={2} completed={completedSteps.step2}>
          <h3 className={`text-xl font-bold mb-6 ${completedSteps.step2 ? 'text-orange-500': ''}`}>
            Requirement Description
          </h3>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your requirements here"
            className="w-full p-2 border rounded-md h-24"
          ></textarea>
        </StepComponent>

        {/* Step 3 */}
        <StepComponent
          stepCount={3}
          completed={completedSteps.step3}
        >
          <h3 className={`text-xl font-bold mb-6 ${completedSteps.step3 ? 'text-orange-500': ''}`}>
            Contact Details
          </h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md"
          />
        </StepComponent>

        {/* Last Step Submitting */}
        <StepComponent stepCount={4} completed={false}  >
          <button
            type="submit"
            className={`px-6 py-2 text-white rounded-md ${completedSteps.step3 ? 'bg-grad hover:bg-orange-600' : 'bg-gray-300 cursor-not-allowed'}`}
            disabled={!completedSteps.step3}
          >
            Submit
          </button>
        </StepComponent>


        {/* Submit button */}
        <div className="text-right">

        </div>
      </form>
    </div>
  );
};

const StepComponent = ({ stepCount, completed, children }: {
  stepCount: number,
  completed: boolean,
  children: ReactNode
}) => {
  return (
    <div className='p-4 flex gap-10'>
      <div className="flex flex-col items-center gap-5">
        <span className={`p-4 px-6 border-2 rounded-full ${completed ? 'text-orange-500 border-orange-500' : 'text-gray-500'}`}>{stepCount}</span>
        <div className="overflow-hidden h-full bg-gray-200">
          <div className={`transition-all duration-500 w-[2px] h-full -translate-y-${completed ? "0" : "full"} bg-orange-500`}></div>
        </div>
      </div>
      <div className={`flex-grow p-4 flex flex-col items-start`}>
        {children}
      </div>
    </div>
  )
}

export const ThankYouScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 max-w-md rounded-lg text-center">
        <h1 className="text-3xl font-bold text-orange-500 mb-4">Thanks for contacting!</h1>
        <p className="text-gray-600">We have received your request and will get back to you shortly.</p>
        <button>Return to <Link href='/' className="hover:underline">Home</Link></button>
      </div>
    </div>
  );
};
