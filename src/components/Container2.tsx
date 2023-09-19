import React from 'react';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';

interface Container2Props {
  meeting1: string;
  meeting2: string;
  now: string;
  meeting3: string;
}

function Container2(props: Container2Props){
  return (
    <Section style={sectionContainer2}>
      <Text style={textOne}>{props.meeting1}</Text>
      <Text style={textTwo}>
        {props.meeting2} <span style={textTwoExtra}>{props.now} <br /> </span>
      </Text>
      <Text style={textThree}><br />{props.meeting3}</Text>
    </Section>
  );
}

export default Container2;

const sectionContainer2: React.CSSProperties = {
  backgroundColor: "#DFDCDC",
  padding: "1em 2.5em",
  width: "520px",
  display: "flex",
  marginBottom: "1em"
};

const textOne: React.CSSProperties = {
  fontWeight: 800,
  lineHeight: "1em"
};

const textTwo: React.CSSProperties = {
  fontWeight: 400,
  lineHeight: ".1em"
};

const textTwoExtra: React.CSSProperties = {
  color: "#1F61DD",
  fontWeight: 700,
  lineHeight: ".1em"
};

const textThree: React.CSSProperties = {
  fontWeight: 400
};
