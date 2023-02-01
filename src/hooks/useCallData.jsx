import { useState, useEffect } from "react";
import axios from 'axios';

const useCallData = function(props) {
  // Fetches all calls
  const [callsState, setCallsState] = useState([]);

  useEffect(() => {
    axios.get('/activities', {
      baseURL: 'https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app',
      responseType: 'json',
      headers: {
        'Access-Control-Allow-Origin': 'https://charming-bat-singlet.cyclic.app/',
        Accept: 'application/json'
      }
    })
      .then(response => {
        setCallsState(response.data);
      });
  }, []);

  return {
    callsState
  }
};

export default useCallData;