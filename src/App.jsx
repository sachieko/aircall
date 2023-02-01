import './styles/App.scss';
import Header from './components/Header';

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">Some activities should be here</div>
    </div>
  );
};

export default App;

