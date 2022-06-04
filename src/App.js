import './App.css';
import { data } from './TMPData'
import Event from './components/event'
import NavigationBar from './components/navigationBar';


function App() {

  const renderEvents = data.map(event => {
    return <Event event={event} key={event.title} />
  })

  return (
    <div className="App">
      <NavigationBar />
      <div className="horizontal-view">
        <div className="labels">
          {renderEvents}
        </div>
        <div className="timeline">
        </div>
      </div>
      <h3 className="yearIndicator">
        <a href="#3102">Test</a>
      </h3>
    </div>
  );
}

export default App;