import React from "react";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="flex justify-between items-center py-5">
      <a href="https://shefinde.com">
        <Image
          src="https://shefinde.com/assets/images/logo.svg"
          alt="SHEFINDE"
          width={100}
          height={20}
        />
      </a>
      <a href="https://yahoo.com">
        <Image
          src="https://logos-download.com/wp-content/uploads/2018/12/Yahoo_logo.png"
          alt="Yahoo"
          width={100}
          height={20}
        />
      </a>
      <a href="https://www.healthline.com">
        <Image
          src="https://www.healthline.com/hl-site-assets/hl-logo-white-text.svg"
          alt="Healthline"
          width={100}
          height={20}
        />
      </a>
      <a href="https://yahoo.com">
        <Image
          src="https://logos-download.com/wp-content/uploads/2018/12/Yahoo_logo.png"
          alt="Yahoo"
          width={100}
          height={20}
        />
      </a>
      <a href="https://yahoo.com">
        <Image
          src="https://logos-download.com/wp-content/uploads/2018/12/Yahoo_logo.png"
          alt="Yahoo"
          width={100}
          height={20}
        />
      </a>
      <a href="https://mail.yahoo.com">
        <Image
          src="/images/yahoo-logo.png"
          alt="Yahoo"
          width={100}
          height={20}
        />
      </a>
      <a href="https://yahoo.com">
        <Image
          src="/images/yahoo-logo.png"
          alt="Yahoo"
          width={100}
          height={20}
        />
      </a>
    </div>
  );
};

export default Brands;
