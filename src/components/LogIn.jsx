import React, { useState, useRef } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleLogin } from "./Redux/LoginSlice";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { PulseLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion"; // The star of the show

const ToggleSignIn = () => {
  // --- State Hooks ---
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [userToEmployer, setUserToEmployer] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  // --- Redux/Router Hooks ---
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // --- Ref Hooks (for Form Data) ---
  const Email = useRef(null);
  const Password = useRef(null);
  const Name = useRef(null);
  const OTP = useRef(null);
  const NewPassword = useRef(null);
  const ConfirmPassword = useRef(null);

  // --- Utility Functions ---

  const resetForm = () => {
    // Safely reset ref values
    if (Email.current) Email.current.value = "";
    if (Password.current) Password.current.value = "";
    if (Name.current) Name.current.value = "";
    if (OTP.current) OTP.current.value = "";
    if (NewPassword.current) NewPassword.current.value = "";
    if (ConfirmPassword.current) ConfirmPassword.current.value = "";
  };
  
  const resetPasswordFlow = () => {
    setForgotPassword(false);
    setOtpSent(false);
    setOtpVerified(false);
    resetForm();
  };

  const toggleToEmployer = () => {
    setUserToEmployer((prev) => !prev);
    resetForm();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
    resetPasswordFlow(); // Reset password flow when toggling sign-up/in
  };
  
  // --- API Handlers (Your Original Logic) ---

  const handleForgotPassword = async () => {
    const email = Email.current?.value;
    if (!email) return toast.error("Please enter your email.");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://ecoavenstra-be.onrender.com/api/v1/user/forgot-password",
        { mail: email }
      );

      if (response.data.success) {
        toast.success("OTP sent successfully!");
        setOtpSent(true);
      }
    } catch (error) {
      toast.error("Failed to send OTP! Please check your email.");
      console.error("Error:", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    const email = Email.current?.value;
    const otp = OTP.current?.value;
    if (!otp) return toast.error("Please enter the OTP.");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://ecoavenstra-be.onrender.com/api/v1/user/verify-otp",
        { mail: email, otp: parseInt(otp) }
      );

      if (response.data.success) {
        toast.success("OTP verified successfully! You can now set a new password.");
        setOtpVerified(true);
      }
    } catch (error) {
      toast.error("Invalid OTP! Please try again.");
      console.error("Error:", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    const newPassword = NewPassword.current?.value;
    const confirmPassword = ConfirmPassword.current?.value;
    const email = Email.current?.value;

    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match!");
    }
    if (!newPassword || newPassword.length < 6) {
        return toast.error("Password must be at least 6 characters long!");
    }

    setLoading(true);

    try {
      const response = await axios.put(
        "https://ecoavenstra-be.onrender.com/api/v1/user/change-password",
        { email, newPassword, confirmPassword }
      );

      if (response.data.success) {
        toast.success("Password changed successfully! Please log in.");
        resetPasswordFlow(); // Go back to login form
        // navigate("/login"); // Removed this, as the component state handles returning to login
      } else {
        toast.error(response.data.message || "Failed to change password!");
      }
    } catch (error) {
      toast.error("Failed to change password! An error occurred.");
      console.error("Error:", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = Email.current?.value;
    const password = Password.current?.value;
    const name = isRegistering ? Name.current?.value : "";
    const role = userToEmployer ? "EMPLOYER" : "USER";

    if (!email || !password || (isRegistering && !name)) {
        return toast.error("Please fill in all required fields.");
    }

    setLoading(true);

    try {
      let response;
      const endpoint = isRegistering ? "signup" : "login";

      response = await axios.post(
          `https://ecoavenstra-be.onrender.com/api/v1/user/${endpoint}`,
          isRegistering ? { name, role, email, password } : { email, password }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("profile_Name", response.data.user.name);
        localStorage.setItem("profile_Email", response.data.user.email);
        localStorage.setItem("profile_Role", response.data.user.role);

        if (userToEmployer) {
          navigate("/employerform");
          toast.success(`Welcome back, ${response.data.user.name}!`);
        } else {
          navigate("/");
          toast.success(`Welcome back, ${response.data.user.name}!`);
        }
        dispatch(toggleLogin());
      } else {
         toast.success(response.data.message || "Operation successful!");
      }

    } catch (error) {
        const errorMessage = error.response?.data?.message || "Invalid Credentials! Please try again.";
        toast.error(errorMessage);
        console.error("Error:", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };


  // --- Framer Motion Configurations ---

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const formVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const floatingVariants = {
    animate: (direction) => ({
      y: [0, direction * 15, 0], // Floating up or down by 15px
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 0.5, // Random initial delay for natural look
      },
    }),
    hover: {
        scale: 1.05,
        rotate: [0, 1, -1, 0],
        transition: {
            duration: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 20
        }
    }
  };

  const cardData = [
    { id: 1, text: "Bring your Digital identity with  Ecoavenstara  ", bg: "bg-gradient-to-br from-lime-300 to-green-400", direction: 1 },
    { id: 2, text: "Building trust in seamless technology", bg: "bg-gradient-to-br from-cyan-400 to-blue-500", direction: -1 },
    { id: 3, text: "Total Care. Total Different.", bg: "bg-gradient-to-br from-purple-500 to-pink-500", direction: 1 },
    { id: 4, text: "Logo + Identity", bg: "bg-gradient-to-br from-yellow-400 to-orange-500", direction: -1 },
  ];

  const cardItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  // --- Render Sub-Components for the Form ---

  const renderAuthForm = () => (
    <motion.form 
      key="auth-form" 
      variants={formVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit" 
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <motion.h2 
        className="text-4xl font-extrabold text-white mb-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {isRegistering ? "Join Us" : "Welcome Back"}
      </motion.h2>
      <motion.p 
        className="text-gray-400 mb-8"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {isRegistering ? "Create your account and start your journey." : "Sign in to continue to your dashboard."}
      </motion.p>

      {isRegistering && (
        <motion.input
          key="name-input"
          ref={Name}
          type="text"
          placeholder="Full Name"
          className="w-full p-3 rounded-xl bg-[#1A1A1D] border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
          required
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        />
      )}

      <motion.input
        key="email-input"
        ref={Email}
        type="email"
        placeholder="Email Address"
        className="w-full p-3 rounded-xl bg-[#1A1A1D] border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
        required
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      />

      <div className="relative">
        <motion.input
          key="password-input"
          ref={Password}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full p-3 rounded-xl bg-[#1A1A1D] border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
          required
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        />
        <motion.button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          whileTap={{ scale: 0.9 }}
        >
          {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
        </motion.button>
      </div>

      <div className="flex justify-between items-center text-sm">
        <motion.button
          type="button"
          onClick={toggleToEmployer}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
            userToEmployer
              ? "bg-green-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {userToEmployer ? "Employer Mode ON" : "Employer Mode OFF"}
        </motion.button>
        
        {!isRegistering && (
          <motion.button
            type="button"
            onClick={() => {
                setForgotPassword(true);
                resetForm();
            }}
            className="text-green-400 hover:text-green-300 transition-colors text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Forgot Password?
          </motion.button>
        )}
      </div>

      <motion.button
        type="submit"
        className="w-full bg-green-500 text-black font-bold py-3 rounded-xl hover:bg-green-400 transition-colors shadow-lg shadow-green-500/50 flex justify-center items-center"
        disabled={loading}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        {loading ? (
          <PulseLoader size={8} color={"#000"} />
        ) : (
          isRegistering ? "Register Now" : "Sign In"
        )}
      </motion.button>

      <motion.div 
        className="text-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
        <motion.button
          type="button"
          onClick={toggleRegister}
          className="text-green-400 hover:text-green-300 font-medium"
          whileHover={{ x: 5 }}
        >
          {isRegistering ? "Sign In" : "Register"}
        </motion.button>
      </motion.div>
    </motion.form>
  );

  const renderForgotPasswordForm = () => (
    <motion.div 
        key="forgot-form" 
        variants={formVariants} 
        initial="initial" 
        animate="animate" 
        exit="exit" 
        className="space-y-6"
    >
      <motion.h2 className="text-4xl font-extrabold text-white">
        {otpVerified ? "Change Password" : "Forgot Password"}
      </motion.h2>
      <p className="text-gray-400">
        {otpVerified ? "Set your new secure password below." : 
        otpSent ? "Enter the OTP sent to your email to verify." : 
        "Enter your registered email to begin the reset process."}
      </p>

      {/* 1. Enter Email Step */}
      {!otpSent && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <input
            ref={Email}
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-xl bg-[#1A1A1D] border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
            required
          />
          <motion.button
            type="button"
            onClick={handleForgotPassword}
            className="w-full bg-green-500 text-black font-bold py-3 rounded-xl hover:bg-green-400 transition-colors flex justify-center items-center"
            disabled={loading}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? <PulseLoader size={8} color={"#000"} /> : "Send OTP"}
          </motion.button>
        </motion.div>
      )}

      {/* 2. Verify OTP Step */}
      {otpSent && !otpVerified && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <input
            ref={OTP}
            type="number"
            placeholder="Enter OTP"
            className="w-full p-3 rounded-xl bg-[#1A1A1D] border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
            required
          />
          <motion.button
            type="button"
            onClick={handleVerifyOtp}
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded-xl hover:bg-yellow-400 transition-colors flex justify-center items-center"
            disabled={loading}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? <PulseLoader size={8} color={"#000"} /> : "Verify OTP"}
          </motion.button>
        </motion.div>
      )}

      {/* 3. Change Password Step */}
      {otpVerified && (
        <motion.form key="change-pass" onSubmit={handleChangePassword} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <div className="relative">
            <input
              ref={NewPassword}
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              className="w-full p-3 rounded-xl bg-[#1A1A1D] border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
              required
            />
            <motion.button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                whileTap={{ scale: 0.9 }}
            >
                {showPassword ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}
            </motion.button>
          </div>
          
          <input
            ref={ConfirmPassword}
            type="password"
            placeholder="Confirm New Password"
            className="w-full p-3 rounded-xl bg-[#1A1A1D] border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
            required
          />
          <motion.button
            type="submit"
            className="w-full bg-green-500 text-black font-bold py-3 rounded-xl hover:bg-green-400 transition-colors flex justify-center items-center"
            disabled={loading}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? <PulseLoader size={8} color={"#000"} /> : "Change Password"}
          </motion.button>
        </motion.form>
      )}

      <motion.button
          type="button"
          onClick={resetPasswordFlow}
          className="text-green-400 hover:text-green-300 font-medium mt-4 block text-center w-full"
          whileHover={{ x: 5 }}
      >
        Back to Sign In
      </motion.button>

    </motion.div>
  );


  // --- Main Component Render ---
  return (
    <section className="min-h-screen w-full bg-gray-950 flex items-center justify-center p-4">
      <Toaster />

      <motion.div
        className="w-[90%] max-w-7xl h-auto xl:h-[80vh] bg-black/50 backdrop-blur-3xl rounded-[3rem] shadow-2xl shadow-green-900/30 grid grid-cols-1 xl:grid-cols-2 gap-12 p-6 md:p-12 border-2 border-gray-800"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
      >
        {/* LEFT – Animated Cards Section (Hidden on Mobile) */}
        <motion.div
          className="relative hidden xl:flex flex-col items-center justify-center rounded-[2.5rem] p-10 overflow-hidden"
          style={{ 
            background: 'radial-gradient(circle at 10% 20%, #1c1c1c 0%, #0c0c0c 100%)',
          }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative Title */}
          <motion.div 
            className="absolute top-10 left-10 text-5xl font-extrabold text-green-400 tracking-wider z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
          <img src="/images/logo.png" alt="" />
          </motion.div>

          {/* Animated Card Grid */}
          <div className="grid grid-cols-2 gap-8 w-full max-w-lg">
            {cardData.map((card, index) => (
              <motion.div
                key={card.id}
                custom={card.direction}
                variants={floatingVariants}
                animate="animate"
                whileHover="hover"
                className={`${card.bg} text-white rounded-3xl p-6 h-40 flex flex-col justify-between shadow-2xl cursor-pointer transform hover:z-20`}
                style={{
                    color: card.bg.includes('lime') || card.bg.includes('yellow') ? '#000' : '#fff'
                }}
              >
                <motion.span 
                    className="text-3xl font-bold"
                    variants={cardItemVariants}
                    custom={index}
                >+</motion.span>
                <motion.p 
                    className="text-lg font-semibold"
                    variants={cardItemVariants}
                    custom={index + 0.5}
                >
                    {card.text}
                </motion.p>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            className="absolute bottom-10 right-10 text-lg text-gray-500 z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            *The Future is Green. Login Now.
          </motion.p>
        </motion.div>

        {/* RIGHT – Form Section */}
        <div className="bg-[#0B0B0E] p-6 md:p-10 rounded-[2.5rem] flex flex-col justify-center border border-gray-700 shadow-xl">
          <AnimatePresence mode="wait">
            {forgotPassword ? renderForgotPasswordForm() : renderAuthForm()}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default ToggleSignIn;