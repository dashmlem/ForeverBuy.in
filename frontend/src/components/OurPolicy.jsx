import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col justify-around gap-12 py-20 text-xs text-center text-gray-700 md:text-base sm:flex-row sm:gap-2 sm:text-sm">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" />
        <p className="font-semibold">7dr</p>
        <p className="text-gray-400">Lorem ipsum dolor sit amet</p>
      </div>
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" />
        <p className="font-semibold">best sup</p>
        <p className="text-gray-400">customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
