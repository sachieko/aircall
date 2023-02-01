import Button from "./Button";

const Menu = function({ mode, setMode }) {
  const ACTIVITY = 'ACTIVITY';
  const ALL = 'ALL';
  const ARCHIVED = 'ARCHIVED';
  return (
    <div className="menu">
      <Button text={'Inbox'} className={mode === ACTIVITY ? 'selected' : null} onClick={() => setMode(ACTIVITY)} />
      <Button text={'All Calls'} className={mode === ALL ? 'selected' : null} onClick={() => setMode(ALL)} />
      <Button text={'Archive'} className={mode === ARCHIVED ? 'selected' : null} onClick={() => setMode(ARCHIVED)} />
    </div>
  );
};

export default Menu;