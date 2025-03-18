import React from "react";

const Header = () => {
  return (
    <header className="flex flex-col items-center text-center md:items-start md:text-left text-custom-navyblue m-6">
      <img 
        src="/assets/EZ Works Blue.png" 
        alt="Logo" 
        className="w-[222px] h-[62px] md:w-[250px] md:h-[70px] mx-auto md:mx-0"
      />
      <h3 className="custom-semibold text-[25px] mt-4">Suite Of Business Support Services</h3>
      <p className="max-w-[400px] mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      </p>
    </header>
  );
};

export default Header;
