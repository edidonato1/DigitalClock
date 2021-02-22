import { useEffect, useState } from 'react';
import ColorSelect from './ColorSelect';
import { ClockContainer } from './ClockStyles';
import { numbers } from './helpers/numbers';
import { seconds, makeTimeArray } from './helpers/timeHelpers';


export default function Clock() {
  const [timeArr, setTime] = useState([]);
  const [am, setAm] = useState();
  const [clockColor, setClockColor] = useState('#77ff41');

  const checkAm = () => {
    setAm(new Date().getHours() >= 13 ? false : true)
  }

  useEffect(() => {
    // when component mounts, set time
    setTime(makeTimeArray(new Date()));
    // set time again at start of next minute to ensure accuracy
    setTimeout((() => setTime(makeTimeArray(new Date()))), (60 - seconds) * 1000);
    checkAm();
  }, [clockColor]);

  useEffect(() => {
    // when clock refreshes, set interval to update component every minute
    setInterval((() => setTime(makeTimeArray(new Date()))), 60000);
    checkAm();
  }, [timeArr]);

  return (
    <ClockContainer clockColor={clockColor}>
      <div id="clock-skew">
        {timeArr.map(n =>
          <div key={ n } className={n < 10 ? "analog-digit-container" : "colon-container"}>
            {numbers[n].map((row, i) => // value of time array matches index of corresponding "number" matrix
              <div key={i * 1.23} className="row">
                {row.map((num, idx) =>
                  <div key={idx * 2.94 } className={num === 1 ? "block on" : "block off"}>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        <div id="am-pm-container">
          <p className={am ? "light-up" : null}>am</p>
          <p className={!am ? "light-up" : null}>pm</p>
        </div>
      </div>
      <ColorSelect
        clockColor={clockColor}
        setClockColor={setClockColor}
      />
    </ClockContainer>
  );
};