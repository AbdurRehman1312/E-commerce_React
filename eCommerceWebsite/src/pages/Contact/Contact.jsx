import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const Contact = () => {
  return (
    <>
      <BreadCrumb />
      <section>
        <div className="container my-14">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="col-span-1 sm:col-span-4 bg-white shadow-xl px-2 py-3 rounded-lg">
              <div className="flex flex-col gap-5 p-5">
                <div className="flex items-center gap-3">
                  <img src="icons/phone-r.png" alt="" className="w-10" />
                  <h2 className="text-lg font-semibold">Call to us</h2>
                </div>
                <h2 className="text-sm">
                  We are available 24/7, 7 days a week.
                </h2>
                <h2 className="text-sm">Phone: +8801611112222</h2>
              </div>
              <div className="flex flex-col gap-5 p-5">
                <div className="flex items-center gap-3">
                  <img src="icons/mail.png" alt="" className="w-10" />
                  <h2 className="text-lg font-semibold">Write To US</h2>
                </div>
                <h2 className="text-sm">
                  Fill out our form and we will contact you within 24 hours.
                </h2>
                <h2 className="text-sm">Emails: customer@exclusive.com</h2>
                <h2 className="text-sm">Emails: support@exclusive.com</h2>
              </div>
            </div>
            <form className="col-span-1 sm:col-span-8 bg-white shadow-xl px-7 py-10 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <input
                  className="h-14 w-full rounded bg-[#f5f5f5] py-2 px-4 text-sm placeholder:text-gray-600 focus:outline-none"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="h-14 w-full rounded bg-[#f5f5f5] py-2 px-4 text-sm placeholder:text-gray-600 focus:outline-none"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="h-14 w-full rounded bg-[#f5f5f5] py-2 px-4 text-sm placeholder:text-gray-600 focus:outline-none"
                  type="number"
                  placeholder="Phone number"
                />
              </div>
              <div className="w-full mt-6">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                  className="w-full rounded bg-[#f5f5f5] py-2 px-4 text-sm placeholder:text-gray-600 focus:outline-none"
                ></textarea>
              </div>
              <div className="flex justify-end mt-4">
                <button className="btn_red px-10">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
