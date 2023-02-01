import { useState, useEffect } from "react";
import axios from 'axios';
// Axios configuration for fetching from the API given, this is static information.
const config = {
  baseURL: 'https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app',
  responseType: 'json',
  headers: {
    'Access-Control-Allow-Origin': 'https://charming-bat-singlet.cyclic.app/',
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json'
  }
};

const useCallData = function(props) {
  const [callsState, setCallsState] = useState([]);
  const [callDetails, setCallDetails] = useState([]);

  useEffect(() => {
    axios.get('/activities', config)
      .then(res => {
        setCallsState(res.data);
      })
      .catch(err => {
        if (err.status === 404) {
          console.log('Error: API Server needs to warm up :)'); // API server is on a free service and is not always up
        }
        if (err.status !== 404) {
          console.log(err);
        }
      });
  }, []);

  // Makes an api patch req using axios for the call of the id, and will change it between true and false.
  // It will then update the callsState so it updates for the user on a successful response. 
  const archiveToggle = function(id, archived) {
    const data = {
      'is_archived': !archived
    };
    const url = `/activities/${id}`;
    return axios.patch(url, data, config)
      .then(res => {
        setCallsState(prevCalls => prevCalls.map(call => {
          if (call.id === id) {
            return { ...call, ...data};
          }
          return call;
        })) 
      })
      .catch(err => {
        if (err.status === 404) {
          console.log('Error: API Server needs to warm up :)'); // API server is on a free service and is not always up
        }
        if (err.status !== 404) {
          console.log(err);
        }
      });
  };

  const getCallDetails = function(id) {
    const url = `/activities/${id}`;
    axios.get(url, config)
      .then(res => {
        setCallDetails(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return {
    callsState,
    archiveCall: archiveToggle,
    getCallDetails,
    callDetails
  }
};

export default useCallData;