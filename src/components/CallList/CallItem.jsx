import { useState } from "react";
import DetailedCall from "./DetailedCall";
import PlainCall from "./PlainCall";

const CallItem = function({ call, archiveToggle }) {
  const [isArchiving, setIsArchiving] = useState(false);
  const [selected, setSelected] = useState(false);
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
  };

  const handleClick = () => {
    setSelected(!selected); // toggles whether to show details or not
  };

  return (
    <>
    {!selected ? (
      <PlainCall 
        key={id}
        number={from || to || 'Private'}
        date={created_at}
        direction={direction}
        is_archived={is_archived}
        isArchiving={isArchiving}
        handleArchive={handleArchive}
        onClick={handleClick}
        /> ) : (
      <DetailedCall
        key={id}
        number={from || to || 'Private'}
        date={created_at}
        direction={direction}
        is_archived={is_archived}
        via={via}
        duration={duration}
        callType={call_type}
        isArchiving={isArchiving}
        handleArchive={handleArchive}
        onClick={handleClick}
        />
      )}
    </>
  );
};

export default CallItem;