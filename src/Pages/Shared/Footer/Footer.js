import React from "react";
import { UimFacebook } from "@iconscout/react-unicons-monochrome";
import { UimWhatsapp } from "@iconscout/react-unicons-monochrome";
import { UimFacebookMessenger } from "@iconscout/react-unicons-monochrome";
import { UilPhone } from "@iconscout/react-unicons";
import { UilHome } from "@iconscout/react-unicons";
import { UilEnvelopeAdd } from "@iconscout/react-unicons";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="bg-dark text-white-50">
      <div className="container pt-4">
        <div className="row">
          {/*-------------Name part---------------*/}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-start">
            <h5 className="text-uppercase mb-4 text-weight-bold text-primary">
              Bogura AC Corner
            </h5>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          {/*-------------Features part---------------*/}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-start">
            <h5 className="text-uppercase mb-4 text-weight-bold text-danger">
              Features
            </h5>
            <p>
              <a
                href="#home"
                className="text-white-50"
                style={{ textDecoration: "none" }}
              >
                Home
              </a>
            </p>
            <p>
              <a
                href="#services"
                className="text-white-50"
                style={{ textDecoration: "none" }}
              >
                Products
              </a>
            </p>
            <p>
              <a
                href="#experts"
                className="text-white-50"
                style={{ textDecoration: "none" }}
              >
                Owner
              </a>
            </p>
            <p>
              <a
                href="#contactMe"
                className="text-white-50"
                style={{ textDecoration: "none" }}
              >
                ContactMe
              </a>
            </p>
          </div>
          {/*-------------Useful Links part---------------*/}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 text-start">
            <h5 className="text-uppercase mb-4 text-weight-bold text-danger">
              Useful Links
            </h5>
            <p>
              <a
                href="#home"
                className="text-white-50"
                style={{ textDecoration: "none" }}
              >
                <UimFacebook className="text-primary"></UimFacebook> FACEBOOK
              </a>
            </p>
            <p>
              <a
                href="#services"
                className="text-white-50"
                style={{ textDecoration: "none" }}
              >
                <UimWhatsapp className="text-primary"></UimWhatsapp> WHATS APP
              </a>
            </p>
            <p>
              <a
                href="#contactMe"
                className="text-white-50"
                style={{ textDecoration: "none" }}
              >
                <UimFacebookMessenger className="text-primary"></UimFacebookMessenger>{" "}
                FB MESSENGER
              </a>
            </p>
          </div>
          {/*-------------For Contact part---------------*/}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 text-start">
            <h5 className="text-uppercase mb-4 text-weight-bold text-danger">
              contact me
            </h5>
            <p>
              <UilHome className="text-primary"></UilHome> JoypurPara, Opposite
              of Asian depo.
            </p>
            <p>
              <UilEnvelopeAdd className="text-primary"></UilEnvelopeAdd>{" "}
              boguraaccorner@gmail.com
            </p>
            <p>
              <UilPhone className="text-primary"></UilPhone> +880 01840-432050
            </p>
          </div>
        </div>
        {/*-------------Copyright part---------------*/}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto text-md-center mt-2 pb-2">
          <p>
            <span>
              Copyright &copy; <strong className="text-danger">B.AC.CO </strong>{" "}
              -{year}{" "}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
