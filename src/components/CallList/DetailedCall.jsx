import ButtonNoBubble from "../ButtonNoBubble";
import parseDate from "../../helpers/parseDate";

const DetailedCall = function({ 
    number, direction, date, isArchiving, is_archived, handleArchive, onClick, via, callType, duration 
  }) {  
  const { time, year, month } = parseDate(date);

  return (
    <div className="call-item--detailed" onClick={onClick} >
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
      {is_archived && <div className="call-archive">Archived</div>}
      <div className="call-details">
        <div className="call-type">{callType === 'voicemail' ? callType : `Call ${callType}`}</div>
        <div className="call-duration">Call lasted {duration} seconds.</div>
        {via && <div className="call-via">Aircall#: {via || 'Unknown'}</div>}
      </div>
    </div>
  );
};

export default DetailedCall;