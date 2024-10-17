import Link from "next/link";
import Tabs, { Tab } from "./Components/Tabs";
import LetsTalkSection from "./Components/LetsTalkSection";
import Image from 'next/image';



export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-screen h-screen">
        
        <div className="w-full h-full bg-none text-white lg:p-40 flex flex-col justify-center items-center gap-8 text-center">
          <h3>Wizards of Web Services and Digital Marketing</h3>
          <h1 className="lg:text-[3.5vw] text-[2rem] font-bold text-center lg:px-8">MAKE A MARK THROUGH DIGITAL MARKETING SERVICE PROVIDER IN INDIA</h1>
          <div className="flex flex-col gap-8 lg:flex-row text-center font-semibold">
            <Link href='/quick-request#quick-request-form' className="font-light text-xl uppercase border p-4 hover:bg-white hover:text-black transition-all">Make an appointment</Link>
            {/* <Link href='/quick-request' className="px-6 p-2 rounded-none bg-orange-400 text-black text-lg hover:scale-110 hover:bg-transparent hover:border hover:text-white transition-all">Do Something Else</Link> */}
          </div>
        </div>
      </div>

      {/* Video Overlay and Video Element for background */}
      <div className="absolute -z-10 w-full h-full bg-black opacity-60"></div>
      <div className="absolute top-0 left-0 w-full h-full -z-20 opacity-80 overflow-hidden">
          <video
            autoPlay loop muted
            className=" w-full h-full object-cover"
            src="/videoplayback-home.mp4"
          ></video>
        </div>

      {/* About Us Section */}
      <section className="border-b">
        <div className="flex flex-col-reverse lg:flex-row gap-4 p-8">
          <div className="lg:px-28 lg:py-8 flex flex-col justify-center gap-4 items-start lg:max-w-[60%]">
            <h1 className="font-bold lg:text-[3rem]">Digital Marketing Services Company In India</h1>
            <div>
              <p>About Us</p>
              <h3 className="font-bold">Expert in SEO and Digital Marketing</h3>
            </div>
            <p className="py-4">As one of the leading digital marketing companies in the market today, Advology Solution provides cutting-edge strategies to take your business to the heights of success. We work to establish a highly effective and unique online presence for all our clients. As one of the leading digital marketing companies in the market today, Advology Solution provides cutting-edge strategies to take your business to the heights of success. We work to establish a highly effective and unique online presence for all our clients.</p>
            <Link className="p-4 px-8 border-2  border-black hover:bg-black hover:text-white transition" href='about-me'>About Me</Link>
          </div>
            <Image
              src="/shutterstock_714586408.png"
              alt="About_Me_Image"
              width={400}
              height={100}
              className="object-fit"
            />

        </div>
      </section>

      {/* Services Section */}
      <section className="flex flex-col p-4 lg:p-16 gap-8 lg:px-20 min-h-screen bg-gray-100">
        <h1 className="text-center">Our Top Digital Marketing Services In India</h1>
        <div>
          <Tabs>
            <Tab name="SEO">
              <div className="flex lg:p-4 gap-2 items-center flex-col-reverse lg:flex-row">
                <div className="flex flex-col p-4 lg:px-8 gap-4 items-start">
                  <h1>Search Engine Optimization</h1>
                  <p>Successful SEO is not about tricking the web crawlers, but it is about making the most of the search algorithm to provide the best search results for the user. When search engines like Google and Bing fall in love with your website you can be sure that everyone else will quickly follow suit. Our SEO services incorporate the correct use of keywords, domain authority, and strong backlinks along with unique and user-centric content. We will constantly follow up with you and deliver fresh and engaging content when required.</p>
                  <Link className="p-4 px-8 border-2 border-black hover:bg-black hover:text-white transition" href='seo-services'>Explore</Link>
                </div>
                <div className="lg:w-[200%] w-64">
                  <img src="seo-img.png" alt="seo_img" />
                </div>
              </div>
            </Tab>
            <Tab name="Social Media Marketing">
              <div className="flex lg:p-4 gap-2 items-center flex-col-reverse lg:flex-row-reverse">
                <div className="flex flex-col p-4 lg:px-8 gap-4 items-start">
                  <h1>Social Media Marketing</h1>
                  <p>Social media is more about the psychology of clients and users rather than just communications technology. We use all the popular social media platforms to spread brand awareness and create a positive image for your company. Since social media is continuously evolving, likewise, our company is also expanding and is helping businesses thrive in this digital world. Millions of users are online on social media platforms like Twitter, LinkedIn, Facebook, Instagram, and YouTube daily. We will help you tap into these platforms and connect with people around the world so that you can grow your business.</p>
                  <Link className="p-4 px-8 border-2 border-black hover:bg-black hover:text-white transition" href='seo-services'>Explore</Link>
                </div>
                <div className="lg:w-[200%] w-64">
                  <img src="smm-img.png" alt="seo_img" />
                </div>
              </div>
            </Tab>
            <Tab name="Web Development">
              <div className="flex lg:p-4 gap-2 items-center flex-col-reverse lg:flex-row">
                <div className="flex flex-col p-4 lg:px-8 gap-4 items-start">
                  <h1>Web Development</h1>
                  <p>At Advology Solution, we believe your website is the first place customers will encounter your brand. That is why your website should be grand enough to hold the attention and engage users from the get-go. Web designing is so much more than pretty images and graphics on the screen; it is also about how the website works. We delve deep into the client's industry in order to create customer-centric websites that is aimed at improving the user experience. We take the time to ensure your website genuinely represents your business and encapsulates your company’s vision.</p>
                  <Link className="p-4 px-8 border-2 border-black hover:bg-black hover:text-white transition" href='seo-services'>Explore</Link>
                </div>
                <div className="lg:w-[200%] w-64">
                  <img src="webdesgin.png" alt="seo_img" />
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>

      {/* Small Discover Section */}
      <section className="bg-grad">
        <div className="p-8 py-20 lg:p-16 lg:px-40 flex flex-col gap-4 border-t border-b  text-white">
          <h1>Discover Our Exceptional Designs!</h1>
          <p>A great design for a company's website can surely steal the show and helps you generate more leads. A top-quality web designing service is by far the best investment you can make when it comes to growing your business online. An appealing website can definitely deliver a good return on investment and expands your brand awareness. At Advology Solution, we design website that attracts users and keeps them wanting more.</p>
        </div>
      </section>

      {/* A Banner */}
      {/* <section className="w-full bg-black text-white lg:h-52 h-80 overflow-hidden flex flex-col-reverse lg:flex-row justify-between" >
        <div className="p-8 px-20">
          <h3>Work Process</h3>
          <h1>Building A Website Is Never Easy</h1>
          <p>Then again all the good things in life require hard work. And that is exactly what our team does whenever we build a website.</p>
        </div>
        <img className="w-full object-cover" src="banner-img1.png" alt="banner-image" />
      </section> */}

      {/* Locations Section */}
      <section className="p-8 lg:p-16 lg:px-60 flex flex-col gap-8">
          <h1>Locations We Serve - Browse Digital Marketing Agency Near Me</h1>
          <div className="text-sm">
            <p>Higher rankings, better visibility, relevant visitors, and increased ROI. Digital Marketing has evolved into a powerful tool to achieve all of this for a business. Besides, it also plays a crucial role in maintaining a brand’s relationship with its customers. If you are digging the web for a “digital marketing agency near me”, Advology Solution has curated a list of the best Digital Marketing agencies in Delhi, Noida, Gurgaon, Hyderabad, Bangalore, and Mumbai.
            <br />
            <br />
            Other locations we serve: Digital Marketing Services in Ahmedabad, Pune, Nashik, Surat, Ghaziabad, Chandigarh, Nagpur, Amritsar, Jaipur, Dehradun, Udaipur, Mohali, etc.
            <br />
            <br />
            Our comprehensive range of digital marketing services can help you beat your competitors and spread your business tentacles. Our existing customers, who are already reaping the benefits of our services, highly acknowledge our effective growth solutions in the digital space. We achieve the desired success with our strategic approach, creative works, and deep customer research using the most sophisticated tools and techniques. Supported by a team of talented and creative professionals, we strive to deliver winning results for you.</p>
          </div>
      </section>

      {/* Let's Talk Section */}
      <LetsTalkSection />

    </main>
  );
}
