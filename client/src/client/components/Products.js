import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

// import Product1 from "./Assets/product1.png";
// import Product2 from "./Assets/product2.png";
// import Product3 from "./Assets/product3.png";
// import Product4 from "./Assets/product4.png";
// import Product5 from "./Assets/product5.png";
// import Product6 from "./Assets/product6.png";
// import Product7 from "./Assets/product7.png";
// import Product8 from "./Assets/product8.png";

const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_GET_ALL_DRUGS}`);
                // console.log(res.data);
                setData(res.data.data);
                // console.log(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };

        const timer = setTimeout(() => {
            fetchData();
        }, 50);

        return () => {
            clearTimeout(timer);
        }
    }, []);
    // console.log(data);
    const products = data.slice(0, 8);

    // const products = [
    //     {
    //         id: 1,
    //         name: 'Acebrofylline',
    //         href: '#',
    //         imageSrc: Product1,
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: 'NGN 7 850',
    //         color: '4.3',
    //     },
    //     {
    //         id: 2,
    //         name: 'Blood Test Strip',
    //         href: '#',
    //         imageSrc: Product2,
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: 'NGN 7 950',
    //         color: '4.1',
    //     },
    //     {
    //         id: 3,
    //         name: 'Glucometer',
    //         href: '#',
    //         imageSrc: Product3,
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: 'NGN 12 590',
    //         color: '4.3',
    //     },
    //     {
    //         id: 4,
    //         name: 'Insulin Syring',
    //         href: '#',
    //         imageSrc: Product4,
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: 'NGN 6 000',
    //         color: '4.0',
    //     },
    //     {
    //         id: 5,
    //         name: 'Inhaler',
    //         href: '#',
    //         imageSrc: Product5,
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: 'NGN 2 850',
    //         color: '4.0',
    //     },
    //     {
    //         id: 6,
    //         name: 'Plasminogen...',
    //         href: '#',
    //         imageSrc: Product6,
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: 'NGN 27 850',
    //         color: '4.0',
    //     },
    //     {
    //         id: 7,
    //         name: 'Daibamit',
    //         href: '#',
    //         imageSrc: Product7,
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: 'NGN 6 435',
    //         color: '3.9',
    //     },
    //     {
    //         id: 8,
    //         name: 'Metformin',
    //         href: '#',
    //         imageSrc: Product8,
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: 'NGN 5 788',
    //         color: '3.9',
    //     },
    // ]
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-bold mb-10 text-center tracking-tight text-gray-900">
                    Browse medication and products
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
                                        <Link to={`product/${product.id}`}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </Link>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.ratingAverage}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">NGN {product.price}</p>
                            </div>
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center 
                                py-2 px-4 border border-transparent text-sm font-medium 
                                rounded-md text-white bg-blue-600 hover:bg-blue-700 
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    view more
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center item-center mt-8 '>
                    <button
                        type="submit"
                        className="mt-6 w-64 bg-transparent border rounded-md border-2 border-blue-700 py-3 px-8 
                        flex items-center justify-center text-base font-medium 
                        text-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        View all products
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Products