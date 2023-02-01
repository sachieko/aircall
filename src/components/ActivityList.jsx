import CallItem from "./CallItem";
import CallItemDetailed from "./CallItemDetailed";
import useCallData from "../hooks/useCallData";

const ActivityList = function() {
  const {
    callsState
  } = useCallData();

  const activeCalls = callsState.filter(call => call['is_archived'] === false).map((call, index) => {
    return <CallItem key={index} call={call}/>;
  });

  return (
    <div className="activity-list">
      {activeCalls}
    </div>
  );
};

export default ActivityList;