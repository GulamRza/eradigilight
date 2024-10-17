import React from 'react'
import LetsTalkSection from '../Components/LetsTalkSection'

function AboutUsPage() {
    return (
        <div>
            <div className='bg-grad py-20 p-8 lg:p-20 text-white'>
                <h1 className='text-[3.5em] font-bold uppercase'>About</h1>
                <h2 className='text-[3em] font-bold uppercase'>EraDigiLight Solutions</h2>
                <h3 className='lg:w-[40%]'>Smart marketing for a smarter business.</h3>
            </div>
            <main className='min-h-screen'>
                <div className="bg-gradient-to-r from-[var(--purple)]  to-[var(--orange)] min-h-screen text-white">

                    {/* Introduction Section */}
                    <section className="px-4 bg-gray-100 text-black py-16 text-center">
                        <h1 className="text-5xl font-bold mb-6">Who We Are</h1>
                        <p className="max-w-3xl mx-auto text-lg">
                            We are a dynamic digital marketing agency specializing in SEO, digital marketing, web designing, and web development.
                            Our goal is to empower businesses with creative, data-driven, and impactful digital strategies that drive measurable results.
                        </p>
                    </section>

                    {/* Mission & Vision Section */}
                    <section className="py-16 px-4 bg-white text-gray-900">
                        <div className="max-w-6xl mx-auto px-4">
                            <h2 className="text-4xl font-bold text-center mb-8 text-[var(--orange)]">Our Mission, Vision, and Values</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                    <p>
                                        To deliver cutting-edge digital marketing solutions that boost brand presence, engage audiences, and foster business growth.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                                    <p>
                                        To be the go-to digital partner for innovative marketing and web development, transforming businesses through technology.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
                                    <p>
                                        We use a tailored, data-driven approach to ensure every strategy is customized to meet the unique needs of each client.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                                    <ul className="list-disc list-inside">
                                        <li>Innovation</li>
                                        <li>Integrity</li>
                                        <li>Customer-Centric Solutions</li>
                                        <li>Results-Driven Strategies</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Experiences Section */}
                    <section className="py-16 px-4 text-center bg-gray-800 text-white">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl font-bold mb-6">Our Experiences</h2>
                            <p className="text-lg mb-8">
                                With over a decade of experience, we have successfully delivered over 500 projects in SEO, digital marketing, and web development for clients around the world.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
                                <div className="bg-gray-600  rounded-lg p-6">
                                    <h3 className="text-2xl font-bold">10+</h3>
                                    <p>Years in Business</p>
                                </div>
                                <div className="bg-gray-600  rounded-lg p-6">
                                    <h3 className="text-2xl font-bold">500+</h3>
                                    <p>Successful Projects</p>
                                </div>
                                <div className="bg-gray-600  rounded-lg p-6">
                                    <h3 className="text-2xl font-bold">300+</h3>
                                    <p>Satisfied Clients</p>
                                </div>
                                <div className="bg-gray-600  rounded-lg p-6">
                                    <h3 className="text-2xl font-bold">50+</h3>
                                    <p>Industry Awards</p>
                                </div>
                            </div>
                        </div>
                    </section>

                   

                    {/* Why Choose Us Section */}
                    <section className="py-16 px-4 text-center bg-gray-900">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
                            <p className="text-lg mb-8">
                                We deliver measurable results through innovative strategies, creative excellence, and industry-leading expertise.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white ">
                                <div className="bg-gray-700  rounded-lg p-6">
                                    <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
                                    <p>Our team of experienced professionals delivers high-quality, data-driven solutions tailored to your needs.</p>
                                </div>
                                <div className="bg-gray-700  rounded-lg p-6">
                                    <h3 className="text-2xl font-bold mb-4">Proven Results</h3>
                                    <p>We’ve helped businesses increase traffic, grow revenue, and dominate their industry through our marketing expertise.</p>
                                </div>
                                <div className="bg-gray-700  rounded-lg p-6">
                                    <h3 className="text-2xl font-bold mb-4">Cutting-Edge Strategies</h3>
                                    <p>We stay ahead of trends and implement the latest techniques to keep your business competitive in the digital landscape.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                     {/* Trusted Clients Section */}
                     <section className="py-16 px-4 bg-white text-gray-900">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-4xl font-bold mb-6">Our Trusted Clients</h2>
                            <p className="text-lg mb-8">
                                We are proud to have worked with some of the most well-respected brands in various industries.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {/* Replace with actual logos if available */}
                                <div className="p-6 bg-gray-100 rounded-lg shadow-md">Client 1</div>
                                <div className="p-6 bg-gray-100 rounded-lg shadow-md">Client 2</div>
                                <div className="p-6 bg-gray-100 rounded-lg shadow-md">Client 3</div>
                                <div className="p-6 bg-gray-100 rounded-lg shadow-md">Client 4</div>
                            </div>
                        </div>
                    </section>

                    {/* Let's Talk Section */}
                    <LetsTalkSection />
                </div>
            </main>
        </div>
    )
}

export default AboutUsPage