import "./App.css";
import Navigation_Bar from "./navigation_bar/navigation_bar";
import Footer from "./footer/footer";
import self_image from "./assets/self.png";

function App() {
  return (
    <div className="App">
      <Navigation_Bar />
      <header className="App-header">Luc De Nardi</header>
      <div className="main-wrapper">
        <div className="about-me-container">
          <div className="about-me">
            <div className="about-me-title">About me</div>
            <p className="about-body">
              I am a first year Graduate student in the CLASIC program at the
              University of Colorado Boulder.
            </p>
            <p className="about-body">
              I recieved my BA in Linguistics with minors in Cognitive Science
              and Computer Science at the University of Delaware.
            </p>
          </div>
          <div className="self-image">
            <img src={self_image} alt="self" width={"300"} />
          </div>
        </div>

        <div className="interest-container">
          <div className="interest">
            <div className="about-me-title">Research Interest</div>
            <p className="about-body">
              I am interested in NLP work for endangered and low resource
              languages. I am also particularly interested in semantics and
              phonetics side.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
