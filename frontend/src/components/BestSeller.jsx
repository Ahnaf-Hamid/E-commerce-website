import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import ProductItem from "./ProductItem";
import Title from "./Title";

const BestSeller = () => {
  const { products } = useContext(Context);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller === true);
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10 max-w-80 mx-auto sm:max-w-xl sm:mx-auto md:max-w-3xl md:mx-auto lg:max-w-5xl lg:mx-auto xl:max-w-7xl xl:mx-auto">
      <Title text1={'Best'} text2={'Sellers'}/>
      <p className="text-center sm:text-sm md:text-base pb-5 text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates
        aperiam ullam eos!
      </p>

      {/* Rendering products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
