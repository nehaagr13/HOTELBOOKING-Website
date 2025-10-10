import React from 'react'
import { FOOTER_SECTION, SOCIAL_LINKS } from "@/config/app.config";
import dayjs from 'dayjs';
import Icon from "@/components/ui/icon";


const Footer = () => {
  return (
    <div className='bg-secondary'>
      <footer className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 py-8 gap-6'>
         {FOOTER_SECTION.map((section, index) => (
          <div key={index} className='=flex flex-col gap-3'>
            <h3 className='text-sm font-bold'>{section.title}</h3>
            
            <ul className='flex flex-col gap-1'>
              {section.links.map((link, index) => (
                <li key={index}>
                 <a href={link.href} className='text-sm hover:underline'>{link.text}</a>
                </li>
              ))}
            </ul>
            </div>
         ))}
        </div>
      </footer>
      <div className='bg-brand'>
        <div className='flex flex-col flex-wrap items-center justify-center gap-4 p-4 mx-auto sm:flex-row sm:justify-between max-w-7xl'>
          <div className='flex items-center justify-center gap-4'>
            {SOCIAL_LINKS.map((link, index) => (
              <a href={link.href} key={index} className='text-slate-100 hover:text-slate-300 transition-colors'>
                <Icon icon={link.icon} size="18" />
              </a>
            ))}
          </div>
          <div>
            <p className="text-sm text-center text-white">
              Copyright &copy;{' '}
              {`${dayjs().year()} Booking.com™. All rights reserved.`}
            </p>
          </div>
        </div>

      </div>
      </div>
  );
};

export default Footer;