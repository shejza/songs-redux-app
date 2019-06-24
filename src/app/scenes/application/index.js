import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Footer from "./components/footer";
import Appi from "./scenes/projects/scenes/Appi";

const Application = () => {
  return (
    <Router>
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            {/* <Sidebar /> */}

            <main className="main-content col-lg-10 col-md-9 col-sm-12">
              <div className="main-navbar ui container">
                <Header />
              </div>
              <div className="main-content-container">
                <Route path="/app/home" component={Appi} />
              </div>
              {/* <Footer /> */}
            </main>
          </div>
        </div>
      </Fragment>
    </Router>
  );
};

export default Application;
