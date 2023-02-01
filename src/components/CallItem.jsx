const CallItem = function( {call, archive, details} ) {
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
  return (
    <div className="call-item">This is a call item. The id is {id} and it was created at {created_at}.</div>
  );
};

export default CallItem;