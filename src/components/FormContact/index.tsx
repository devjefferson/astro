import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar o formulário, como uma solicitação de API
    console.log(formData);
    // Reinicializar o estado do formulário
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-gray-100 shadow-md rounded min-w-[600px]"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">
          Nome:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-1">
          Mensagem:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
