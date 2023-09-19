import React from 'react'
import CustomButton from './Button';
import Container1 from './Container1';
import Container2 from './Container2';
import Footer from './Footer';
import Nav from './Nav';
import Contact from './Contact';
import { Html, Body } from '@react-email/components';

export const TemplateSet = () => {
  return (
    <Html>
    <Body>
      <Nav 
        image="logo"   />

      <Container1 
        image="zina"
        title= "We're ready to start fighting "
        you="FOR YOU!"
        text="Tell us more about your situation and a member of our team will
        contact you soon."
        title2="THANK YOU SO MUCH FOR BELIEVING IN"
        us="US!"
        text2="Facing a formidable opponent after an injury?"
        text23 ="Keller Postman stands by your side with a powerhouse team of attorneys, case managers, and tech experts. With a proven track record representing over a million clients, we're committed to outworking the opposition for justice—every time."
        text34="Contact us now for a complimentary case evaluation."
        button="FREE CASE EVALUATION"
      />

      <Container2 
        meeting1="Ready to Get Started?"
        meeting2="Schedule a Meeting "
        meeting3="Whether you need legal advice, a dedicated case manager, or tech expertise, our team is here to help. Take the first step towards resolving your concerns. Click the button below to book a meeting with our experienced professionals."
        now="Now!"
      />

      <CustomButton 
        button2="SCHEDULE A MEETING"
      />

      <Contact
        call="Call us at"
        contact=" 872-264-6677"
      />

      <Footer 
        copyright="© 2023 Keller Postman LLC. All rights reserved."
        chicago="Chicago, IL"
        address="
        150 N. Riverside Plaza, Suite 4100."
        chi2="Chicago, IL 60606"
      />
    </Body>
  </Html>
  )
}
