import React, { useState } from 'react';
import instagram from './instagram.png';
import wordpress from './wordpress.png';

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
    <div className="ContactComponent dark:bg-zinc-800 p-6 rounded-lg shadow-md">
      <h5 className="text-2xl font-bold text-gray-300 mb-6 md:w-2/3">Drop in a message and I'll get in touch with you as soon as possible.</h5>
      <div className="mb-8">
        <label
          className="block font-bold text-gray-200"
          htmlFor="name"
        >
          Name
        </label>
        <p className="w-full border text-gray-200 border-zinc-800">
          Anuraag Muktevi
        </p>
      </div>
      <div className="mb-8">
        <label
          className="block font-bold text-gray-200"
          htmlFor="email"
        >
          Email
        </label>
        <p className="w-full border text-gray-200 border-zinc-800">
          muktevianuraag@gmail.com
        </p>
      </div>
      <div className="mb-8">
        <label
          className="block text-gray-200 font-bold"
          htmlFor="message"
        >
          Phone Number
        </label>
        <p className="w-full border border-zinc-800 text-gray-200">
          +1 469-346-0185  
        </p>
      </div>
      <div className="mb-8">
        <label
          className="block text-gray-200 font-bold mb-6"
          htmlFor="message"
        >
          Follow me on
        </label>
        <div className="grid grid-cols-2">
            <a href="https://www.instagram.com/thegaaruverse/"><figure><img style={{marginLeft:10}} src={instagram}/><figcaption className="text-xxs text-gray-100">instagram</figcaption></figure></a>
            <a href="https://thegaaruverse.wordpress.com/"><figure><img style={{marginLeft:10}} src={wordpress}/><figcaption className="text-xxs text-gray-100">wordpress</figcaption></figure></a>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
