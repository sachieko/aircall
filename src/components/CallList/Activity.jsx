import CallItem from "../CallItem";
import useCallData from "../../hooks/useCallData";

const Activity = function() {
  const {
    callsState,
    callDetails,
    archiveCall,
    getCallDetails
  } = useCallData();
  
  const activeCalls = callsState.filter(call => call['is_archived'] === false).map((call, index) => {
    return (
    <>
    <CallItem key={index} call={call} archive={archiveCall} details={getCallDetails}/>
    </>
    );
  });

  return (
    <div className="activity-list">
      {activeCalls}
    </div>
  );
};

export default Activity;