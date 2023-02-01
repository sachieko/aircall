import { useState } from "react";
import Button from "../Button";
import Loading from "./Loading";

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
    <div className="call-number">{from || to}</div>
    <div className={`call-icon ${direction === 'inbound' ? 'inbound-icon' : 'outbound-icon'}`}></div>
    <div className="call-time">{created_at}</div>
    {isArchiving && <div>Archiving..</div>}
    {!is_archived && <Button text={'Archive'} onClick={handleArchive} />}
    {is_archived && <Button text={'Unarchive'} onClick={handleArchive} />}
  </div>
  );
};

export default CallItem;