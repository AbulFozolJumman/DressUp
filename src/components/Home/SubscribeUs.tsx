import { FaArrowRight } from "react-icons/fa";

const SubscribeUs = () => {
  const handleOnclick = () => {
    alert("You are now a Subscriber!");
  };
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="bg-[#093045] md:p-10 p-5 md:flex justify-between items-center rounded-lg relative overflow-hidden">
        {/* Left Side Text */}
        <div className="mb-5 md:mb-0">
          <h2 className="text-sm text-gray-100 mb-1">Dress Up</h2>
          <h1 className="text-3xl text-white md:text-4xl font-bold mb-2">
            Subscribe Us
          </h1>
          <p className="text-gray-200 lg:w-[70%]">
            You will start receiving emails from the newsletter publisher. The
            emails will usually contain news, updates, and information about the
            publisher&#39;s products or services.
          </p>
        </div>

        {/* Subscription Input Box */}
        <div className="flex items-center border-2 border-gray-300 rounded-full px-4 py-2 shadow-sm bg-white lg:w-[300px]">
          <input
            type="email"
            placeholder="Enter email address..."
            className="flex-grow outline-none text-gray-600 px-2"
          />
          <button
            onClick={handleOnclick}
            className="bg-[#093045] text-white rounded-full p-2 ml-2"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeUs;
