import { HomePage } from '../../pages/HomePage';
import { MenuPage } from '../../pages/MenuPage';
import { ShoppingCartPage } from '../../pages/ShoppingCartPage';
import { Layout } from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path='/menu' element={<MenuPage />}/>
          <Route path='/shopping' element={<ShoppingCartPage />}/>
          <Route path='*' element = {<HomePage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;