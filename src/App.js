import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Home from "./components/Home/Home";
import AboutMe from "./components/About/AboutMe";
import Portfolio from "./components/Portfolio";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import { FaArrowCircleUp } from "react-icons/fa";

function App() {
  const [state, setState] = useState({ items: [<Home key="Home" />] });
  const [extraComponents] = useState([
    <AboutMe key="AboutMe" />,
    <Portfolio key="Portfolio" />,
    <TechStack key="TechStack" />,
    <Contact key="Contact" />,
  ]);
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    if (state.items.length >= 5) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setState({
        items: state.items.concat([extraComponents[count]]),
      });
      setCount(count + 1);
    }, 200);
  };

  const backToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <InfiniteScroll
        dataLength={state.items.length}
        // height={50}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        style={{ overflow: "hidden" }}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <FaArrowCircleUp className={"btn-top"} onClick={backToTopHandler}>
              Back To Top
            </FaArrowCircleUp>
          </p>
        }
      >
        {state.items.map((i, index) => i)}
      </InfiniteScroll>
    </div>
  );
}

export default App;
