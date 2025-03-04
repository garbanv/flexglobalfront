"use client";
import React, { useState } from "react";
import { useActionState } from "react";
import { handleContactAction } from "../(actions)/CardIdAction";
import localeStore from "../(stores)/languageStore";

function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    handleContactAction,
    null
  );



  const lang = localeStore((state) => state.locale);

  return (
    <div className="  py-12 px-4 sm:px-6 lg:px-8">
      <h3 className="text-3xl font-bold text-center mb-10">{lang==='en' ? 'Contact Us' : 'Contacto'}</h3>
      <div className="max-w-screen-lg mx-auto">
        <div className=" py-8 px-6  rounded-lg sm:px-10">
          <form action={formAction} className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium "
                >
                  {lang==='en'? 'First Name' : 'Nombre'} *
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
/*                     value={formData.firstName}
                    onChange={handleChange} */
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex-1">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium "
                >
                  {lang==='en'? 'Lastname' : 'Apellido'} *
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
     /*                value={formData.lastName}
                    onChange={handleChange} */
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="subscriberId"
                className="block text-sm font-medium "
              >
                Subscriber ID *
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="subscriberId"
                  id="subscriberId"
                  required
              /*     value={formData.subscriberId}
                  onChange={handleChange} */
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium "
              >
                Email *
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
         /*          value={formData.email}
                  onChange={handleChange} */
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium "
              >
                {lang==='en'? 'Subject' : 'Asunto'} *
              </label>
              <div className="mt-1">
                <select
                  name="subject"
                  id="subject"
                  required
/*                   value={formData.subject}
                  onChange={handleChange} */
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="contact message">{lang==='en'? 'Contact us' : 'Contáctanos' }</option>
                  <option value="report a bug">{lang==='en'? 'Report Issue / suggestion' : 'Reportar incidencia /  sugerencia' }</option>

                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium "
              >
                {lang==='en'? 'Message' : 'Mensaje' } *
              </label>
              <div className="mt-1">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
/*                   value={formData.message}
                  onChange={handleChange} */
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 bg-black border border-transparent rounded-md shadow-sm text-sm font-medium text-white "
              >
                {isPending ? 'Sending...' : lang==='en'? 'Send' : 'Enviar'}
              </button>
              {state && (
          <p
            className={`${
              state.status === "OK"
                ? "bg-green-600 rounded-md py-2 text-xs text-white text-center my-5"
                : "bg-red-800 rounded-md py-2 text-xs text-white text-center my-5"
            }`}
          >
            {state.message}
          </p>
        )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
