import React, { useState, useEffect, Suspense } from "react";
import Tour, { Navigation, Dot, Controls, Arrow } from "reactour";
import { BrowserRouter, Router } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { createBrowserHistory } from "history";

import GlobalStyles from "./styles/global";
import Routes from "./routes";
import Header from "./components/Header";

const history = createBrowserHistory();

const steps = [
  {
    selector: "header",
    content: "This is the header",
  },
  {
    selector: "#home",
    content: "Here u can see the main news",
  },
  {
    selector: "#favs",
    content: "Yours saved news go here",
  },
  {
    selector: "#configs",
    content: "Here u can config your preferences",
    action: (node) => {
      console.log(node)
    },
  },
  {
    selector: "#about",
    content: "Info about this app",
  },
  {
    selector: ".sc-jrAGrp.jhlIit",
    content: "Click in the tab to see news about it",
  },
  {
    selector: "#favTitle",
    content: "Here u can see the favourite news",
  },
];

function App() {
  /** reactour configs */
  const [isTourOpen, setOpen] = useState(false);
  const [isShowingMore, setShowingMore] = useState(false);
  const [customComps, setCustomComps] = useState(false);

  useEffect(() => {
    // setOpen(true);
    function keyHandling(e) {
      if (e.keyCode === 75) {
        e.preventDefault();
        setOpen(true);
      }

      if (isTourOpen && e.keyCode === 13) {
        e.preventDefault();
        setCustomComps(!customComps);
      }
    }
    window.addEventListener("keyup", keyHandling);
    return () => window.removeEventListener("keyup", keyHandling);
  }, [isTourOpen, customComps]);

  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);
  const accentColor = "linear-gradient(to right, #9b1010, #750c0c)";

  /** end reactour configs */

  return (
    <Router history={history}>
      <Header openTour={() => setOpen(true)} />
      <Routes />
      <GlobalStyles />
      <Suspense fallback={<React.Fragment />}>
        <Tour
          onAfterOpen={disableBody}
          onBeforeClose={enableBody}
          onRequestClose={() => setOpen(false)}
          steps={steps}
          isOpen={isTourOpen}
          maskClassName="mask"
          className="helper"
          rounded={5}
          accentColor={accentColor}
          closeWithMask={false}
          disableKeyboardNavigation={["esc"]}
          maskSpace={0}
          getCurrentStep={(curr) => (if(curr+1 == 6))}
          // showCloseButton={false}
          // CustomHelper={customComps ? MyCustomHelper : null}
        />
      </Suspense>
      {/* <Tour
        steps={steps}
        isOpen={true}
        onRequestClose={() => setIsTourOpen(false)}
      /> */}
    </Router>
  );
}

function MyCustomHelper({ current, content, totalSteps, gotoStep, close }) {
  const accessories = [
    "Blank",
    "Kurt",
    "Prescription01",
    "Prescription02",
    "Round",
    "Sunglasses",
    "Wayfarers",
  ];
  return (
    <main className="CustomHelper__wrapper">
      <aside className="CustomHelper__sidebar">
        <span className="CustomHelper__sidebar_step">Step {current + 1}</span>
        <img
          className="CustomHelper__sidebar_img"
          src={`https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=${accessories[current]}&hairColor=Brown&facialHairType=BeardLight&facialHairColor=Black&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Pale`}
        />
        <span className="CustomHelper__sidebar_step">Lorem Ipsum</span>
      </aside>
      <div className="CustomHelper__content">
        {content}
        <Controls
          data-tour-elem="controls"
          className="CustomHelper__controls"
          style={{ position: "absolute" }}
        >
          <Arrow
            onClick={() => gotoStep(current - 1)}
            disabled={current === 0}
            className="CustomHelper__navArrow"
          />
          <Navigation data-tour-elem="navigation">
            {Array.from(Array(totalSteps).keys()).map((li, i) => (
              <Dot
                key={li}
                onClick={() => current !== i && gotoStep(i)}
                current={current}
                index={i}
                disabled={current === i}
                showNumber={true}
                data-tour-elem="dot"
              />
            ))}
          </Navigation>
          <Arrow
            onClick={() => gotoStep(current + 1)}
            disabled={current === totalSteps - 1}
            className="CustomHelper__navArrow"
            inverted
          />
        </Controls>
      </div>
    </main>
  );
}

export default App;
