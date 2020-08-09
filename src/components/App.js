import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Authorization: Client-ID At8M9rvIXxCrDASxPhstWLih39HuNwBoOkU2p5ihfEk",
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
