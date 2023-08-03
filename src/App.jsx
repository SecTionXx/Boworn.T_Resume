import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Header from "./component/Header";
import Resume from "./component/Resume";
import Footer from "./component/Footer";

function App() {
  const [count, setCount] = useState(0);
  const data = [
    { header: "Header 1", content: "Content 1" },
    { header: "Header 2", content: "Content 2" },
  ];

  return (
    <div className="">
      <Header
        imgSrc="src\component\Img\Profile_img.jpg"
        designerTitle="DESIGNER / DEVELOPER"
        firstName="Boworn"
        lastName="Treesinsub"
      />
      <Resume data={data} />
      <Footer />
    </div>
  );
}

export default App;
