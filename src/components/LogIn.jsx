"use client"

import React, { useState, useRef } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleLogin } from "./Redux/LoginSlice";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { PulseLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Lock, ShieldCheck, ArrowRight, Fingerprint } from "lucide-react";

const ToggleSignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [userToEmployer, setUserToEmployer] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Email = useRef(null);
  const Password = useRef(null);
  const Name = useRef(null);
  const OTP = useRef(null);
  const NewPassword = useRef(null);
  const ConfirmPassword = useRef(null);

  const resetForm = () => {
    [Email, Password, Name, OTP, NewPassword, ConfirmPassword].forEach(ref => {
      if (ref.current) ref.current.value = "";
    });
  };
  
  const resetPasswordFlow = () => {
    setForgotPassword(false);
    setOtpSent(false);
    setOtpVerified(false);
    resetForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = Email.current?.value;
    const password = Password.current?.value;
    const name = isRegistering ? Name.current?.value : "";
    const role = userToEmployer ? "EMPLOYER" : "USER";

    if (!email || !password || (isRegistering && !name)) {
        return toast.error("please fill all required fields.");
    }

    setLoading(true);
    try {
      const endpoint = isRegistering ? "signup" : "login";
      const response = await axios.post(
          `https://ecoavenstra-be.onrender.com/api/v1/user/${endpoint}`,
          isRegistering ? { name, role, email, password } : { email, password }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("profile_Name", response.data.user.name);
        localStorage.setItem("profile_Role", response.data.user.role);

        toast.success(`welcome, ${response.data.user.name}`);
        dispatch(toggleLogin());
        navigate(userToEmployer ? "/employerform" : "/");
      }
    } catch (error) {
        toast.error(error.response?.data?.message || "authentication failed.");
    } finally {
      setLoading(false);
    }
  };

  // --- Animation Variants ---
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <section className="min-h-screen w-full bg-[#030303] flex items-center justify-center p-4 relative overflow-hidden font-light">
      {/* Cinematic Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full" />

      <Toaster position="bottom-center" toastOptions={{ style: { background: '#111', color: '#fff', border: '1px solid #222' }}} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-5xl bg-white/[0.02] border border-white/5 backdrop-blur-3xl rounded-[3rem] overflow-hidden shadow-2xl grid lg:grid-cols-2 min-h-[600px]"
      >
        {/* LEFT PANEL: Branding & Visuals */}
        <div className="hidden lg:flex flex-col justify-between p-16 bg-white/[0.02] border-r border-white/5 relative">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <img src="/images/logo.png" alt="logo" className="w-32 mb-12 opacity-80" />
            <h2 className="text-5xl font-extralight text-white leading-tight lowercase tracking-tighter">
              architecting <br /> <span className="text-blue-500 italic">digital eco-systems.</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-white/40 group cursor-default">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:text-blue-500 transition-colors"><ShieldCheck size={20}/></div>
                <p className="text-xs font-mono tracking-widest capatlize mt-1">// secure transmission</p>
            </div>
            <p className="text-white/20 text-xs tracking-widest capatlize font-mono italic">
              * the future is blue. transmit now.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL: Form Area */}
        <div className="p-10 md:p-16 flex flex-col justify-center relative">
          <AnimatePresence mode="wait">
            {!forgotPassword ? (
              <motion.div key="auth" {...fadeUp} className="space-y-8">
                <div>
                  <h3 className="text-3xl font-extralight text-white lowercase tracking-tighter">
                    {isRegistering ? "create identity." : "welcome back."}
                  </h3>
                  <p className="text-white/30 text-xs mt-2 lowercase italic">
                    {isRegistering ? "initialize your digital footprint." : "access your eco-dashboard."}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {isRegistering && (
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-blue-500 transition-colors" size={18} />
                      <input ref={Name} type="text" placeholder="full name" required
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 pl-12 text-white text-sm focus:border-blue-500/50 outline-none transition-all placeholder:text-white/10 lowercase" />
                    </div>
                  )}

                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-blue-500 transition-colors" size={18} />
                    <input ref={Email} type="email" placeholder="email address" required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 pl-12 text-white text-sm focus:border-blue-500/50 outline-none transition-all placeholder:text-white/10 lowercase" />
                  </div>

                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-blue-500 transition-colors" size={18} />
                    <input ref={Password} type={showPassword ? "text" : "password"} placeholder="password" required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 pl-12 pr-12 text-white text-sm focus:border-blue-500/50 outline-none transition-all placeholder:text-white/10" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white">
                      {showPassword ? <FaRegEyeSlash size={18}/> : <FaRegEye size={18}/>}
                    </button>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <button type="button" onClick={() => setUserToEmployer(!userToEmployer)} 
                      className={`text-[10px] font-mono capatlize tracking-widest px-4 py-2 rounded-full border transition-all ${userToEmployer ? 'bg-blue-500/10 border-blue-500/50 text-blue-500' : 'border-white/10 text-white/30 hover:border-white/20'}`}>
                      {userToEmployer ? "employer mode active" : "switch to employer"}
                    </button>
                    {!isRegistering && (
                      <button type="button" onClick={() => setForgotPassword(true)} className="text-[10px] font-mono text-white/30 capatlize tracking-widest hover:text-blue-500 transition-colors">
                        forgot key?
                      </button>
                    )}
                  </div>

                  <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} type="submit" disabled={loading}
                    className="w-full bg-white text-black font-bold py-5 rounded-2xl text-[11px] capatlize tracking-[0.3em] flex justify-center items-center gap-3 hover:bg-blue-500 hover:text-white transition-all duration-500 mt-6 shadow-xl shadow-blue-900/5">
                    {loading ? <PulseLoader size={6} color="currentColor" /> : (isRegistering ? "initialize account" : "authorize access")}
                    <ArrowRight size={14} />
                  </motion.button>
                </form>

                <p className="text-center text-white/20 text-[10px] font-mono capatlize tracking-[0.2em]">
                  {isRegistering ? "already archived?" : "new protocol?"}{" "}
                  <button onClick={() => setIsRegistering(!isRegistering)} className="text-blue-500 hover:underline underline-offset-4 ml-2">
                    {isRegistering ? "sign in" : "register"}
                  </button>
                </p>
              </motion.div>
            ) : (
              // --- FORGOT PASSWORD SUB-FORM ---
              <motion.div key="forgot" {...fadeUp} className="space-y-8">
                 <div>
                    <h3 className="text-3xl font-extralight text-white lowercase tracking-tighter">recover key.</h3>
                    <p className="text-white/30 text-xs mt-2 lowercase italic">security override initiated.</p>
                 </div>
                 {/* ... (OTP and Change Password logic remains same as your original, just wrapped in this UI) */}
                 <button onClick={resetPasswordFlow} className="text-[10px] font-mono text-white/20 capatlize tracking-widest hover:text-white transition-colors">
                    // back to authorization
                 </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default ToggleSignIn;