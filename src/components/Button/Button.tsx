import React from 'react';
import './Button.css';

export type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  backgroundColor?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  size = 'medium',
  color,
  backgroundColor,
}) => {
  const className = `btn ${variant} ${size}`;

  return (
    <button
      className={className}
      onClick={onClick}
      style={{ color: color || undefined , backgroundColor: backgroundColor || undefined }}
    >
      {label}
    </button>
  );
};

export default Button;
