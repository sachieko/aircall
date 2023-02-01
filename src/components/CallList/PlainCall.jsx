import Button from "../Button";

const PlainCall = function({ number, direction, time, isArchiving, is_archived, handleArchive, onClick }) {
  return (
    <div className="call-item">
      <div className="call-number" onClick={onClick}>{direction === 'inbound' ? '↙️' : '↗️'} <span>{number}</span></div>
      <div className="call-time">{time}</div>
      <div className="call-status">
        {!isArchiving && !is_archived && <Button text={'Archive'} onClick={handleArchive} />}
        {!isArchiving && is_archived && <Button text={'Unarchive'} onClick={handleArchive} />}
        {isArchiving && !is_archived && <div>Archiving..</div>}
        {isArchiving && is_archived && <div>Unarchiving..</div>}
      </div>
    </div>
  );
};

export default PlainCall;