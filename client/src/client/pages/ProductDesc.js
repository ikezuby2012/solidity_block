import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { addToCart } from "../../actions/cart";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import HomeTop from "../components/HomeTop";
import Contact from "./contact";
import NotiPopup from "../components/utils/NotiPopup";

import product8 from "../components/Assets/productd.png";
import Product1 from "../components/Assets/product1.png";
import Product2 from "../components/Assets/product2.png";
import Product3 from "../components/Assets/product3.png";
import Product4 from "../components/Assets/product4.png";

import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import linked_in from "../images/linked_in.svg";
import footerlogo from "../images/footer-logo.svg";

const ProductDesc = () => {
  const [showContact, setShowContact] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [item, setItems] = useState([]);
  const [color, setColor] = useState("");
  const [content, setContent] = useState("");
  const [popup, setPopup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedIn, user } = useSelector((state) => state.user);
  // console.log(user);

  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_GET_ALL_DRUGS}/${id}`);
        // console.log(res.data);
        setData(res.data.data);
        // console.log(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_GET_ALL_DRUGS}`);
        setItems(res.data.data);
        // console.log(data)
      } catch (err) {
        console.log(err);
      }
    }

    const timer = setTimeout(() => {
      fetchData();
      fetchProducts();
    }, 50);

    return () => {
      clearTimeout(timer);
    }
  }, []);

  const products = item.slice(0, 4);

  const handleAdd = () => {
    setCount(count + 1)
  }
  const handleSubtract = () => {
    setCount(count - 1)
  }
  // console.log(id);

  const onShowContact = () => setShowContact(!showContact);
  // let serverUrl = `http://localhost:5000/images/drugs`;

  const ImageBox = styled.div`
  background-image: url(${process.env.REACT_APP_HOST}/${data.imageCover});
  background-size: cover;
  background-position: center;
  height: 20rem;
  width: 20rem;
  `;

  const addItem = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      drug: id,
      quality: count * 1
    };
    console.log(data);
    dispatch(addToCart(data))
      .then(() => {
        setLoading(false);
        setColor("success");
        setContent("item added to cart");
        setPopup(true);
        setTimeout(() => {
          navigate("/payment");
        }, 3000)
      }).catch(err => {
        setColor("danger");
        setContent("something went wrong!");
        setPopup(true);

      })
  }
  if (popup) {
    setTimeout(() => {
      setPopup(false);
    }, 3000)
  }

  // const products = [
  //   {
  //     id: 1,
  //     name: 'Acebrofylline',
  //     href: '#',
  //     imageSrc: Product1,
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: 'NGN 7 850',
  //     color: '4.3',
  //   },
  //   {
  //     id: 2,
  //     name: 'Blood Test Strip',
  //     href: '#',
  //     imageSrc: Product2,
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: 'NGN 7 950',
  //     color: '4.1',
  //   },
  //   {
  //     id: 3,
  //     name: 'Glucometer',
  //     href: '#',
  //     imageSrc: Product3,
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: 'NGN 12 590',
  //     color: '4.3',
  //   },
  //   {
  //     id: 4,
  //     name: 'Insulin Syring',
  //     href: '#',
  //     imageSrc: Product4,
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: 'NGN 6 000',
  //     color: '4.0',
  //   }
  // ]

  return (
    <>
      {showContact && <Contact onContact={onShowContact} />}
      <HomeTop onContact={onShowContact} />
      {popup && <NotiPopup content={content} color={color} />}
      <section className="mt-20">
        <section className="border-b-2 pb-8 block md:flex w-4/5 mx-auto">
          <div className="flex-initial p-8 w-4/5">
            {/* <img
              className='w-full'
              src={`http://localhost:5000/images/drugs/${data.imageCover}`} /> */}
            <ImageBox />
          </div>

          <div className="ml-10 mt-10">
            <div>
              <h2 className='text-3xl font-bold'>{data.name}</h2>
              <p className="text-2xl">NGN {data.price}</p>
              <p className='mt-2 text-base mb-6'>
                <span className='text-green-500 font-bold'>
                  Available:
                </span>
                {" "} true
              </p>
            </div>

            <div>
              <p className='md:text-sm'>
                {data.description}
                {/* This pack contains 30 tablets of
                Jardiance which is helpful in controlling
                high blood sugar, helps prevent kidney damage, blindness,
                nerve problems, loss of limbs, and sexual function problems. */}
              </p>

              <div className='mt-4'>
                <span className='mr-4'>Quantity</span>
                <button
                  className='mr-10'
                  onClick={handleSubtract}
                >
                  -
                </button>
                <span className='mr-10'>{count}</span>
                <button
                  onClick={handleAdd}
                >
                  +
                </button>
              </div>

              <div className="mt-8 rounded-md shadow">
                {loggedIn ? <Link
                  to="#"
                  onClick={(e) => addItem(e)}
                  className="w-1/2 flex items-center 
                  justify-center px-8 py-3 border 
                  border-transparent text-base 
                  font-medium rounded-md 
                  text-white bg-indigo-600 
                  hover:bg-indigo-700 md:py-4 md:text-sm
                  md:px-10"
                >
                  Add to cart
                </Link> :
                  <Link
                    to="/login"
                    className="w-1/2 flex items-center 
                  justify-center px-8 py-3 border 
                  border-transparent text-base 
                  font-medium rounded-md 
                  text-white bg-indigo-600 
                  hover:bg-indigo-700 md:py-4 md:text-sm
                  md:px-10"
                  >
                    Login
                  </Link>
                }

              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="text-2xl font-bold mb-10 text-center tracking-tight text-gray-700">
                Related products
              </h2>

              <div className="mt-6 mx-10 grid grid-cols-1 gap-y-14 gap-x-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="shadow-lg p-12 shadow-gray-500/50 w-full min-h-80 
                            bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden 
                            group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src={`${process.env.REACT_APP_HOST}/${product.imageCover}`}
                        alt={product.name}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <Link to={`/product/${product.id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                          </Link>
                        </h3>
                        {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                      </div>
                      <p className="text-sm font-medium text-gray-900">{product.price}</p>
                    </div>
                    <div className="mt-6">
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center 
                                    py-2 px-4 border border-transparent text-sm font-medium 
                                    rounded-md text-white bg-blue-600 hover:bg-blue-700 
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
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
    </>
  )
}

export default ProductDesc