import React, { ReactNode } from "react";
import { Text, Section } from "@react-email/components";

interface ContactProps {
  call: ReactNode;
  contact: ReactNode;
}

function Contact(props: ContactProps) {
  return (
    <Section style={SectionContainer.containerC}>
      <br />
      <Text style={ContactStyles.text}>
        {props.call} <span style={ContactSpan}>{props.contact} <br /> <br /></span>
      </Text>
    </Section>
  );
}

export default Contact;

const ContactStyles = {
  text: {
    color: "#1F61DD",
    fontWeight: 800,
    fontSize: "1.5rem",
    fontFamily: "Montserrat, sans-serif"
  }
} as const;

const ContactSpan = {
  color: "#000000",
  fontWeight: 800,
  textDecoration: "underline"
} as const;

const SectionContainer = {
  containerC: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px",
  }
} as const;
