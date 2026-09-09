import "./Container.css";

export default function Container({ as, children, className = "Container" }) {
  const Element = as;
  return <Element className={` ${className}`}>{children}</Element>;
}
