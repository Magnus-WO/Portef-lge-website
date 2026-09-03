import "./Container.css";

export default function Container({ as, children, className, data }) {
  const Element = as;
  return (
    <Element className={`Container ${className}`} data-theme={data}>
      {children}
    </Element>
  );
}
