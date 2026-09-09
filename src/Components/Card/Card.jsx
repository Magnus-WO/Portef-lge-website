import "./Card.css";
import Header from "../Header/Header";
import Image from "../Image/Image";
import Container from "../Container/Container";

export default function Card({
  as,
  className,
  imgSrc,
  imgAlt,
  headerAs,
  headerHeading,
  cardText,
  children,
}) {
  return (
    <Container className={`Card ${className}`} as={as}>
      <Header className={`CardHeader `} as={headerAs}>
        {headerHeading}
      </Header>
      <Image src={imgSrc} alt={imgAlt} />
      <p className="CardText">{cardText}</p>
      {children}
    </Container>
  );
}
