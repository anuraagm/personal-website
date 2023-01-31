import React, { useState } from 'react';

const ContactComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
  };

  return (
    <div className="ContactComponent dark:bg-zinc-800 p-6 rounded-lg shadow-md mb-12" id="contact">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-200 font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full border border-zinc-600 text-gray-200 bg-zinc-700 p-2"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-200 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full border border-zinc-600 text-gray-200 bg-zinc-700 p-2"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-200 font-medium mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full border border-zinc-600 text-gray-200 bg-zinc-700 p-2"
            id="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          className="bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-2 px-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactComponent;
