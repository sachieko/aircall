import CallItem from "./CallItem";
import CallItemDetail from "./CallItemDetail";

// Placeholder data here
const calls = [
  {
    id: 1,
    created_at: '2023-01-31',
    direction: 'inbound',
    from: '1-123-1234',
    to: '9-999-9999',
    via: '33 6 45 13 53 91',
    duration: 187,
    is_archived: false,
    call_type: 'answered'
  },
  {
    id: 2,
    created_at: '2023-01-31',
    direction: 'inbound',
    from: '1-123-1234',
    to: '9-999-9999',
    via: '33 6 45 13 53 91',
    duration: 124,
    is_archived: false,
    call_type: 'answered'
  },
  {
    id: 3,
    created_at: '2023-01-31',
    direction: 'inbound',
    from: '1-123-1234',
    to: '8-888-1234',
    via: '33 6 45 13 53 91',
    duration: 245,
    is_archived: false,
    call_type: 'answered'
  }
];

const ActivityList = () => {
  const callItems = calls.map(call => {
    return <CallItem />
  });

  return (
    <div className="activity-list">{callItems}</div>
  );
};

export default ActivityList;