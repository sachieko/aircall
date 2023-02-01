import { useState } from "react";
import Button from "../Button";

const CallItem = function({ call, archiveToggle }) {
  const [isArchiving, setIsArchiving] = useState(false);
  const {
    id,
    direction,
    created_at,
    from,
    to,
    via,
    duration,
    is_archived,
    call_type
  } = call;

  const handleArchive = async () => {
    setIsArchiving(true);
    archiveToggle(id, is_archived)
      .then(res => {
        setIsArchiving(false);
      });
  };;

  return (
    <div className="call-item">
    <div className="call-number">{from || to || 'Private'}</div>
    <div className={`call-icon ${direction === 'inbound' ? 'inbound-icon' : 'outbound-icon'}`}></div>
    <div className="call-time">{created_at.substring(11,16)}</div>
    {isArchiving && is_archived ? <div>Unarchiving..</div> : <div>Archiving..</div>}
    {!is_archived && <Button text={'Archive'} onClick={handleArchive} />}
    {is_archived && <Button text={'Unarchive'} onClick={handleArchive} />}
  </div>
  );
};

export default CallItem;