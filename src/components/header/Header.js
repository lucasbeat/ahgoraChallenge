import React from "react";
import { Form } from "@unform/web";
import InputDays from "./InputDays";
import InputTerm from "./InputTerm";

import {
  Menu,
  Notifications,
  Search,
  VideoCall,
  Apps,
} from "@material-ui/icons";
import logo from "../../assets/logo.png";

import "./_header.css";
import { Button, Avatar } from "@material-ui/core";

function Header({ HandleData }) {
  return (
    <>
      <Form onSubmit={HandleData}>
        <div className="header">
          <div className="header-left">
            <Menu className="header-menuicon" />
            <img className="header-logo" src={logo} alt="youtube"></img>
          </div>

          <div className="header-center">
            <InputTerm term="term"></InputTerm>
            <Button type="submit" className="header-button">
              <Search className="header-searchIcon" />
            </Button>
          </div>
          <div className="header-right">
            <VideoCall />
            <Apps />
            <Notifications />
            <Avatar />
          </div>
        </div>
        <div className="input-days">
          <h1 className="Input-text">
            Insira a quantidade de tempo nos campos ao lado
          </h1>
          <div className="input-days-center">
            <InputDays />
          </div>
        </div>
      </Form>
    </>
  );
}

export default Header;
