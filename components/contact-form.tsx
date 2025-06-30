"use client"

import { useState } from "react"

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    message: "",
  })
  const [chars, setChars] = useState(0)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (name === "message") setChars(value.length)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { firstName, lastName, message } = form
    const subject = encodeURIComponent(
      `CONTACT US - ${firstName} ${lastName}`
    )
    const body = encodeURIComponent(message)
    window.location.href = 
      `mailto:leutnerwealth@rbc.com?subject=${subject}&body=${body}`
  }

  // shared input style: bottom border only
  const underline =
    "block w-full border-0 border-b py-2 mb-6 text-gray-800 text-sm font-serif focus:outline-none focus:ring-0"

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-lg space-y-6"
    >
      <h3 className="text-4xl font-serif text-cap text-gray-600 max-w-4xl mt-8 mb-0">
        Contact Us
      </h3>
      <p className="text-lg font-serif text-gray-700 mt-0 mb-8 leading-relaxed">
        Reach out to us using the form below or call our office directly.
        Our team will respond as promptly as possible.
      </p>

      <div>
        <label className="block text-base text-gray-700 font-serif mb-1">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          className={underline}
          value={form.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block text-base text-gray-700 font-serif mb-1">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          className={underline}
          value={form.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <label className="block text-base text-gray-700 font-serif">
            Your Message
          </label>
          <span className="text-sm text-gray-500 font-serif">
            {chars}/500
          </span>
        </div>
        <textarea
          name="message"
          rows={6}
          maxLength={500}
          className="w-full border-gray-600 p-2 text-gray-800 text-sm font-serif focus:outline-none focus:ring-0"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <p className="text-xs text-gray-500">
        Please do not include any personal or sensitive information.
      </p>

      <button
        type="submit"
        className="bg-gray-200 border border-gray-600 text-black px-8 py-3 text-base font-serif hover:bg-transparent transition-colors whitespace-nowrap"
      >
        Submit
      </button>

      <p className="text-xs text-gray-500 mt-4 leading-tight">
        By submitting this information, you understand that your information will
        be shared with Leutner Wealth (including RBC) to be used as detailed in
        our Privacy Policy, including to contact you with information about our
        products and services. You will have the option to unsubscribe from
        these communications.
      </p>

      <h3 className="text-4xl font-serif text-cap text-gray-600 max-w-4xl mt-8 mb-0">Visit or Call Us</h3>
      <h2 className="text-lg font-serif text-uppercase mb-2">Leutner Wealth Office</h2>
      <p className="text-lg font-serif text-gray-700 mt-0 leading-relaxed">
        1 Place Ville Marie, 5th Floor
      </p>
      <p className="text-lg font-serif text-gray-700 mt-0 mb-8 leading-relaxed">
        Montreal QC, H3B 1Z3
      </p>
      <h2 className="text-lg font-serif text-uppercase mb-2">Phone</h2>
      <p className="text-lg font-serif text-gray-700 mt-0 mb-8 leading-relaxed">
        514-840-9842
      </p>
      <h2 className="text-lg font-serif text-uppercase mb-2">Leutner Wealth Office</h2>
      <p className="text-lg font-serif text-gray-700 mt-0 mb-8 leading-relaxed">
        leutnerwealth@rbc.com      
      </p>
    </form>
  )
}
