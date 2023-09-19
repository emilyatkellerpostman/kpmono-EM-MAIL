import React, { ReactNode } from 'react';
import { Column } from '@react-email/column';
import { Container } from '@react-email/container';
import { Row } from '@react-email/components';

interface FooterProps {
  copyright: ReactNode;
  chicago: ReactNode;
  address: ReactNode;
  chi2: ReactNode;
}

function Footer(props: FooterProps){
  return(
    <Container>
      <Row>
      <Column style={copy}>{props.copyright}</Column>
      <Column style={addressS}>
        <span style={chi}>{props.chicago} <br /> </span> 
        {props.address} <br /> 
        {props.chi2}
      </Column>
      </Row>
    </Container>
  );
} 

export default Footer;

const copy: React.CSSProperties = {
  color: "#000000",
  fontWeight: "400",
  fontSize: "13px",
  width: "50%"
}

const chi: React.CSSProperties = {
  color: "#000000",
  fontWeight: "700",
  fontSize: "13px"
}

const addressS: React.CSSProperties = {
  color: "#000000",
  fontWeight: "400",
  fontSize: "13px",
  textAlign: "right",
  width: "50%"
}
