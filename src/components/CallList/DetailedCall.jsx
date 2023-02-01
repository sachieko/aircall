import Button from "../Button";

const DetailedCall = function({ 
    number, direction, time, isArchiving, is_archived, handleArchive, onClick, via, callType, duration 
  }) {
  return (
    <div className="call-item--detailed" onClick={onClick}>
      <div className="call-info">
        <div className="call-number">{direction === 'inbound' ? '↙️' : '↗️'} <span>{number}</span></div>
        <div className="call-time">{time}</div>
        <div className="call-status">
          {!isArchiving && !is_archived && <Button text={'Archive'} onClick={handleArchive} />}
          {!isArchiving && is_archived && <Button text={'Unarchive'} onClick={handleArchive} />}
          {isArchiving && !is_archived && <div>Archiving..</div>}
          {isArchiving && is_archived && <div>Unarchiving..</div>}
        </div>
      </div>
      <div className="call-details">
        <div className="call-duration">Call lasted {duration} seconds.</div>
        <div className="call-type">Type: {callType}</div>
        {via && <div className="call-via">Aircall#: {via}</div>}
      </div>
    </div>
  );
};

export default DetailedCall;