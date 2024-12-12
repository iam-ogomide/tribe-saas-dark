import Insta from '../assets/icons/insta.svg';
import XS from '../assets/icons/x-social.svg';
import Tiktok from '../assets/icons/tiktok.svg';
import Youtube from '../assets/icons/youtube.svg';


export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <div className="text-center">© 2024 Your Company, Inc. All rights reserved</div>
          <ul className="flex justify-center gap-2.5">
            <li className=""><Insta /></li>
            <li className=""><XS /></li>
            <li className=""><Tiktok /></li>
            <li className=""><Youtube /></li>
          </ul>
        </div>
      </div> 
    </footer>
  );
};
