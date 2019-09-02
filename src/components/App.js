import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchTermSubmit("cats");
  }
  onSearchTermSubmit = async searchTerm => {
    // console.log(searchTerm);
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm
      }
    });
    //console.log(response);
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
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchTermSubmit} />
        <div className="ui grid">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </div>

        {/*There are {this.state.videos.length} found.*/}
      </div>
    );
  }
}

export default App;
