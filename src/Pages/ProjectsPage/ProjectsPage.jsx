import "./ProjectsPage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Button from "../../Components/Button/Button";
import Container from "../../Components/Container/Container";
import Header from "../../Components/Header/Header";
import Card from "../../Components/Card/Card";

import projectsArray from "../../JS/projects";

export default function ProjectsPage() {
  return (
    <Container as={"main"} className={"Container projectsPageContainer"}>
      <Navbar></Navbar>
      <Header as={"h1"} className={" projectsPageHeader"}>
        Mine prosjekter
      </Header>
      <Button className="themeButton"></Button>
      <Container as={"section"} className={"projectsContainer"}>
        <ul>
          {projectsArray.map((project) => {
            return (
              <Card
                as={"li"}
                className={"projectCard"}
                headerAs={"h2"}
                headerHeading={project.name}
                imgSrc={project.img}
                imgAlt={project.alt}
                cardText={project.alt}
                key={project.id}
              >
                <a href={project.url} target="blank">
                  Gå til websiden
                </a>
              </Card>
            );
          })}
        </ul>
      </Container>
    </Container>
  );
}
