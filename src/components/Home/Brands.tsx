import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <div className="py-10">
      <h2 className="text-2xl md:text-4xl text-center font-bold mb-8 text-[#093045]">
        Top Brands
      </h2>
      <Marquee pauseOnHover={true}>
        <Image
          src="https://res.cloudinary.com/dh6tn79fy/image/upload/a_hflip/a_vflip/v1728065520/zara_el6guf.png"
          alt="Zara Logo"
          width={200}
          className="h-[100px] w-full md:px-5 px-2"
          height={100}
        />
        <Image
          src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1728067557/Giorgio-Armani-Logo_ohpkus.png"
          alt="Georgio Armani Logo"
          width={200}
          className="h-[100px] w-full md:px-5 px-2"
          height={100}
        />
        <Image
          src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1728065999/Tommy-Hilfiger-Logo_efqjmf.jpg"
          alt="Tommy Hilfiger Logo"
          width={200}
          className="h-[100px] w-full md:px-5 px-2"
          height={100}
        />
        <Image
          src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1728066001/rodi_p6be0h.png"
          alt="Rodi Jeans Logo"
          width={200}
          className="h-[100px] w-full md:px-5 px-2"
          height={100}
        />
        <Image
          src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1728066000/H_M_v51ci1.jpg"
          alt="H&M Logo"
          width={200}
          className="h-[100px] w-full md:px-5 px-2"
          height={100}
        />
        <Image
          src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1728066000/la_coste_fehnmr.jpg"
          alt="la_coste Logo"
          width={200}
          className="h-[100px] w-full md:px-5 px-2"
          height={100}
        />
        <Image
          src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1728066000/addidas_rdn6h6.jpg"
          alt="Addidas Logo"
          width={200}
          className="h-[100px] w-full md:px-5 px-2"
          height={100}
        />
        <Image
          src="https://res.cloudinary.com/dh6tn79fy/image/upload/v1728065999/Louis_Vuitton_t4aydy.jpg"
          alt="Louis Vuitton Logo"
          width={200}
          className="h-[100px] w-full md:px-5 px-2"
          height={100}
        />
      </Marquee>
    </div>
  );
};

export default Brands;
