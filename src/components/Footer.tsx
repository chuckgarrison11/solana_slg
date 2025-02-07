import XSocial from '../assets/icons/x-social.svg'

export const Footer = () => {
  return (
    <footer className='py-5 bg-black text-white text-white/60 border-t border-white/20'>
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">
            2025 Solana League Gaming, Inc. All Rights Reserved
          </div>
          <ul className='flex justify-center gap-2.5'>
            <li><XSocial /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
