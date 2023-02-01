import './styles/App.scss';
import Header from './components/Header';
import ActivityList from './components/ActivityList';

const App = () => {

  return (
    <div className='container'>
      <Header/>
      <div className="container-view">
        <ActivityList />
        </div>
    </div>
  );
};

export default App;

