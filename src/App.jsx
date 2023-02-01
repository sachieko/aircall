import './styles/App.scss';
import Header from './components/Header';
import CallList from './components/CallList';
import Menu from './components/Menu';
import useViewMode from './hooks/useViewMode';

const App = () => {
  const { mode, setMode } = useViewMode('ACTIVITY');

  return (
    <div id='App'>
      <Header/>
      <div className='container'>
        <Menu setMode={setMode} mode={mode} />
        <div className="container-view">
          <CallList mode={mode} />
        </div>
      </div>
    </div>
  );
};

export default App;

