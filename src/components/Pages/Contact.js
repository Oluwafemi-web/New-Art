import { useState, useEffect, useContext } from "react";
import SanityContext from "../Context/sanity-context";
import LanguageContext from "../Context/language-context";
import useInput from "../../hooks/use-input";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../css/bootstrap.min.css";
import "../../css/fancybox.min.css";
import "../../css/odometer.min.css";

import "../../css/style.css";

import sanityClient from "../../client";
// import UI components
import Header from "../UI/Header";
import { PortableText } from "@portabletext/react";
const MySwal = withReactContent(Swal);

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => {
  return value.trim().length > 5 && value.includes("@");
};
export default function Contact() {
  const [contactHeader, setContactHeader] = useState(null);
  const [contactData, setContactData] = useState(null);

  const sanityCtx = useContext(SanityContext);
  const ctx = useContext(LanguageContext);

  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetname,
  } = useInput(isNotEmpty);
  const {
    value: messageValue,
    isValid: messageIsValid,
    hasError: messageError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetmessage,
  } = useInput(isNotEmpty);
  const {
    value: numberValue,
    isValid: numberIsValid,
    hasError: numberError,
    valueChangeHandler: numberChangeHandler,
    inputBlurHandler: numberBlurHandler,
    reset: resetnumber,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemail,
  } = useInput(isEmail);

  let formIsValid = false;
  if (nameIsValid && messageIsValid && emailIsValid && numberIsValid) {
    formIsValid = true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nameIsValid && messageIsValid && emailIsValid && numberIsValid) {
      const formData = new FormData();
      formData.append("name", nameValue);
      formData.append("email", emailValue);
      formData.append("number", numberValue);
      formData.append("message", messageValue);

      // Send form data to the server
      try {
        const response = await fetch("contact.php", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          if (data.status === "success") {
            MySwal.fire({
              icon: "success",
              title: "Success",
              text: data.message,
              timer: 1500,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: data.message,
            });
          }
        } else {
          // Show error message to the user
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Form submission failed",
          });
        }
        resetemail();
        resetnumber();
        resetname();
        resetmessage();
      } catch (error) {
        console.error("Form submission failed", error);
      }
    } else {
      return;
    }
    // Perform form validation if needed

    // Send form data to the server
  };

  const handleSanityLoaded = () => {
    sanityCtx.changeState(true);
  };
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "contactheader" && language == $language]{
           title,
           description,
           image{
            asset->{
              _id,
              url
            }
          },
          _translations[] {
            value->{
              title,
              description,
              image{
               asset->{
                 _id,
                 url
               }
             }
            }
         }
        }`,
        { language: ctx.languageData }
      )
      .then((data) => setContactHeader(data))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "contacts" && language == $language]{
           heading,
           number,
           enquiry,
           enquiry2,
          _translations[] {
            value->{
              heading,
              number,
              enquiry,
              enquiry2,
            }
         }
        }`,
        { language: ctx.languageData }
      )
      .then((data) => setContactData(data[0]))
      .catch(console.error);
  }, [ctx.languageData]);

  if (!contactHeader || !contactData) {
    return sanityCtx.changeState(false);
  } else {
    handleSanityLoaded();
  }
  return (
    <>
      {contactHeader &&
        contactHeader.map((item, index) => (
          <>
            <Header
              title={item.title}
              description={item.description}
              background={item.image.asset.url}
              key={index}
              color={"#E5F9AF"}
            />
            <section className="content-section" data-background="#fffbf7">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div className="section-title text-center">
                      <PortableText value={contactData.heading} />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="contact-box">
                      <PortableText value={contactData.number} />
                    </div>
                    <div className="contact-box">
                      <PortableText value={contactData.enquiry} />
                    </div>
                    <div className="contact-box">
                      <PortableText value={contactData.enquiry2} />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <form
                      className="contact-form"
                      method="post"
                      onSubmit={handleSubmit}
                    >
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder={`${
                            ctx.languageData === "it"
                              ? "Nome e cognome"
                              : "Full Name"
                          }`}
                          onChange={nameChangeHandler}
                          defaultValue={nameValue}
                          onBlur={nameBlurHandler}
                        />
                        {nameError && (
                          <p className="error-text">{`${
                            ctx.languageData === "it"
                              ? "Il nome non può essere vuoto!"
                              : "Name cannot be empty!"
                          }`}</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder={`${
                            ctx.languageData === "it"
                              ? "Indirizzo e-mail"
                              : "Email Address"
                          }`}
                          onChange={emailChangeHandler}
                          defaultValue={emailValue}
                          onBlur={emailBlurHandler}
                        />
                        {emailError && (
                          <p className="error-text">{`${
                            ctx.languageData === "it"
                              ? "Inserisci un'e-mail valida!"
                              : "Enter a valid email!"
                          }`}</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder={`${
                            ctx.languageData === "it"
                              ? "Numero di telefono"
                              : "Phone Number"
                          }`}
                          onChange={numberChangeHandler}
                          onBlur={numberBlurHandler}
                          defaultValue={numberValue}
                        />
                        {numberError && (
                          <p className="error-text">{`${
                            ctx.languageData === "it"
                              ? "Inserisci un numero valido"
                              : "Enter a valid number!"
                          }`}</p>
                        )}
                      </div>
                      <div className="mb-3">
                        <textarea
                          placeholder={`${
                            ctx.languageData === "it"
                              ? "Il tuo messaggio"
                              : "Your Message"
                          }`}
                          defaultValue={messageValue}
                          onChange={messageChangeHandler}
                          onBlur={messageBlurHandler}
                        />
                        {messageError && (
                          <p className="error-text">{`${
                            ctx.languageData === "it"
                              ? "Il messaggio non può essere vuoto!"
                              : "Message cannot be empty!"
                          }`}</p>
                        )}
                      </div>

                      <div className="mb-3">
                        <button
                          type="submit"
                          className="default-btn"
                          disabled={!formIsValid}
                        >
                          {`${ctx.languageData === "it" ? "INVIA" : "SUBMIT"}`}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </>
        ))}
      <div className="google-maps">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed/v1/place?q=Via+Aldo+Moro,+98,+Meolo,+Metropolitan+City+of+Venice,+Italy&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        />
      </div>
    </>
  );
}
