import React from "react";

const SubscribeBox = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  };
  return (
    <div className="text-center py-10">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now and get 20% off
      </p>
      <p className="mt-3 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        sunt!
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border"
      >
        <input
          type="email"
          placeholder=" Enter your email..."
          className="w-full sm:flex-1 outline-none"
          required
        />
        <button
          type="submit"
          className="text-white bg-black px-10 py-4 text-xs"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default SubscribeBox;
