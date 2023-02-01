import Button from "./Button";

const Menu = function({ setMode }) {
  return (
    <div className="menu">
      <Button text={'Inbox'} onClick={() => setMode('ACTIVITY')} />
      <Button text={'All Calls'} onClick={() => setMode('ALL')} />
      <Button text={'Archived'} onClick={() => setMode('ARCHIVED')} />
    </div>
  );
};

export default Menu;