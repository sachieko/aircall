import CallItem from "../CallItem";
import useCallData from "../../hooks/useCallData";

const All = function() {
  const {
    callsState,
    callDetails,
    archiveCall,
  } = useCallData();
  
  const allCalls = callsState.map((call, index) => {
    return (
    <>
    <CallItem key={index} call={call} archive={archiveCall} />
    </>
    );
  });

  return (
    <div className="inbox-all">
      {allCalls}
    </div>
  );
};

export default All;