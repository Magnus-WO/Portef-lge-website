import "./NotFound.css";
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Button from "./../../Components/Button/Button";

export default function NotFound() {
  return (
    <Container as={"section"} className="NotFoundPage">
      <Header as={"h1"}>Siden finnes ikke</Header>
      <p>Siden du leter etter finnes ikke.</p>
      <p>
        {" "}
        Bruk navbaren nederst på skjermen til å navigere deg gjennom nettsiden.
      </p>
      <Button className="themeButton"></Button>
      <Navbar></Navbar>
    </Container>
  );
}
