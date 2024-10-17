import Link from 'next/link'

function LetsTalkSection() {
  return (
    <section className="w-full lg:p-16 lg:px-20 flex flex-col lg:flex-row lg:gap-16 lg:justify-center items-start #bg-grad-reverse bg-[var(--purple)] text-white">
        <div className="p-8 flex flex-col gap-8">
          <h1 className="text-[3rem]">Let's Talk</h1>
          <div>
            <p>Contact Number :</p>
            <Link href='tel:9999000000' className="text-[2rem]">+91 999900000</Link>
          </div>
          <div>
            <p>Got a digital product to discuss?</p>
            <Link href='mailto:info@somethingcool.com'>info@somethingcool.com</Link>
          </div>
          <div>
            <p>Would you like to join our team?</p>
            <Link href='mailto:hr@somethingcool.com'>hr@somethingcool.com</Link>
          </div>
        </div>

        <div className="p-8 flex flex-col gap-12">
          <h3 className="font-bold">Do you want to build a product, hire a development team or simply have a question?</h3>
          <form
            method="POST"
            action="https://script.google.com/macros/s/AKfycbxoR7TNuAy7zT07-tw2VdHnEXcW_9pEXe7FbyRWG4NBxqCt1gQE_1e5R-629iPyN3tISQ/exec"
            className='flex flex-col gap-4 text-white contact-form '
          >
            <div className="flex gap-4 justify-evenly flex-col lg:flex-row">
              <input className='p-4 border-b focus:border-b-4' placeholder='Name' type="name" name="Name" />
              <input className='p-4 border-b focus:border-b-4' placeholder='Phone' type="phone" name="Phone" />
              <input className='p-4 border-b focus:border-b-4 grow' placeholder='Email' type="email" name="Email" />
            </div>
            <textarea className='p-4 w-full border-b focus:border-b-4 min-h-40' placeholder='Message' name="Message" />
            <button className='p-4 bg-white text-black focus:text-white outline-none focus:bg-[var(--orange)] ' type='submit'>Send</button>
          </form>
        </div>
      </section>
  )
}

export default LetsTalkSection