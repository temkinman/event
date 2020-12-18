import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import EventText from "./../EventText/EventText";
import DatePicker from "react-datepicker";
import TimeKeeper from "react-timekeeper";
import "react-datepicker/dist/react-datepicker.css";
import s from "./CreateEvent.module.css";

const CreateEvent = ({ saveEvent }) => {
  const [eventText, setEventText] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [showTime, setShowTime] = useState(false);
  const [validate, setValidate] = useState(true);

  const history = createBrowserHistory();

  useEffect(() => {
    if (eventText && date && time) {
      setValidate(false);
    }
  }, [eventText, date, time]);

  const onSendEventHandle = (e) => {
    e.preventDefault();
    if (eventText && date && time) {
      saveEvent(newEvent(eventText, date, time));
      setValidate(true);
    }
    // history.push(`/event/?text=${eventText}`);
  };

  const newEvent = (eventText, date, time) => {
    return { text: eventText, date, time };
  };

  return (
    <form onSubmit={(e) => onSendEventHandle(e)}>
      <EventText text={eventText} setNewText={(text) => setEventText(text)} />
      <div>
        <DatePicker
          selected={date}
          onChange={(newDate) => setDate(newDate)}
          placeholderText="Дата"
          className={s.date}
        />
      </div>
      <div>
        <input
          type="text"
          value={time}
          onClick={() => setShowTime(!showTime)}
          placeholder="время"
          className={s.time}
        />
        <div>
          {showTime && (
            <TimeKeeper
              time={time}
              onChange={(newTime) => setTime(newTime.formatted24)}
              onDoneClick={() => setShowTime(false)}
              switchToMinuteOnHourSelect
            />
          )}
        </div>
      </div>
      <div>
        <Link to="/event">
          <button
            type="submit"
            disabled={validate}
            className={`${s.btn} ${!validate ? s.enable : ""}`}
          >
            создать
          </button>
        </Link>
      </div>
    </form>
  );
};

export default CreateEvent;
