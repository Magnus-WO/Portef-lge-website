import "./Header.css";

export default function Header({ as, className, children }) {
  const Element = as;
  return <Element className={`Header ${className}`}>{children}</Element>;
}
