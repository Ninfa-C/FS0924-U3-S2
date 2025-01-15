import { Component } from "react";
import HeroSection from "./HeroSection";
//import ProvaCarosello from "./ProvaCarosello";
import MovieCards from "./MovieCards";

class NetflixHome extends Component {
  render() {
    return (
      <>
        <HeroSection />
        {this.props.query && this.props.query.trim() !== "" && (
          <MovieCards query={this.props.query} title="Results" />
        )}
        <MovieCards query="Girl" title="Trending Now" />
        <MovieCards query="Harry" title="Watch it Again" />
        <MovieCards query="Boy" title="New Releases" />
      </>
    );
  }
}

export default NetflixHome;
