import React from 'react';

interface IconProps {
  className?: string;
}

const PinterestIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12.52.28a12 12 0 0 0-8.9 21.43 12 12 0 0 0 16.3-4.13c.2-.5.3-1 .4-1.5a12.1 12.1 0 0 0-7.8-15.8zM12 12a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"></path>
        <path d="M13.8,8.2a1,1,0,0,0-1.6,1.2,4,4,0,0,0-1.2,3.1,1,1,0,0,0,2,0,2,2,0,0,1,2-2,1,1,0,0,0,0-2,4,4,0,0,0-1.2-0.3z"></path>
    </svg>
  );
};

export default PinterestIcon;
