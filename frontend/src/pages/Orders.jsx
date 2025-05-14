import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="px-4 pt-16 border-t sm:px-0">
      <div className="mb-8 text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div className="space-y-6">
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 py-6 text-gray-700 border-b md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-start gap-6">
              <img
                src={item.image[0]}
                alt={item.name}
                className="object-cover w-20 h-20 rounded"
              />
              <div className="flex-1">
                <p className="text-base font-medium sm:text-lg">{item.name}</p>

                <div className="flex items-center gap-4 mt-2 text-gray-700">
                  <p className="text-lg font-semibold">
                    {currency}
                    {item.price}
                  </p>
                  <p className="text-sm">Quantity: 1</p>
                  <p className="text-sm">Size: M</p>
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Ordered on: <span className="text-gray-400">25 Jul 2023</span>
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between md:w-1/3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>

              <button className="px-4 py-2 text-sm border rounded hover:bg-gray-50">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
