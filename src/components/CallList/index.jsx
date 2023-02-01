import Menu from "../Menu";
import CallItem from "./CallItem";
import useCallData from "../../hooks/useCallData";
import useViewMode from "../../hooks/useViewMode";
import "../../styles/CallList.scss";

const CallList = function({ mode }) {
  const {
    callsState,
    archiveCall
  } = useCallData();

  const ACTIVITY = 'ACTIVITY';
  const ALL = 'ALL';
  const ARCHIVED = 'ARCHIVED';

  // Make an array of only archived calls
  const archivedCalls = callsState.filter(call => call['is_archived'] === true).map((call) => {
    return (
    <CallItem key={call.id} call={call} archiveToggle={archiveCall} />
    );
  });

  const activeCalls = callsState.filter(call => call['is_archived'] === false).map((call) => {
    return (
    <CallItem key={call.id} call={call} archiveToggle={archiveCall} />
    );
  });

  const allCalls = callsState.map((call) => {
    return (
    <CallItem key={call.id} call={call} archiveToggle={archiveCall} />
    );
  });
  
  return (
    <>
    <section className="call-list">
      {mode === ACTIVITY && activeCalls}
      {mode === ALL && allCalls}
      {mode === ARCHIVED && archivedCalls}
    </section>
    </>
  );
};

export default CallList;