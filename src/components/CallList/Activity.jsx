import CallItem from "../CallItem";
import useCallData from "../../hooks/useCallData";

const Activity = function() {
  const {
    callsState,
    callDetails,
    archiveCall,
  } = useCallData();

  const activeCalls = callsState.filter(call => call['is_archived'] === false).map((call, index) => {
    return (
    <>
    <CallItem key={index} call={call} archive={archiveCall} />
    </>
    );
  });

  return (
    <div className="inbox-activity">
      {activeCalls}
    </div>
  );
};

export default Activity;