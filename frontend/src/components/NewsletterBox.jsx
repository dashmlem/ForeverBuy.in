import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Sub now and get 62% off
      </p>
      <p className="mt-3 text-gray-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="flex items-center w-full gap-3 pl-3 mx-auto my-6 border border-gray-300 rounded-md sm:w-1/2"
      >
        <input
          className="w-full py-4 outline-none sm:flex-1"
          type="email"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="px-10 py-4 text-xs text-white bg-black"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
