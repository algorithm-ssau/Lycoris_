// import Reactfrom from 'react';
import './styles/App.css';
import { HomePage } from './pages';
// import Counters from './components/Counters';

function App() {
  // const [data, setData] = useState(); 

  // useEffect(() => {
  //   fetch("http://localhost:3000/")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         // setParent('');
  //         setData(result);
  //       },
  //       (error) => {

  //       }
  //     )
  // },
  // []
  // );


  return (
    <div className="App">
      <HomePage/>
        
    </div>
  );
}

export default App;
