import React, { useState } from "react";
import { send } from "emailjs-com";
import { motion } from "framer-motion";

function ContactForm() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [messageFailed, setMessageFailed] = useState(false);
  const [displayResponse, setDisplayResponse] = useState(false);

  const handleName = (e) => {
    setSenderName(e.target.value);
  };

  const handleEmail = (e) => {
    setSenderEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setSenderMessage(e.target.value);
  };

  const sendMail = (e) => {
    e.preventDefault();

    send(
      "service_sppd7un",
      "template_i7097af",
      { senderName, senderEmail, senderMessage },
      "user_NNdYEC8w2bsbkaV2JXrD4"
    )
      .then((response) => {
        console.log("Message sent succesfully", response.status, response.text);
        console.log("below is response");
        console.log(response);
        if (response.status == "200") {
          setMessageSuccess(true);
        }
      })
      .catch((err) => {
        console.log("Failed", err);
        if (err) {
          setMessageFailed(true);
        }
      });

    setSenderName("");
    setSenderEmail("");
    setSenderMessage("");
    setDisplayResponse(true);
  };

  const resetResponse = () => {
    setMessageSuccess(false);
    setMessageFailed(false);
    setDisplayResponse(false);
  };

  return (
    <div className="md:w-[50%]  rounded-b-3xl h-full p-5  relative ">
      <form
        onSubmit={sendMail}
        className={`my-0 md:my-5  ${displayResponse ? "hidden" : "block"}`}
      >
        <input
          type="text"
          name="senderName"
          required
          value={senderName}
          onChange={handleName}
          placeholder="Your Name"
          className=" py-5 lg:py-10 outline-none border-b block w-full md:text-xl placeholder-slate-600"
        />
        <input
          type="email"
          name="senderEmail"
          required
          value={senderEmail}
          onChange={handleEmail}
          placeholder="Your Email"
          className=" py-5 lg:py-10 outline-none border-b block w-full md:text-xl placeholder-slate-600"
        />
        <textarea
          name="senderMessage"
          required
          value={senderMessage}
          onChange={handleMessage}
          cols="30"
          rows="5"
          placeholder="Your Message"
          className=" py-5 lg:py-10 outline-none border-b block w-full md:text-xl placeholder-slate-600"
        ></textarea>
        <div className=" flex justify-end items-end">
          <button
            type="submit"
            className="p-3 md:p-5 md:text-xl inline-block  bg-gradient-to-r from-[#080c55] to-[#030349]   rounded text-white font-semibold active:scale-95 transition-all my-10"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className={`  h-[300px] ${displayResponse ? "flex" : "hidden"}  `}>
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          ease="easeIn"
          className={` h-full w-full text-4xl flex-col justify-center items-center space-y-5 font-extrabold text-green-500 ${
            messageSuccess ? "flex" : "hidden"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[50px] w-[50px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1>DONE</h1>
          <p
            onClick={resetResponse}
            className="text-sm font-semibold underline cursor-pointer pt-10"
          >
            Want to send another message?
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          ease="easeIn"
          className={` h-full w-full text-xl md:text-2xl lg:text-3xl flex-col justify-center items-center space-y-5 font-extrabold text-red-500  ${
            messageFailed ? "flex" : "hidden"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[50px] w-[50px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1>ERROR</h1>
          <p
            onClick={resetResponse}
            className="text-sm font-semibold underline cursor-pointer pt-10"
          >
            Try again?
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactForm;
