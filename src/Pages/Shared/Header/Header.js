import { signOut } from "firebase/auth";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { UimSignOutAlt } from "@iconscout/react-unicons-monochrome";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="primary"
        variant="dark"
        role="navigation"
      >
        <div className="container">
          {/*---------------- navbar Name----------------- */}

          <div className="pe-4">
            <h3>
              Bogura <span className="text-danger">AC</span> Corner
            </h3>
          </div>

          <Navbar.Toggle aria-controls="responsive-navbar-nav " />
          <Navbar.Collapse className="flex justify-content-between row ms-1 ">
            {/*---------------- Navbar default Items----------------- */}

            <Nav className="flex-row gap-3 col justify-content-start">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="home#products">Products</Nav.Link>
              <Nav.Link href="home#owners">Owners</Nav.Link>
            </Nav>
            {/*---------------- Navbar user Items----------------- */}
            <Nav className="flex-row gap-3 col justify-content-end">
              <Nav.Link as={Link} to="about">
                About
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link as={Link} to="addservice">
                    Add
                  </Nav.Link>
                  <Nav.Link as={Link} to="manage">
                    Manage
                  </Nav.Link>
                  <Nav.Link as={Link} to="orders">
                    Orders
                  </Nav.Link>
                </>
              )}
              {user ? (
                <button
                  className="btn btn-link shadow-lg rounded-circle"
                  onClick={handleSignOut}
                >
                  <UimSignOutAlt
                    className="btn-primary rounded-circle"
                    size="32px"
                  />
                </button>
              ) : (
                <Nav.Link as={Link} to="login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
