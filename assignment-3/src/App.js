import "./App.css";
import Image from "./components/Image";
import Text from "./components/Text";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="icon"></div>
      <div className="content">
        <Image />
        <Text />
      </div>
      <Footer />
    </div>
  );
}

export default App;
