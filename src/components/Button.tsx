import React, { ReactNode, CSSProperties } from 'react';
import { Link, Section } from '@react-email/components';

interface CustomButtonProps {
  button2: ReactNode;
}

function CustomButton(props: CustomButtonProps){
  return (
    <Section style={buttonSection}>
      <Link style={buttonCustomized}>
        {props.button2}
      </Link>
    </Section>
  );
}

export default CustomButton;

const buttonSection: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const buttonCustomized: CSSProperties = {
  fontWeight: 700,
  color: "#FFFFFF",
  display: "block",
  textAlign: "center",
  backgroundColor: "#183873",
  padding: "1em"
};
