import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Images from "./components/Images";
import Videos from "./components/Videos";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <main className="md:px-20 lg:px-40 h-screen">
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/art" element={<Images />} />
            <Route path="/animations" element={<Videos />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
