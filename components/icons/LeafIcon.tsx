import React from 'react';

interface IconProps {
  className?: string;
}

const LeafIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M11 20A7 7 0 0 1 4 13V8a5 5 0 0 1 5-5h1a5 5 0 0 1 5 5v1"></path>
      <path d="M11 20v-9"></path>
      <path d="M11 20a7 7 0 0 0 7-7v-1a5 5 0 0 0-5-5h-1"></path>
    </svg>
  );
};

export default LeafIcon;
