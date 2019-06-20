import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import SearchBar from "../components/search-bar";
import youtube from "../../../../../services/youtube-api";
import VideoList from "../components/video-list";
import VideoDetail from "../components/video-detail";

export default class Appi extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onTermSubmit("friends show");
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <Fragment>
        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
