import React from 'react';

interface IconProps {
  className?: string;
}

const SparkleIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z"></path>
      <path d="M5 2v4"></path>
      <path d="M19 2v4"></path>
      <path d="M5 20v-4"></path>
      <path d="M19 20v-4"></path>
    </svg>
  );
};

export default SparkleIcon;
