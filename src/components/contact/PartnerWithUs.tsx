import { useState } from "react";
import CustomerSupport from "../SvgComponent/CustomerSupport";
import BusinessInquires from "../SvgComponent/BusinessInquires";
import { useMobile } from "@/hooks/useMobile";

const PartnerWithUs = () => {
  const isMobile = useMobile();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <section className="py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side - Contact Information */}
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <span className="text-[10px] font-medium md:text-base text-primary-300 bg-gradient-dark-bg px-4 py-2 rounded-full inline-block">
              We are here for you
            </span>

            <h2 className="text-[24px]  md:text-3xl font-bold text-white">
              Partner With Us
            </h2>

            <p className="text-gray-300 text-base md:text-lg">
              Have a question, need support, or want to explore partnership
              opportunities? We're here to help
            </p>
          </div>

          {/* Contact Cards */}
          {isMobile ? (
            <div className="relative block md:hidden  sm:min-h-150">
              {/* Background Image */}
              <div>
                <img
                  src="/contactImgMobile.webp"
                  alt=""
                  className="w-full h-auto"
                />
              </div>

              {/* For Individuals Card - Top Right */}
              <div className="absolute top-[3%] sm:top-[5%] right-[1%] sm:right-[2%] p-3 sm:p-4 max-w-[75%] space-y-4  md:space-y-8">
                <div className="w-12 h-12 bg-primary-300/10 rounded-full flex items-center justify-center">
                  <BusinessInquires />
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-semibold text-lg">
                    Business Inquiries
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Interested in accepting crypto or custody solutions for your
                    company?
                  </p>
                  <p className="text-white text-sm">
                    Email:{" "}
                    <a
                      href="mailto:Sales@digitwallethub.com"
                      className="text-primary-300 hover:underline"
                    >
                      Sales@digitwallethub.com
                    </a>
                  </p>
                </div>
              </div>

              {/* For Businesses Card - Bottom Left */}
              <div className="absolute bottom-[3%] sm:bottom-[15%] left-[1%] sm:left-[2%] p-3 sm:p-4 max-w-[75%]">
                <div className="w-12 h-12 bg-primary-300/10 rounded-full flex items-center justify-center">
                  <CustomerSupport />
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-semibold text-lg">
                    Customer Support
                  </h3>
                  <p className="text-gray-400 text-sm">
                    For help with your account or crypto transactions.
                  </p>
                  <p className="text-white text-sm">
                    Email:{" "}
                    <a
                      href="mailto:support@digitwallethub.com"
                      className="text-primary-300 hover:underline"
                    >
                      support@digitwallethub.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden md:block space-y-6 relative">
              <div>
                <img src="/contactimg.webp" alt="" />
              </div>
              {/* Business Inquiries Card */}
              <div className="absolute top-5 right-5 max-w-80 space-y-4">
                <div className="w-12 h-12 bg-primary-300/10 rounded-full flex items-center justify-center">
                  <BusinessInquires />
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-semibold text-lg">
                    Business Inquiries
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Interested in accepting crypto or custody solutions for your
                    company?
                  </p>
                  <p className="text-white text-sm">
                    Email:{" "}
                    <a
                      href="mailto:Sales@digitwallethub.com"
                      className="text-primary-300 hover:underline"
                    >
                      Sales@digitwallethub.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Customer Support Card */}
              <div className="absolute max-w-80 bottom-15 left-10 space-y-4">
                <div className="w-12 h-12 bg-primary-300/10 rounded-full flex items-center justify-center">
                  <CustomerSupport />
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-semibold text-lg">
                    Customer Support
                  </h3>
                  <p className="text-gray-400 text-sm">
                    For help with your account or crypto transactions.
                  </p>
                  <p className="text-white text-sm">
                    Email:{" "}
                    <a
                      href="mailto:support@digitwallethub.com"
                      className="text-primary-300 hover:underline"
                    >
                      support@digitwallethub.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Side - Contact Form */}
        <div
          className=" rounded-2xl px-2 md:px-8 py-12"
          style={{
            backgroundImage: `url("/contact.webp")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-2 p-4 rounded-md bg-bg-widget"
            >
              <h3 className="text-white font-semibold text-xl mb-6">
                Send us a message
              </h3>
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-400 text-sm"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter first Name"
                    className="w-full border border-dark-stroke3 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-300 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-400 text-sm"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter Last Name"
                    className="w-full border border-dark-stroke3 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-300 transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="w-full border border-dark-stroke3 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-300 transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-400 text-sm"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="w-full border border-dark-stroke3 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-300 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-400 text-sm"
                >
                  Subject
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  rows={5}
                  className="w-full border border-dark-stroke3 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary-300 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  className="px-6 py-2.5 rounded-full font-medium text-sm text-white"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(147, 205, 253, 1), rgba(77, 106, 174, 1))",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
