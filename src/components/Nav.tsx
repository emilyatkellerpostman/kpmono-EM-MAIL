import React from "react";
import { Container } from "@react-email/container";
import { Img } from "@react-email/img";
import { Column } from "@react-email/column";
import { Row } from "@react-email/row";
import { Link } from "@react-email/link";

interface NavProps {
  image: string;
}

function Nav(props: NavProps) {
  return (
    <Container style={navContainer}>
      <Row className="custom-row">
        <Column className="half-column">
          <Img
            src={require(`./images/kp-${props.image}.png`)}
            alt="kp-logo"
            className="ml-5 p-1"
          />
        </Column>
      </Row>
    </Container>
  );
}

export default Nav;

const navContainer = {
  backgroundColor: "#0D1014",
  padding: "0.8em"
}
