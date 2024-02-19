import { useState } from "react";
import serviceImage from "../assets/serviceImage.png";
import Button from "./Button/Button";
import { BiMessageDetail } from "react-icons/bi";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import ContactForm from "./ContactForm";

const Hero = () => {
  // Define state variables for form data
const [formData] = useState({
    name: "",
    email: "",
    text: ""
});

  // Handle form submission
  const handleSubmit = (data) => {
    // Handle form submission logic here, e.g., API calls, etc.
    console.log("Form submitted:", data);
  };

  return (
    <section className="px-[12%]">
      <div className="w-11/12">
        <h1 className="text-black text-[48px] font-extrabold">CONTACT US</h1>
        <p className="text-[#5A5959] text-base font-semibold">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>
      <section className="w-full flex items-center gap-[81px]">
        <div className="w-2/5 flex flex-col gap-[20px] mt-8">
          <div className="w-full flex justify-center items-start gap-[24px]">
            <Button
              isOutline={false}
              icon={<BiMessageDetail color="white" fontSize={24} />}
              text="VIA SUPPORTCHAT"
            />
            <Button
              isOutline={false}
              icon={<FaPhone color="white" fontSize={24} />}
              text="VIA CALL"
            />
          </div>
          <Button
            isOutline={true}
            icon={<CiMail color="black" fontSize={24} />}
            text="VIA EMAIL FORM"
          />
          <ContactForm
            onSubmit={handleSubmit}
            initialEmail={formData.email}
            initialName={formData.name}
            initialText={formData.text}
          />
        </div>
        <div className="w-3/5 flex justify-center items-center">
          <img src={serviceImage} alt="human representative at a call center" />
        </div>
      </section>
    </section>
  );
};

export default Hero;
