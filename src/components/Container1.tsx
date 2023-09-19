import React, { ReactNode } from "react";
import { Section } from "@react-email/section";
import { Column } from "@react-email/column";
import { Img } from "@react-email/img";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Link } from "@react-email/link";
import { Row } from "@react-email/row";

interface Container1Props {
  image: string;
  title: ReactNode;
  you: ReactNode;
  text: ReactNode;
  title2: ReactNode;
  us: ReactNode;
  text2: ReactNode;
  text23: ReactNode;
  text34: ReactNode;
  button: ReactNode;
}

function Container1(props: Container1Props) {
  return (
    <Section style={customContainer}>
      <Row style={rowOne}>
        <Column style={columnOne}>
          <Img
            src={require(`./images/kp-${props.image}.png`)}
            alt="kp-zina"
            style={kpImage}
          />
          <Section style={paddingStyle}>
            <Heading style={headingOne}>
              <br /> {props.title} <span style={headingOneHalf}>{props.you} <br /></span>
            </Heading>
            <Text style={headingText}>
              <br /> {props.text}
            </Text>
          </Section>
        </Column>
        <Column style={columnTwo}>
          <Heading style={headingTwo}>
            {props.title2} <span style={headingTwoHalf}>{props.us}</span>
          </Heading>
          <Text style={headingTextwo}>
            {props.text2} <br /> <br /> {props.text23} <br /> <br /> {props.text34} <br /> <br />
          </Text>
          <Link style={buttonHeading} href="https://www.google.com">
            {props.button} <br />{" "}
          </Link>{" "}
          <br />
        </Column>
      </Row>
    </Section>
  );
}

export default Container1;

const paddingStyle: React.CSSProperties = {
  padding: "1em",
  display: "flex"
};

const customContainer: React.CSSProperties = {
  display: "flex",
  width: "100%",
  padding: "1em",
  justifyContent: "center"
};

const rowOne: React.CSSProperties = {
  width: "550px",
  margin: "0 auto",
  padding: "1em",
  marginTop: "1em"
};

const columnOne: React.CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "column"
  // padding: "1em"
};

const columnTwo: React.CSSProperties = {
  width: "60%",
  backgroundColor: "#0A1D40",
  padding: "2em"
};

const kpImage: React.CSSProperties = {
  objectFit: "cover",
  margin: "0",
  width: "15em",
  height: "20em"
};

const headingOne: React.CSSProperties = {
  fontSize: "1.5em",
  fontWeight: 800,
  lineHeight: "1.2em",
  marginBottom: "1em"
};

const headingOneHalf: React.CSSProperties = {
  borderBottom: "5px solid #20CE9C"
};

const headingText: React.CSSProperties = {
  fontWeight: 400,
  paddingRight: "20px",
  fontSize: "16px"
};

const headingTwo: React.CSSProperties = {
  color: "#FFFFFF",
  fontWeight: 700,
  fontSize: "2.1em",
  lineHeight: "1.2em",
  marginBottom: "1em"
};

const headingTwoHalf: React.CSSProperties = {
  borderBottom: "5px solid #20CE9C"
};

const headingTextwo: React.CSSProperties = {
  color: "#FFFFFF",
  marginBottom: "2em",
  fontWeight: 500
};

const buttonHeading: React.CSSProperties = {
  backgroundColor: "#1F61DD",
  color: "#FFFFFF",
  fontWeight: 700,
  padding: "1em"
};
