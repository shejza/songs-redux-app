import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { selectSong } from "../actions";
import SongList from "./SongList";
import SongDetails from "./SongDetails";

export default class Appi extends Component {
  render() {
    return (
      <Fragment>
        <div className="ui container grid">
          <div className="ui row">
            <div className="column eight wide">
              <SongList />
            </div>
            <div className="column eight wide" />
            <SongDetails />
          </div>
        </div>
      </Fragment>
    );
  }
}
