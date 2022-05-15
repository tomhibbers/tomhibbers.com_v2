import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react'
// import React from 'react';
// import { ThemeContext } from '../../context/themeContext';
// import { ThemeContextType } from '../../@types/theme';

export function Contact(){
  const [email, setEmail] = useState('#');
  const [phone, setPhone] = useState('');
  const [isHuman, setHuman] = useState(false);
  const REACT_APP_CAPTCHA_SITE_KEY: string = process.env.REACT_APP_CAPTCHA_SITE_KEY!;
  // const { theme } = React.useContext(ThemeContext) as ThemeContextType;
  // const recaptchaRef = React.createRef<ReCAPTCHA>();

  // React.useEffect(() => {
  //   if(recaptchaRef.current){
  //     recaptchaRef.current.reset();
  //   }
  // }, [theme]);
  
  function enableContactDetails(this: any) {
    setEmail("mailto:tomhibbers@gmail.com");
    setPhone("tel:+27822987183");
    setHuman(true);
  };

  return(
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
        <p>If you've seen my potential or want to talk to me, don't hesitate to send me a message.</p>
      </header>
      <div className="contacts">
        <a href={email} target="_blank" rel="noreferrer">
          <button
            type="button"
            disabled={!isHuman}
          >
            <img src={emailIcon} alt="Email" />
          </button>
        </a>
        <a href={phone} target="_blank" rel="noreferrer">
          <button
            type="button"
            disabled={!isHuman}
          >
            <img src={phoneIcon} alt="Phone" />
          </button>
        </a>
        <ReCAPTCHA 
            sitekey={REACT_APP_CAPTCHA_SITE_KEY}
            onChange={enableContactDetails}
            theme='dark'
            // size="compact"
        ></ReCAPTCHA>
      </div>
        
      {/* <Form></Form> */}
    </Container>
  )
}