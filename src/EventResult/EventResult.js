import { Link } from "react-router-dom";
import EventText from "./../EventText/EventText";
import { getFullTime } from "./../Utils/utils";

const EventResult = ({ event }) => {
  return (
    <div>
      <EventText text={event.text} readonly={true} />
      <input type="text" value={getFullTime(event.date)} readOnly />
      <br />
      <input type="text" value={event.time} readOnly />
      <br />
      <Link to="/" activeClassName="selected">
        назад
      </Link>
      <button>скопировать ссылку</button>
    </div>
  );
};

export default EventResult;
