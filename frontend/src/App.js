// import Reactfrom from 'react';
import './styles/App.css';
import { HomePage, PurchasePage, ShopItemsPage } from './pages';
import { HeaderNav } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // This just code that i copied from video

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

  // TODO: route to /flower
  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopItemsPage/>} />
        <Route path="/flower" element={<PurchasePage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
