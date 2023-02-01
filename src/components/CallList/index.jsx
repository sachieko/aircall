import { useState } from "react";
import '../../styles/CallList.scss';
import Activity from "./Activity";

const CallList = function() {
  const [mode, setMode] = useState('ACTIVITY');

  return (
    <div className="call-list">
      {mode === 'ACTIVITY' && <Activity />}
    </div>
  );
};

export default CallList;