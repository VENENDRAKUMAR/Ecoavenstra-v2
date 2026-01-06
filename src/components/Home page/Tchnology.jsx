import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Technology.css';

import {
  LayoutDashboard, Server, Cloud, Smartphone, Apple, GitBranch
} from 'lucide-react';

const data = [
  {
    title: 'Frontend',
    icon: <LayoutDashboard className="text-blue-400 w-6 h-6" />,
    categories: [
      { subtitle: 'Technologies', items: 'HTML5, CSS3,Tailwind css, Javascript, Typescript, EJS' },
      { subtitle: 'Frameworks & Tools', items: 'Bootstrap, Bootstrap, ReactJS, Redux, WordPress, Reactstrap, ShadCn ' }
    ]
  },
  {
    title: 'Backend',
    icon: <Server className="text-green-400 w-6 h-6" />,
    categories: [
      { subtitle: 'Technologies', items: 'NodeJS, Express JS, MongoDB, PostgreSQL, GraphQL,Supabase, Firebase' },
      { subtitle: 'Frameworks & Tools', items: 'Nodemailer, CORS, JWT, NextJs,Microservices' }
    ]
  },
  {
    title: 'DevOps',
    icon: <GitBranch className="text-purple-400 w-6 h-6" />,
    categories: [
      { subtitle: 'CI/CD', items: 'Github Actions, Gitlab Pipelines, Azure Pipelines, Jenkins' },
      { subtitle: 'Monitoring & Logging', items: 'Prometheus, Grafana, ELK Stack' }
    ]
  },
  {
    title: 'Cloud',
    icon: <Cloud className="text-yellow-400 w-6 h-6" />,
    categories: [
      { subtitle: 'Technologies', items: 'AWS, Azure, GCP, Vercel, Hostinger, Netlify' },
      { subtitle: 'Libraries', items: 'Serverless, AWS CLI' }
    ]
  },
  // {
  //   title: 'Android',
  //   icon: <Smartphone className="text-green-500 w-6 h-6" />,
  //   categories: [
  //     { subtitle: 'Languages', items: 'Kotlin, Java, JavaScript, Typescript' },
  //     { subtitle: 'Frameworks & Tools', items: 'Native Android, React Native, Expo, Android Studio, Push Notifications, Location Services, Google Places API, Google Fit & Biometric Authentication' }
  //   ]
  // },
  // {
  //   title: 'iOS',
  //   icon: <Apple className="text-gray-300 w-6 h-6" />,
  //   categories: [
  //     { subtitle: 'Languages', items: 'Swift, Objective-C, JavaScript, Typescript' },
  //     { subtitle: 'Frameworks & Tools', items: 'Native iOS, React Native, Expo, Xcode, Push Notifications, Location Services, Google Places API, Apple Health APIs, Biometric Authentication' }
  //   ]
  // }
];

const Technology = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="px-4 py-16 ">
      <div data-aos="fade-up" className="text-white text-3xl sm:text-5xl font-semibold text-center mb-12">
        Technologies We Master
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {data.map((item, index) => (
          <div key={index} data-aos="flip-right" className="cyber-container noselect">
            <div className="cyber-canvas">
              <div className="cyber-card">
                <div className="card-content">
                  <div className="card-glare"></div>
                  <div className="cyber-lines">
                    <span></span><span></span><span></span><span></span>
                  </div>
                  <div className="title flex items-center justify-center gap-2">
                    {item.icon}
                    {item.title}
                  </div>
                  <div className="tech-content">
                    {item.categories.map((category, idx) => (
                      <div key={idx} className="category-content">
                        <div className="subtitle">{category.subtitle}</div>
                        <div className="items">{category.items}</div>
                      </div>
                    ))}
                  </div>
                  <div className="glowing-elements">
                    <div className="glow-1"></div>
                    <div className="glow-2"></div>
                    <div className="glow-3"></div>
                  </div>
                  <div className="card-particles">
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                  </div>
                  <div className="corner-elements">
                    <span></span><span></span><span></span><span></span>
                  </div>
                  <div className="scan-line"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
