import "./Container.css";

export default function Container({ as, children, className }) {
  const Element = as;
  return <Element className={`Container ${className}`}>{children}</Element>;
}
