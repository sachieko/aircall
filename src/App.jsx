import './styles/App.scss';
import Header from './components/Header';
import CallList from './components/CallList';

const App = () => {

  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <CallList />
        </div>
    </div>
  );
};

export default App;

