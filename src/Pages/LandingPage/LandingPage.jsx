import "./LandingPage.css";
import Container from "../../Components/Container/Container";
import Image from "../../Components/Image/Image";
import Header from "../../Components/Header/Header";

import profilbilde from "../../assets/images/profilbilde-portefølge.jpg";
import notepadMinusImage from "../../assets/images/notepadMinusScreenshot.png";

export default function LandingPage() {
  return (
    <Container as="main" className="landingPageContainer">
      <Header as={"h1"} className={"landingPageHeader"}>
        Magnus sin portefølge
      </Header>
      <Container as="section" className="landingPageInfoSection">
        <Container as="div" className={"infoContainer"}>
          <Image
            src={profilbilde}
            alt={`Bilde av meg som spiller gitar på scene`}
            className={`landingPageProfileImage`}
          ></Image>
          <Container as={"div"}>
            <Header as="h2">Hvem er jeg?</Header>
            <p className="landingPageInfoText">
              På fritiden spiller jeg gitar i metallbandet Diavola, og i
              pop-prosjektet Erica. Helgene går ofte med til å spille konserter
              med disse, noe jeg synes er skikkelig stas. Ellers er jeg glad i å
              holde meg aktiv, og prøver å trene 6 ganger i uka. Jeg er glad i å
              spille videospill, og har den siste tida spilt mye OverWatch og
              Cyberpunk2077.
            </p>
          </Container>
        </Container>
        <Container as="div" className={"infoContainer"}>
          <Container as={"div"}>
            <Header as="h2">Hva er dette?</Header>
            <p className="landingPageInfoText">
              Dette er en side hvor man kan se gjennom min portefølge.
              Portefølgen består for det meste av apper og nettsider jeg har
              laget i forbindelse med studie, men det er og noen egne prosjekter
              her. Prosjektene er merket med et merke for å vise om de er laget
              i forbindelse med studie eller om det er egne prosjekter.
            </p>
          </Container>
          <Image
            src={notepadMinusImage}
            alt={"et bilde av en notepad jeg har bygget tidligere"}
            className={"notepadImage"}
          ></Image>
        </Container>
      </Container>
    </Container>
  );
}
