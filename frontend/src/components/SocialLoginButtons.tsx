import React from 'react';
import '../styles/SocialLoginButtons.css';

const SocialLoginButtons: React.FC = () => {
  return (
    <div className="social-login">
      <button className="social-button google">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path d="M12 8V16" />
          <path d="M8 12H16" />
        </svg>
      </button>
      <button className="social-button apple">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 3C14.5 3 13 5.5 13 8H7.5C6.7 8 6 8.7 6 9.5V20.5C6 21.3 6.7 22 7.5 22H16.5C17.3 22 18 21.3 18 20.5V9.5C18 9.1 17.9 8.7 17.6 8.4C17.3 8.1 17 8 16.5 8H16V4C16 3.4 16.4 3 17 3H18Z" />
        </svg>
      </button>
      <button className="social-button facebook">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      </button>
    </div>
  );
};

export default SocialLoginButtons;