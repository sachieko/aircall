import ButtonNoBubble from "../ButtonNoBubble";

const PlainCall = function({ number, direction, time, isArchiving, is_archived, handleArchive, onClick }) {
  return (
    <div className="call-item" onClick={onClick}>
      <div className="call-number">{direction === 'inbound' ? '↙️' : '↗️'} <span>{number}</span></div>
      <div className="call-time">{time}</div>
      <div className="call-status">
        {!isArchiving && !is_archived && <ButtonNoBubble text={'Archive'} onClick={handleArchive} />}
        {!isArchiving && is_archived && <ButtonNoBubble text={'Unarchive'} onClick={handleArchive} />}
        {isArchiving && !is_archived && <div>Archiving..</div>}
        {isArchiving && is_archived && <div>Unarchiving..</div>}
      </div>
    </div>
  );
};

export default PlainCall;