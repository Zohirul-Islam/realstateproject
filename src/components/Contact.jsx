import React from "react";

function Contact() {
  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="contact"
    >
      <h1 className="text-2xl text-center md:text-4xl mb-2 font-bold">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="max-w-80 text-gray-400 mx-auto text-center mb-12 capitalize">
        Ready to make a move? Let's Build your future togather
      </p>

      <form className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap gap-5">
            <div className="w-full md:w-1/3 text-left flex-1">Your Name: 
                <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2 outline-none" type="text" placeholder="Your Name" name="name" required />
            </div>
            <div className="w-full md:w-1/3 text-left flex-1">Your Email: 
                <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2 outline-none" type="email" placeholder="Your Email" name="email" required />
            </div>
        </div>
        <div className="text-left">Message:
            <textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none outline-none" name="message" placeholder="message" required></textarea>
        </div>
        <button className="bg-blue-500 px-6 py-3 rounded mt-4 cursor-pointer text-white" >Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
