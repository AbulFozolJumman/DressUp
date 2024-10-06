/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="relative py-10 min-h-[100vh]">
      {/* Decorative Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dh6tn79fy/image/upload/v1728128616/About_bg_yj3shi.webp')",
        }}
      ></div>
      <div className="container mx-auto px-5 text-center">
        <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-[#093045] mb-6">
          About Us
        </h2>

        {/* Intro Section */}
        <div className="relative z-10">
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            Welcome to{" "}
            <span className="font-bold text-[#093045]">Dress Up</span>!
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            At <span className="font-bold text-[#093045]">Dress Up</span>, we
            believe fashion is more than just clothing—it's an expression of
            individuality. Our mission is to bring you the latest trends,
            timeless classics, and everything in between to help you showcase
            your personal style.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            We offer a carefully curated selection of unique and trendy products
            that blend comfort, quality, and fashion. Whether you're looking for
            casual wear, office attire, or statement pieces, we have something
            for everyone. Our collection includes a wide range of clothing for
            all occasions, keeping you at the forefront of fashion.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="relative z-10 bg-white shadow-lg rounded-lg py-8 px-6 md:px-12 text-left mb-10">
          <h3 className="text-2xl font-semibold text-[#093045] mb-6 text-center">
            Why Choose Us?
          </h3>
          <ul className="text-gray-600 leading-relaxed space-y-4">
            <li>
              ✅{" "}
              <span className="font-bold text-[#093045]">
                High-Quality Products:
              </span>{" "}
              We prioritize quality to ensure that you look and feel your best
              in every outfit.
            </li>
            <li>
              ✅{" "}
              <span className="font-bold text-[#093045]">Unique Styles:</span>{" "}
              Stay ahead of the trends with our constantly updated catalog of
              stylish apparel.
            </li>
            <li>
              ✅{" "}
              <span className="font-bold text-[#093045]">
                Exceptional Customer Service:
              </span>{" "}
              We're here for you 24/7, offering support and ensuring your
              shopping experience is smooth and enjoyable.
            </li>
            <li>
              ✅{" "}
              <span className="font-bold text-[#093045]">
                Sustainable Fashion:
              </span>{" "}
              We believe in fashion that cares for the environment. Many of our
              items come from eco-friendly sources.
            </li>
          </ul>
        </div>

        {/* Final Call to Action */}
        <div className="relative z-10 text-center">
          <p className="text-gray-600 leading-relaxed mb-6">
            Join us on our journey to redefine fashion and inspire confidence
            through clothing. Explore our latest collections and make a
            statement with every outfit you wear!
          </p>
          <Link
            href="/products"
            className="inline-block bg-[#093045] hover:bg-blue-800 text-white py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out"
          >
            Explore Our Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
