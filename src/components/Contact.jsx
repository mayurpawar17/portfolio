import React from 'react';
import "tailwindcss";


const Contact = () => {
  return (
    <section id="contact">
      <h2 className='font-medium'>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button className='text-purple-500 bg-black' type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;