import "./Image.css";
export default function Image({ className, src, alt }) {
  return <img src={src} alt={alt} className={`Image ${className}`} />;
}
