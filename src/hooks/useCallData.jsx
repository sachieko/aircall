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
        console.log(err);
      });
  }, []);

  const archiveCall = function(id, archived) {
    const data = {
      'is_archived': !archived
    };
    const url = `/activities/${id}`;
    axios.patch(url, data, config)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
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
    archiveCall,
    getCallDetails,
    callDetails
  }
};

export default useCallData;