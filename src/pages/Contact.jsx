import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <div class="text-center max-w-7xl mx-auto pt-14"></div>
        <div class="max-w-7xl mx-auto  pt-8 pb-16 grid md:grid-cols-2">
          <div>
            <div class="text-4xl font-bold text-black">
              Do yoy have some
              <br />
              questions?
            </div>
            <div class="py-6 text-black mb-4 ">
              We are at your disposal 7 days a week
            </div>
            <div class="text-sm text-black">
              29 SE 2nd Ave,
              <br />
              Miami, Florida 33131, <br />
              United States
            </div>
            <div class="mt-2 text-black">
              <a href="mailto:Support1234@Ecomall.com" className=" text-black">
                Support1234@Ecomall.com
              </a>
            </div>
            <div class="py-3">
              <a href="tel:+08 9229 8228" className="font-semibold text-black">
                +08 9229 8228
              </a>
            </div>
          </div>
          <div>
            <form>
              <input type="" id="" className="" />
              <div class="mb-5 flex gap-4">
                <input
                  type="text"
                  placeholder="Name*"
                  autocomplete="false"
                  class="w-full px-6 py-2 bg-gray-100 rounded-md  placeholder:text-gray-600 border-none"
                  name="name"
                />
                <label for="email" class="sr-only"></label>
                <input
                  type="text"
                  placeholder="E-mail*"
                  autocomplete="false"
                  class="w-full px-6 py-2  bg-gray-100 rounded-md  placeholder:text-gray-600 border-none"
                  name="name"
                />
              </div>
              <div class="mb-5">
                <label for="subject" class="sr-only"></label>
                <input
                  id="email_address"
                  type="email"
                  placeholder="subject*"
                  autocomplete="false"
                  class="w-full px-6 py-2  bg-gray-100 placeholder:text-gray-600 rounded-md border-none"
                  name="email"
                />
              </div>
              <div class="mb-3">
                <textarea
                  placeholder="Message"
                  class="w-full px-4 py-3  bg-gray-100 placeholder:text-gray-600 rounded-md border-none"
                  name="message"
                ></textarea>
              </div>
              <button
                type="submit"
                class="px-10 py-3 font-bold text-white  bg-gray-900 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31793018.894942272!2d-73.16447107577315!3d-13.413332832511053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrazil!5e0!3m2!1sen!2sin!4v1716398179597!5m2!1sen!2sin"
          width="100%"
          height="550"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="px-14 p-10">
        <h1 className="text-black font-bold text-2xl">
          Looking for our local store?
        </h1>
      </div>
      <div className="grid grid-cols-4 py-10 p-16 gap-16">
        <div className="">
          <h1 className="text-lg font-bold mb-3 text-black">lllinois</h1>
          <div className="text-sm">
            2972 Westheimer
            <br />
            RD.Santa Ana, <br />
            lllinois 85486
          </div>
          <div className="text-gray-500  text-sm py-5">
            Monday-Friday:9:00 - 20:00 <br />
            Saturday: 11:00 - 15:00
          </div>
          <hr className="py-4" />
          <a href="tel:+08 9229 8228" className="text-lg font-bold text-black">
            +08 9229 8228
          </a>
          <div className="">
            <a href="mailto:Support1234@Ecomall.com" className="text-black">
              Support1234@Ecomall.com
            </a>
          </div>
        </div>

        <div className="">
          <h1 className="text-lg font-bold mb-3 text-black">Delaware</h1>
          <div className="text-sm">
            6391 Elgin
            <br />
            St. Celina, <br />
            Delaware 10299
          </div>
          <div className="text-gray-500  text-sm py-5">
            Monday-Friday:9:00 - 20:00 <br />
            Saturday: 11:00 - 15:00
          </div>
          <hr className="py-4" />
          <a href="tel:+08 9229 8228" className="text-lg font-bold text-black">
            (406) 555-0120
          </a>
          <div>
            <a href="mailto:Support1234@Ecomall.com" className="text-black">
              Support1234@Ecomall.com
            </a>
          </div>
        </div>

        <div className="">
          <h1 className="text-lg font-bold mb-3 text-black">Hawaii</h1>
          <div className="text-sm">
            1901 Thornridge
            <br />
            Cir. Shiloh, <br />
            Hawaii 81063
          </div>
          <div className="text-gray-500  text-sm py-5">
            Monday-Friday:9:00 - 20:00 <br />
            Saturday: 11:00 - 15:00
          </div>
          <hr className="py-4" />
          <a href="tel:+08 9229 8228" className="text-lg font-bold text-black">
            (480) 555-0130
          </a>
          <div>
            <a href="mailto:Support1234@Ecomall.com" className="text-black">
              Support1234@Ecomall.com
            </a>
          </div>
        </div>

        <div className="">
          <h1 className="text-lg font-bold mb-3 text-black">New Mexico</h1>
          <div className="text-sm">
            4140 Parker
            <br />
            Rd. Allentown, <br />
            New Mexico 31134
          </div>
          <div className="text-gray-500  text-sm py-5">
            Monday-Friday:9:00 - 20:00 <br />
            Saturday: 11:00 - 15:00
          </div>
          <hr className="py-4" />
          <a href="tel:+08 9229 8228" className="text-lg font-bold text-black">
            (+80) 1234 5678 90
          </a>
          <div>
            <a href="mailto:Support1234@Ecomall.com" className="text-black">
              Support1234@Ecomall.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
