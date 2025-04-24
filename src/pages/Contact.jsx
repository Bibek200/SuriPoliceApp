import React from 'react';

const Contact = () => (
  <div className="p-4 max-w-xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
      <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
      <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32"></textarea>
      <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800">Send Message</button>
    </form>
  </div>
);

export default Contact;