import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ContactForm = ({ onSubmit, initialName, initialText, initialEmail }) => {
  const [name, setName] = useState(initialName || "");
  const [email, setEmail] = useState(initialEmail || "");
  const [text, setText] = useState(initialText || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the onSubmit function and pass the form data
    onSubmit({ name, email, text });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] mx-4">
      <div className="relative">
        <label className="bg-white text-black text-base font-semibold absolute -top-3 left-3 px-2">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full min-h-[40px] max-h-[50px] border border-[#5A5959] py-3 px-4"
        />
      </div>
      <div className="relative">
        <label className="bg-white text-black text-base font-semibold absolute -top-3 left-3  px-2">
          Email
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full min-h-[40px] max-h-[50px] border border-[#5A5959] py-3 px-4"
        />
      </div>
      <div className="relative">
        <label className="bg-white text-black text-base font-semibold absolute -top-3 left-3 px-2">
          Text
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="text"
          rows="8"
          className="w-full border border-[#5A5959] py-3 px-4"
        />
      </div>
      <div className="w-1/2 bg-black flex self-end justify-center rounded-md py-[10px] px-[18px] ">
        <input
          type="submit"
          className=" text-white text-base font-semibold cursor-pointer "
        />
      </div>
    </form>
  );
};

export default ContactForm;
