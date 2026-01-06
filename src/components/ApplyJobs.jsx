import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ApplyJobs = ({jobId}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    skills: "",
    experience: "",
    resume: null,
    jobId : jobId
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFormData({ ...formData, resume: file });
    } else {
      toast.error("Please upload a valid PDF file.");
      e.target.value = ""; // Clear the input
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      toast.error("Please upload a resume in PDF format.");
      return;
    }

    setIsSubmitting(true);

    // Prepare form data for the API
    const apiFormData = new FormData();
    apiFormData.append("name", formData.name);
    apiFormData.append("email", formData.email);
    apiFormData.append("phoneNumber", formData.phoneNumber);
    apiFormData.append("skills", formData.skills);
    apiFormData.append("experience", formData.experience);
    apiFormData.append("resume", formData.resume);
    apiFormData.append("jobId", formData.jobId);

    try {
      const response = await axios.post(
        "https://ecoavenstra-be.onrender.com/api/v1/employer/apply-job",
        apiFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Application submitted successfully!");
        console.log("Response Data:", response.data);

        // Clear the form
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          skills: "",
          experience: "",
          resume: null,
          jobId : jobId
        });
      } else {
        toast.error("Failed to submit the application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the application:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="bg-white text-black rounded-lg w-full max-w-2xl p-8">
        <Toaster />
        <h2 className="text-2xl font-bold mb-6 text-center">Apply for a Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="skills" className="block text-sm font-medium">
              Skills:
            </label>
            <textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="experience" className="block text-sm font-medium">
              Experience (in years):
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="resume" className="block text-sm font-medium">
              Resume (PDF only):
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept="application/pdf"
              onChange={handleFileChange}
              required
              className="w-full text-sm text-gray-500 border border-gray-300 rounded p-2"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 rounded ${
              isSubmitting
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyJobs;
