import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NetflixNav from "./components/NetflixNav";
import NetflixFooter from "./components/NetflixFooter";
import NetflixHome from "./components/NetflixHome";
import { Component } from "react";
import NetflixHelp from "./components/NeflixHelp";
import NetflixProfile from "./components/NetflixProfile";

class App extends Component {
  state = {
    query: "",
      footerShow: true,
      HomeShow: true,
      profileShow: false,
      helpShow: false,
  };

  change = (query) => {
    this.setState({ query });
  };

  profile = () => {
    this.setState({
      HomeShow: false,
      helpShow: false,
      profileShow: true,
      footerShow: false,
    });
  };

  help = () => {
    this.setState({
      HomeShow: false,
      helpShow: true,
      profileShow: false,
      footerShow: false,
    });
  };

  home = () => {
    this.setState({
      HomeShow: true,
      helpShow: false,
      profileShow: false,
      footerShow: true,
    });
  };

  render() {
    return (
      <>
        <header>
          <NetflixNav searchSubmit={this.change} profile={this.profile} help={this.help} home={this.home}/>
        </header>
        <main>
          {/*Come per U3-W1-D2/3 per aggiornare un componente è necessario passargli una 
          key perchè aggiornando la key si aggiorna il componente perchè è come se fosse diverso */}
          {this.state.HomeShow && (
            <NetflixHome key={this.state.query} query={this.state.query} />
          )}
          {this.state.profileShow && <NetflixProfile />}
          {this.state.helpShow && <NetflixHelp />}
        </main>
        <footer>
          {this.state.footerShow && !this.state.helpShow && <NetflixFooter />}
        </footer>
      </>
    );
  }
}

export default App;
