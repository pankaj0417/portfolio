import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await fetch(
        fetch(`${import.meta.env.VITE_API_URL}/api/v1/sendmessage`),
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            msg: data.message,
          }),
        }
      );

      const result = await res.json();

      if (res.ok) {
        setStatusMessage("Message sent successfully!");
        setStatusType("success");
        reset();
      } else {
        setStatusMessage(result.error || "Failed to send message.");
        setStatusType("error");
      }
    } catch (error) {
      console.error("Error sending:", error);
      setStatusMessage("Something went wrong. Please try again.");
      setStatusType("error");
    } finally {
      setLoading(false);

      setTimeout(() => {
        setStatusMessage("");
        setStatusType("");
      }, 5000);
    }
  };

  return (
    <div
      id="contact"
      className="bg-white dark:bg-gray-800 dark:text-gray-300 flex justify-center items-center mx-10 mt-20 py-12 transition-all duration-500"
    >
      <div className="w-full max-w-lg p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          noValidate
        >
          {statusMessage && (
            <div
              className={`text-center text-sm font-medium px-4 py-2 rounded ${
                statusType === "success"
                  ? "text-green-600 bg-green-100"
                  : "text-red-600 bg-red-100"
              }`}
            >
              {statusMessage}
            </div>
          )}

          {/* Name Field */}
          <div>
            <label className="block mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-2 rounded  border ${
                errors.name ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Your Name"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={`w-full px-4 py-2 rounded border ${
                errors.email ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Your Email"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label className="block font-semibold mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="5"
              {...register("message", { required: "Message is required" })}
              className={`w-full px-4 py-2 rounded border ${
                errors.message ? "border-red-500" : "border-gray-600"
              }`}
              placeholder="Your Message"
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={` cursor-pointer ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white font-semibold py-2 px-6 rounded transition duration-300`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
