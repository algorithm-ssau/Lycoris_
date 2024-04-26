// import Reactfrom from 'react';
import './styles/App.css';
import { HomePage, ShopItemsPage } from './pages';
import { HeaderNav } from './components';

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
      <HeaderNav/>
      <HomePage/>
      <ShopItemsPage/>        
    </div>
  );
}

export default App;
