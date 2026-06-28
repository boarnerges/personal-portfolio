import React from "react";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
};

export function H1({ children, className, ...props }: HeadingProps) {
  return <h1 className={`text-4xl md:text-5xl font-bold font-heading ${className || ""}`} {...props}>{children}</h1>;
}

export function H2({ children, className, ...props }: HeadingProps) {
  return <h2 className={`text-3xl md:text-4xl font-bold font-heading ${className || ""}`} {...props}>{children}</h2>;
}

export function H3({ children, className, ...props }: HeadingProps) {
  return <h3 className={`text-2xl font-semibold font-heading ${className || ""}`} {...props}>{children}</h3>;
}

export function H4({ children, className, ...props }: HeadingProps) {
  return <h4 className={`text-xl font-semibold font-heading ${className || ""}`} {...props}>{children}</h4>;
}

export function H5({ children, className, ...props }: HeadingProps) {
  return <h5 className={`text-lg font-medium font-heading ${className || ""}`} {...props}>{children}</h5>;
}

export function H6({ children, className, ...props }: HeadingProps) {
  return <h6 className={`text-base font-medium font-heading ${className || ""}`} {...props}>{children}</h6>;
}

export function Body({ children, className, ...props }: HeadingProps) {
  return <p className={`text-base leading-relaxed ${className || ""}`} {...props}>{children}</p>;
}

export function Small({ children, className, ...props }: HeadingProps) {
  return <p className={`text-sm leading-relaxed ${className || ""}`} {...props}>{children}</p>;
}

export function Caption({ children, className, ...props }: HeadingProps) {
  return <span className={`text-xs uppercase tracking-wider font-semibold ${className || ""}`} {...props}>{children}</span>;
}
