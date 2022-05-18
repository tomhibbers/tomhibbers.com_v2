import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import ReCAPTCHA from "react-google-recaptcha";
// import React from 'react';
// import { ThemeContext } from '../../context/themeContext';
// import { ThemeContextType } from '../../@types/theme';
import { useState } from "react";

// import { ContainerSucces } from './styles'
// import { Form } from "../Form/Form";
// import { useEffect } from "react";
// import validator from "validator";
// import { useForm, ValidationError } from "@formspree/react";
// import { toast, ToastContainer } from "react-toastify";

export function Contact() {
  // const [state, handleSubmit] = useForm("myyozglw");
  // const [validEmail, setValidEmail] = useState(false);
  // const [message, setMessage] = useState("");
  const [emailText, setEmailText] = useState("###@###.com");
  const [phoneText, setPhoneText] = useState("(+27) ##-###-####");
  const [isHuman, setIsHuman] = useState(false);
  const REACT_APP_CAPTCHA_SITE_KEY: string =
    process.env.REACT_APP_CAPTCHA_SITE_KEY!;

  // function verifyEmail(email: string) {
  //   if (validator.isEmail(email)) {
  //     setValidEmail(true);
  //   } else {
  //     setValidEmail(false);
  //   }
  // }

  // useEffect(() => {
  //   if (state.succeeded) {
  //     toast.success("Email successfully sent!", {
  //       position: toast.POSITION.BOTTOM_LEFT,
  //       pauseOnFocusLoss: false,
  //       closeOnClick: true,
  //       hideProgressBar: false,
  //       toastId: "succeeded",
  //     });
  //   }
  // });
  // if (state.succeeded) {
  //   return (
  //     <ContainerSucces>
  //       <h3>Thank you for contacting me!</h3>
  //       <button
  //         onClick={() => {
  //           window.scrollTo({ top: 0, behavior: "smooth" });
  //         }}
  //       >
  //         Back to the top
  //       </button>
  //       <ToastContainer />
  //     </ContainerSucces>
  //   );
  // }
  function enableContactDetails(this: any) {
    setEmailText("tomhibbers@gmail.com");
    setPhoneText("(+27) 82-298-7183");
    setIsHuman(true);
  }
  function onClickEmail() {
    window.open("mailto:tomhibbers@gmail.com", "_blank");
  }
  function onClickPhone() {
    window.open("tel:+27822987183", "_blank");
  }

  return (
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
        <p>
          If you've seen my potential or want to talk to me, don't hesitate to
          send me a message.
        </p>
      </header>
      <div className="contacts">
        <button type="button" disabled={!isHuman} onClick={onClickEmail}>
          <img src={emailIcon} alt="Email" />
          <p>{emailText}</p>
        </button>
        <button type="button" disabled={!isHuman} onClick={onClickPhone}>
          <img src={phoneIcon} alt="Phone" />
          <p>{phoneText}</p>
        </button>
      </div>
      <form>
      {/* <form onSubmit={handleSubmit}> */}
        {/* <h2>Get in touch using the form below</h2>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value)
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          placeholder="Leave your message"
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        /> */}
        <div className="reCaptcha-Wrapper">
          <ReCAPTCHA
            sitekey={REACT_APP_CAPTCHA_SITE_KEY}
            onChange={enableContactDetails}
            theme="dark"
          ></ReCAPTCHA>
        </div>
        {/* <button
          type="submit"
          disabled={state.submitting || !validEmail || !message || !isHuman}
        >
          Send
        </button> */}
      </form>
    </Container>
  );
}
