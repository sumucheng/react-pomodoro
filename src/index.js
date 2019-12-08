import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function App() {
  const [breakLength, setBreakLength] = useState(parseInt(localStorage.getItem("BL")) || 1);
  const [sessionLength, setSessionLength] = useState(parseInt(localStorage.getItem("SL")) || 1);
  const [timer, setTimer] = useState(parseInt(localStorage.getItem("TM")) || 60); //60*timer
  const [timerState, setTimerState] = useState(localStorage.getItem("TS") || "stopped"); // "running" "stopped"
  const [timerType, setTimerType] = useState(localStorage.getItem("TT") || ""); //"session" "break" ""
  const [completedList, setCompletedList] = useState(
    (localStorage.getItem("CL") && JSON.parse(localStorage.getItem("CL"))) || []
  );
  const [sumOfDay, setSumOfDay] = useState(
    (localStorage.getItem("SD") && JSON.parse(localStorage.getItem("SD"))) || []
  );

  useEffect(() => {
    localStorage.setItem("BL", breakLength);
    localStorage.setItem("SL", sessionLength);
    localStorage.setItem("TM", timer);
    localStorage.setItem("TS", timerState);
    localStorage.setItem("TT", timerType);
    localStorage.setItem("CL", JSON.stringify(completedList));
    localStorage.setItem("SD", JSON.stringify(sumOfDay));
  });

  function changeLength(name, action) {
    if (timerType !== "") return;
    const BL = breakLength;
    const SL = sessionLength;
    if (name === "break") {
      if (action === "add") {
        setBreakLength(BL < 60 ? BL + 1 : BL);
      } else {
        setBreakLength(BL > 1 ? BL - 1 : BL);
      }
    } else {
      if (action === "add") {
        if (SL < 60) {
          setSessionLength(SL + 1);
          setTimer(60 * SL + 60);
        }
      } else {
        if (SL > 1) {
          setSessionLength(SL - 1);
          setTimer(60 * SL - 60);
        }
      }
    }
  }

  useInterval(
    () => {
      setTimer(timer - 1);
      if (timer < 1) changeState();
    },
    timerState === "running" ? 1000 : null
  );

  function startOrStopSession() {
    if (timerType === "") setTimerType("session");
    setTimerState(timerState === "running" ? "stopped" : "running");
  }

  function changeState() {
    if (timerType === "session") {
      setTimer(60 * breakLength);
      setTimerType("break");
      setCompletedList([...completedList, { end: Date.now(), length: sessionLength }]);
    } else {
      setTimer(60 * sessionLength);
      setTimerType("session");
    }
  }

  function resetSession() {
    setTimer(60 * sessionLength);
    setTimerState("stopped");
    setTimerType("");
  }
  function displayCompleted(i) {
    console.dir(i.end);
    const date = new Date(parseInt(i.end));
    let month = addZero(date.getMonth());
    let day = addZero(date.getDate());
    let hour = addZero(date.getHours());
    let minute = addZero(date.getMinutes());
    return `${month}.${day}   ${hour}:${minute}`;
  }

  function sumOfToday(x) {
    let sum = 0;
    for (let i = x.length - 1; i >= 0; i--) {
      const date = new Date(parseInt(x[i].end));
      if (date.getDate() !== new Date().getDate()) {
        setSumOfDay([...sumOfDay, { date: date, sum: sum }]);
        break;
      }
      sum += x[i].length;
    }
    return sum;
  }
  function addZero(x) {
    return x < 10 ? "0" + x : x;
  }

  function displayTime() {
    let minutes = Math.floor(timer / 60);
    let seconds = timer - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes + ":" + seconds;
  }

  return (
    <div className={`app ${timerType}`}>
      <div className="title">Pomodoro</div>
      <div className="label">
        <div id="break-label">
          <div>休息时间</div>
          <div className="length-button">
            <button
              onClick={() => {
                changeLength("break", "minus");
              }}>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref={timerType === "break" ? "#icon-minus-copy" : "#icon-minus"}></use>
              </svg>
            </button>
            <p>{breakLength}</p>
            <button
              onClick={() => {
                changeLength("break", "add");
              }}>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref={timerType === "break" ? "#icon-add-copy" : "#icon-add"}></use>
              </svg>
            </button>
          </div>
        </div>
        <div id="session-label">
          <div>番茄时间</div>
          <div className="length-button">
            <button
              onClick={() => {
                changeLength("session", "minus");
              }}>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref={timerType === "break" ? "#icon-minus-copy" : "#icon-minus"}></use>
              </svg>
            </button>
            <p>{sessionLength}</p>
            <button
              onClick={() => {
                changeLength("session", "add");
              }}>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref={timerType === "break" ? "#icon-add-copy" : "#icon-add"}></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="clock">
        {/* <div id="timer-label">{timerType}</div> */}
        <div className="wrapper">
          <div id="time-left">
            <div>{displayTime()}</div>
            <div className="action-button">
              <button onClick={startOrStopSession}>
                {timerState === "running" ? (
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref={timerType === "break" ? "#icon-stop-copy" : "#icon-stop"}></use>
                  </svg>
                ) : (
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref={timerType === "break" ? "#icon-start-copy" : "#icon-start"}></use>
                  </svg>
                )}
              </button>
              <button onClick={resetSession}>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref={timerType === "break" ? "#icon-reset-copy" : "#icon-reset"}></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="info">
          <div className="infoTitle">
            <svg className="icon" aria-hidden="true">
              <use xlinkHref={timerType === "break" ? "#icon-completed-copy" : "#icon-completed"}></use>
            </svg>
            <p className="todayTomato">今日番茄总计</p>
            <svg className="icon" aria-hidden="true">
              <use xlinkHref={timerType === "break" ? "#icon-completed-copy" : "#icon-completed"}></use>
            </svg>
          </div>
          <div className="sum">
            {sumOfToday(completedList)}
            <p className="min">分钟</p>
          </div>
        </div>
        {/* <div className="completed">
          {completedList.map(i => (
            <li key={i.end}>{displayCompleted(i)}</li>
          ))}
        </div> */}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
