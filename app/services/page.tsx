import React from 'react'
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Services"
}

const servicesData = [
    {
        name: "Website Designing",
        description: "Design is in our blood. Let us add a creative touch to your website and let it stand out from the competition.",
        img: "/website-designing-service.png",
        link: "/services/website-designing"
    },
    {
        name: "Web Development",
        description: "Secure, Scalable, and pretty much Sensational; that is the best way, to sum up, our Web Development Services.",
        img: "/web-development-service.png",
        link: "/services/website-devlopment"
    },
    {
        name: "Search Engine Optimization",
        description: "Why Advology? Well, to get your website to the top, you need to work with a top-ranking company.",
        img: "/search-engine-optimization-service.png",
        link: "/services/seo"
    },
    {
        name: "Social Media Marketing",
        description: "Engaging social media strategies and campaigns to make your brand the talk of the town!",
        img: "/search-engine-optimization-1-service.png",
        link: "/services/smm"
    }
];


function ServiesPage() {
    return (
        <div>
            <div className='bg-grad py-20 p-8 lg:p-20 text-white min-h-[40vh]'>
                <h1 className='text-[3.5em] font-bold uppercase'>Our Digital <br /> Marketing Services</h1>
                <h3 className='lg:w-[40%]'>Move your business forward and go digital with advanced technology</h3>
            </div>
            <section className='flex flex-col items-start py-16 lg:px-40 gap-8'>
                <div className='p-4 text-center'>
                    <h1 className='text-[2.5rem] font-extrabold'>Dive into the digital world and let your business bloom.</h1>
                </div>

                {/* Service Cards */}
                {servicesData.map((service, index) => (
                    <ServiceCard key={service.name} service={service} index={index} />
                ))}


            </section>
        </div>
    )
}

function ServiceCard({ service, index }: { service: any, index: number }) {
    return (
        <div key={service.name} className={`${index % 2 == 0 && "bg-gray-100"} p-16 w-full flex lg:flex-row flex-col items-center gap-20`}>
            <div className='flex flex-col gap-4 items-start'>
                <h2><strong>{service.name}</strong></h2>
                <p>{service.description}</p>
                <Link
                    href={service.link}
                    className='p-2 px-4 border-2 hover:bg-gray-700 hover:text-white transition '
                >
                    Explore
                </Link>
            </div>
            <img src={service.img} alt={service.name} />
        </div>
    )
}

export default ServiesPage