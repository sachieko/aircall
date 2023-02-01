const CallItem = function( {call} ) {
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
    <div>This is a call item. The id is {id} and it was created at {created_at}.</div>
  );
};

export default CallItem;