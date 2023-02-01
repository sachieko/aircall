import ButtonNoBubble from "../ButtonNoBubble";
import parseDate from "../../helpers/parseDate";

const PlainCall = function({ number, direction, date, isArchiving, is_archived, handleArchive, onClick }) {
  const { time, month, year } = parseDate(date);
  return (
    <div className="call-item" onClick={onClick}>
      <div className="call-date">{month}, {year} at {time}</div>
      <div className="call-info">
        <div className="call-number">{direction === 'inbound' ? '↙️' : '↗️'} <span>{number}</span></div>
        <div className="call-status">
          {!isArchiving && !is_archived && <ButtonNoBubble text={'Archive'} onClick={handleArchive} />}
          {!isArchiving && is_archived && <ButtonNoBubble text={'Unarchive'} onClick={handleArchive} />}
          {isArchiving && !is_archived && <div>Archiving..</div>}
          {isArchiving && is_archived && <div>Unarchiving..</div>}
        </div>
      </div>
    </div>
  );
};

export default PlainCall;