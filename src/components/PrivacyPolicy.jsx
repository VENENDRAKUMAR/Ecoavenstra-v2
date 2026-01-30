import React from 'react';
import { motion } from 'framer-motion';

const LegalLayout = ({ title, lastUpdated, children }) => (
  <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 border-b border-white/10 pb-10"
      >
        <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px]">Legal Documentation</span>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mt-4 uppercase">{title}</h1>
        <p className="text-gray-500 mt-6 font-medium tracking-widest text-[10px] uppercase">Last Updated: {lastUpdated}</p>
      </motion.div>
      
      <div className="prose prose-invert prose-blue max-w-none space-y-12 text-gray-400 font-medium leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

// --- CONTENT FOR PRIVACY POLICY ---
export const PrivacyPolicy = () => (
  <LegalLayout title="Privacy Policy" lastUpdated="January 2026">
    <section>
      <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">01. Data Collection</h2>
      <p>We collect information that you provide directly to us, including name, email, and company details when you initiate a project or use our HR portal. We use industry-standard encryption to protect this data.</p>
    </section>
    <section>
      <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">02. How We Use Information</h2>
      <p>Your data allows us to provide high-performance digital services, manage HR workflows, and communicate project updates. We do not sell your personal information to third parties.</p>
    </section>
    <section>
      <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">03. Security Standards</h2>
      <p>Ecoavenstra employs SSL encryption and SOC2-compliant data handling practices to ensure your digital assets and identity remain secure at all times.</p>
    </section>
  </LegalLayout>
);

// --- CONTENT FOR TERMS & CONDITIONS ---
export const TermsAndConditions = () => (
  <LegalLayout title="Terms of Service" lastUpdated="January 2026">
    <section>
      <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">01. Service Agreement</h2>
      <p>By engaging Ecoavenstra HR Infotech Pvt Ltd, you agree to our project delivery timelines and payment milestones. All digital products remain the property of the creator until final payment is settled.</p>
    </section>
    <section>
      <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">02. Intellectual Property</h2>
      <p>Unless otherwise agreed, Ecoavenstra retains the rights to use non-confidential project snippets for portfolio and marketing purposes.</p>
    </section>
    <section>
      <h2 className="text-white text-2xl font-bold mb-4 uppercase tracking-tight">03. Limitation of Liability</h2>
      <p>Ecoavenstra is not liable for indirect or consequential damages arising from service downtime or external API failures used within your custom software.</p>
    </section>
  </LegalLayout>
);