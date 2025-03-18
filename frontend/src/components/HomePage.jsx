import React from "react";
import Header from "./Header";
import ContactForm from "./ContactForm";
import ServiceCard from "./ServiceCard";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start flex-wrap p-6 relative gap-4">
      
      {/* Left Section */}
      <section className="text-center md:text-left md:max-w-[700px]">
        <Header />

        {/* Contact Form on larger screens */}
        <div className="hidden md:block">
          <ContactForm />
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="w-full md:w-auto flex flex-col items-center">
        <ServiceCard />
      </section>

      {/* Contact Form at the bottom in mobile view */}
      <div className="md:hidden w-full flex justify-center mt-5">
        <ContactForm />
      </div>
    </div>
  );
};

export default HomePage;
