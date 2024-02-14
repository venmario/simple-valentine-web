import { useState } from "react";
import "./index.css";
import bear from "./assets/bear-love.gif";
import bearkiss from "./assets/kiss.gif";
const noTexts = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Pleaseee :(",
  "Give me a chance :("
];
function App() {
  const [pressedYes, setPressedYes] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const yesButtonSize = noCount * 12 + 16;

  const handleNoButton = () => {
    setNoCount(noCount + 1);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-pink-100 to-white flex">
      <div className="w-full flex flex-col justify-center gap-3 items-center px-8">
        <div>
          {pressedYes ? (
            <img src={bearkiss} className="rounded" alt="bear-kiss" />
          ) : (
            <img src={bear} className="rounded" alt="bear-love" />
          )}
        </div>
        <p className="font-semibold text-xl">
          {pressedYes == true
            ? "Yeaaaaay Love Youuu <3"
            : "Will you be my valentine?"}
        </p>
        {!pressedYes && (
          <div className="flex gap-4 flex-wrap justify-center items-center">
            <button
              style={{
                fontSize: yesButtonSize
              }}
              className="px-8 py-2 rounded w-auto h-auto bg-green-500 hover:bg-green-700 transition text-white font-bold"
              onClick={() => setPressedYes(true)}
            >
              Yes
            </button>
            {noCount < 6 && (
              <button
                className="px-8 py-2 rounded bg-red-500 hover:bg-red-700 transition text-white font-bold h-auto"
                onClick={handleNoButton}
              >
                {noTexts[noCount]}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
