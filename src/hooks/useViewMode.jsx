import { useState } from 'react';

const useViewMode = function(viewmode) {
  const [mode, setMode] = useState(viewmode);

  return {
    mode,
    setMode
  };
};

export default useViewMode;