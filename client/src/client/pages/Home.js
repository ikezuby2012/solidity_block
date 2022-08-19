import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Articles from "../components/Articles";
import Products from "../components/Products";
import HomeTop from "../components/HomeTop";
import Contact from "./contact";

import footerlogo from "../images/footer-logo.svg";
import drug1 from "../images/drug1.svg";
import drug2 from "../images/drug2.svg";
import bolt from "../images/bolt.svg";
import bolt2 from "../images/bolt2.svg";
import boltMD from "../images/boltMD.svg";
import celebrate from "../images/celebrate.svg";
import doc from "../images/doc.png";
import hands from "../images/hands.png";
import client from "../images/client.png";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import linked_in from "../images/linked_in.svg";

function Home() {
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();

  const onShowContact = () => setShowContact(!showContact);
  const toLogin = () => {
    navigate("/signup");
  }
  return (
    <div>
      {showContact && <Contact onContact={onShowContact} />}
      <HomeTop onContact={onShowContact} />
      <div id="container" className="p-6 md:p-16">
        <main className="flex flex-col items-center justify-center text-gray-800 md:flex-row md:justify-between" style={{ overflow: "hidden" }}>
          <section className="flex flex-col justify-center items-center text-center md:text-left">
            <aside className="relative flex flex-col justify-center items-center md:flex-row-reverse">
              <img src={bolt} alt="" className="mb-4 md:hidden" />
              <h1 className="text-3xl md:text-7xl font-bold leading-8 md:mr-28">
                Your health is <br />
                <span className="text-[#008BFF]">our priority.</span>
              </h1>
            </aside>

            <aside className="flex flex-col justify-center items-center md:text-left">
              <p className="leading-5 mt-2 md:mt-4 md:mr-40 md:text-[28px] md:leading-[33px]">
                Get your medication delivered at <br />
                <span>your door without delay or hassle.</span>
              </p>

              <button onClick={() => navigate("/shop")} className="bg-[#008BFF] text-white text-md md:text-xl px-12 py-4 border-2 border-[#008BFF] rounded-md mt-4 md:w-[330px] md:h-[68px] md:mr-64">
                Place an order
              </button>
            </aside>
          </section>

          <section className="relative flex justify-center items-center mt-[72px]">
            <img
              src={doc}
              alt=""
              className=" w-[255px] h-[271px] md:w-[481px] md:h-[436px]"
            />
            <img
              src={drug1}
              alt=""
              className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] top-[-80px] left-[130px] md:top-[-100px] md:left-[280px]"
            />
            <img
              src={drug2}
              alt=""
              className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] top-[170px] left-[-70px] md:top-[280px] md:left-[-140px]"
            />
          </section>
        </main>

        <section className="flex flex-col mt-28 text-gray-800 md:flex-row md:justify-between">
          <Articles
          onClick={() => navigate("/book")}
            heading1="Consult a "
            heading2="professional"
            paragraph1="Book an appointment with"
            paragraph2="an expert and be attended"
            paragraph3="to in minutes."
            btn_description="Book now"
          />
          <Articles
            heading1="Upload your"
            heading2="prescription"
            paragraph1="Have a prescription from a"
            paragraph2="doctor? Upload it now and"
            paragraph3="we will deliver it to you."
            btn_description="Upload now"
          />

          <Articles
            heading1="Purchase your"
            heading2="medication"
            paragraph1="Place an order for your"
            paragraph2="medication and it will be"
            paragraph3="available in no time."
            btn_description="Place an order"
          />
        </section>

        <Products />


        <section className="flex flex-col  items-center justify-evenly text-gray-800 mt-12 md:flex-row md:justify-between">
          <aside className="flex flex-col justify-center items-center text-center md:text-left">
            <h1 className="text-xl md:text-[64px] font-bold leading-6 md:leading-[64px]">
              Have specific <br className="hidden md:block" /> concerns
              <br className="md:hidden" /> about
              <br className="hidden md:block" /> your health?
            </h1>
            <p className="leading-5 mt-2 md:mr-4 md:mt-6 md:text-[28px] md:leading-[32.81px]">
              Reach out to us or book a <br /> consultation with a professional
              and <br /> have your questions answered.
            </p>

            <button className="bg-[#008BFF] text-white text-md md:text-xl w-[215px] h-[46px] md:w-[330px] md:h-[68px] border-2 border-[#008BFF] rounded-md mt-4 md:mt-6 md:mr-32">
              Book a consultation
            </button>
          </aside>

          <aside className="relative mt-12">
            <img
              src={hands}
              alt=""
              className="w-[368px] h-[233px] md:w-[676px] md:h-[423px] border-dotted border-[3px] border-[#008BFF] rounded-2xl"
            />
            <img
              src={bolt2}
              alt=""
              className="absolute inset-y-5 w-[356.57px] h-[182.87px] md:hidden"
            />
            <img
              src={boltMD}
              alt=""
              className="hidden md:block absolute inset-y-5 md:w-[700px] md:h-[352px]"
            />
          </aside>
        </section>

        <section className="flex flex-col justify-center items-center text-gray-800 mt-[104px] md:flex-row-reverse md:justify-between">
          <aside className="flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold text-center leading-6 md:text-[64px] md:leading-[64px] md:text-left">
              Get rewarded for <br /> sticking with us.
              <br className="hidden md:block" /> It's{" "}
              <br className="md:hidden" /> totally free!!!
            </h1>
            <p className="text-center leading-5 mt-2 md:hidden">
              Reach out to us or book a <br /> consultation with a professional
              and <br /> have your questions answered.
            </p>

            {/* text for desktop */}
            <p className="hidden md:block md:text-[28px] md:text-left md:mt-6 md:mr-14">
              Enjoy discounts on medication and <br /> consultations, free
              delivery, etc when <br /> you create an account with us.
            </p>

            <button onClick={ toLogin} className="bg-[#008BFF] text-white text-md rounded-md mt-4 md:mt-6 md:text-xl md:mr-44 w-[215px] h-[46px] md:w-[330px] md:h-[68px] border-2 border-[#008BFF]">
              Create an account
            </button>
          </aside>

          <aside className="flex flex-col justify-center items-center text-gray-800 mt-24 shadow rounded-xl w-[340px] h-[237px] md:w-[536px] md:h-[353px]">
            <img src={celebrate} alt="" className="w-10 h-10 md:w-20 md:h-20" />
            <p className="text-center text-base md:text-2xl md:font-bold">
              We appreciate you.
            </p>
            <p className="text-center text-sm leading-5 mt-2 md:text-xl">
              Thank you for ordering from us. Here's a <br /> shopping voucher
              for 12% off your next <br /> purchase and delivery.
            </p>
          </aside>
        </section>

        <section className="flex flex-col justify-center items-center text-center text-gray-800 mt-20">
          <h1 className="font-bold text-xl md:text-5xl">
            Enjoy and benefit from true care <br /> and great service delivery
            with <br /> <span className="text-[#008BFF]">no boundaries.</span>
          </h1>
          <p className=" font-medium md:mt-4">
            Read some of our customer <br className="md:hidden" /> reviews and feedback.
          </p>
        </section>

        {/* Testimonial Section*/}
        <section className="flex flex-col justify-center items-center bg-[#008BFF] rounded-lg text-gray-100 h-[194px] mt-[29px] md:hidden">
          <div>
            <img src={client} alt="" className="" />
          </div>

          <article className="flex flex-col items-center text-center">
            <h1 className="text-lg font-bold">Mrs. Chiamaka Edozie</h1>
            {/* <p className="text-sm ">2 days ago</p> */}

            <h2 className="p-2">
              I couldn't be happier with the service delivery. Got my son's
              medication and everything was well packaged and sealed.
            </h2>
          </article>
        </section>
      </div>
      {/* Subscribe Section*/}
      <section className="flex flex-col justify-center items-center text-center bg-[#E2F2FF] md:hidden">
        <div className="mt-[51px]">
          <h1 className="text-2xl font-semibold">Join our e-mail list</h1>
          <p>
            Subscribe to our e-mail list and be the first <br /> to get updates
            and news from us!
          </p>
        </div>

        <div className="mt-8">
          <input
            type="text"
            class=" border text-gray-900 text-md rounded-lg block w-[330px] h-[70px]"
            placeholder="Enter your email address"
          />
          <button className="bg-[#008BFF] text-white text-xl text-center border-2 border-[#008BFF] rounded-md w-[330px] h-[56px] mt-4 mb-20 md:text-xl">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0E2133] p-4 flex flex-col ">
        <div className="flex flex-col mt-[56px] md:flex-row md:justify-evenly">
          <img src={footerlogo} className="w-[67.44px] h-[20px]" />
          <div>
            <h1 className="text-[#008BFF] text-md md:text-xl mt-[31px]">
              OUR COMPANY
            </h1>
            <p className="text-gray-100 text-sm md:text-md mt-2">
              PharmaBolt is a pharmaceutical service and <br /> delivery company
              that provides customers with <br /> medication, consultancy
              services and other <br /> related products when needed.
            </p>

            <div className="text-gray-100 mt-[18px] text-sm md:text-md">
              <p className="md:mt-[29px]">Telephone: +234 818 5679 900</p>
              <p className="md:mt-[29px]">E-mail: info@pharmabolt.com</p>
              <p className="md:mt-[29px]">
                Opening hours: 08:00AM - 10:00PM daily.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-[#008BFF] text-md md:text-xl">
              CUSTOMER SERVICE
            </h1>

            <section className="flex flex-row justify-between">
              <div className="text-sm md:text-md">
                <p className="mt-6 text-gray-100 ">Help</p>
                <p className="mt-6 text-gray-100">Terms of Use</p>
                <p className="mt-6 text-gray-100">Privacy Policy</p>
                <p className="mt-6 text-gray-100">Contact us</p>
                <p className="mt-6 text-gray-100">
                  Shipping and delivery
                </p>
              </div>

              <div className="md:ml-10 text-sm md:text-md">
                <p className="mt-6 text-gray-100">My Accounts</p>
                <p className="mt-6 text-gray-100">Order Status</p>
                <p className="mt-6 text-gray-100">
                  Payment and Vouchers
                </p>
                <p className="mt-6 text-gray-100">Cancellations</p>
                <p className="mt-6 text-gray-100">Products</p>
              </div>
            </section>
          </div>
        </div>

        <hr className="border border-[#E6E6E6] mt-[26px]" />

        <section className="flex flex-col justify-center items-center mt-6 md:flex-row-reverse md:justify-between">
          <div className="flex flex-row">
            <img src={facebook} alt="" className="mr-6" />
            <img src={linked_in} alt="" className="mr-6" />
            <img src={twitter} alt="" />
          </div>
          <p className=" text-xs text-gray-100 text-center mt-6 md:mt-0 md:text-sm">
            Copyright ©{new Date().getFullYear()} PharmaBolt. All Rights Reserved
          </p>
        </section>
      </footer>
    </div>
  );
}

export default Home;
