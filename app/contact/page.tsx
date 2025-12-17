"use client";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const dates = (form.elements.namedItem("dates") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const mailtoLink = `mailto:info@gyptravels.com
      ?subject=Travel Enquiry from ${encodeURIComponent(name)}
      &body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nTravel Dates: ${dates}\n\nMessage:\n${message}`
      )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="
              inline-block mb-4 px-4 py-1
              text-sm font-medium
              text-teal-700
              bg-teal-100
              rounded-full
            "
          >
            Contact Us
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Plan Your Sri Lanka Adventure
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tell us about your travel plans and preferences.
            Our team will get back to you with a personalized itinerary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="
            bg-white/70
            backdrop-blur-xl
            border border-white/40
            rounded-3xl
            p-10
            shadow-[0_30px_80px_rgba(0,0,0,0.15)]
          ">
            <form className="space-y-6" onSubmit={handleSubmit}>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="
                    w-full
                    rounded-xl
                    border border-gray-300
                    px-4 py-3
                    text-gray-900
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-teal-500
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="
                    w-full
                    rounded-xl
                    border border-gray-300
                    px-4 py-3
                    text-gray-900
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-teal-500
                  "
                />
              </div>

              {/* Dates */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Travel Dates / Duration
                </label>
                <input
                  name="dates"
                  type="text"
                  placeholder="e.g. 7 days in December"
                  className="
                    w-full
                    rounded-xl
                    border border-gray-300
                    px-4 py-3
                    text-gray-900
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-teal-500
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us what kind of trip you're looking for..."
                  required
                  className="
                    w-full
                    rounded-xl
                    border border-gray-300
                    px-4 py-3
                    text-gray-900
                    placeholder-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-teal-500
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  w-full
                  bg-teal-600
                  text-white
                  text-lg
                  font-medium
                  py-4
                  rounded-full
                  shadow-lg
                  transition-all duration-300
                  hover:bg-teal-700
                  hover:shadow-xl
                  hover:-translate-y-0.5
                "
              >
                Send Enquiry
              </button>
            <a
              href="https://wa.me/94727851045?text=Hello%20GYP%20Travels,%20I%20would%20like%20to%20plan%20a%20trip%20to%20Sri%20Lanka."
              target="_blank"
              rel="noopener noreferrer"
              className="
                block
                w-full
                text-center
                border border-green-500
                text-green-600
                text-lg
                font-medium
                py-4
                rounded-full
                transition-all duration-300
                hover:bg-green-50
                hover:-translate-y-0.5
                "
              >
            Chat on WhatsApp
            </a>


            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Get in Touch
              </h3>
              <p className="text-gray-600">
                We usually respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4 text-gray-700">
              <p><strong>Email:</strong> info@gyptravels.com</p>
              <p><strong>Phone:</strong> +94 72 785 1045</p>
              <p><strong>WhatsApp:</strong> Available</p>
            </div>

            <p className="text-gray-600 text-sm">
              Prefer WhatsApp? Message us directly for quick responses and trip discussions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
