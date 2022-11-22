import Header from './component/header';
import Footer from './component/footer';
import HomeScreen from './component/screenss/HomeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductScreen from './component/screenss/ProductScreen';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <BrowserRouter>
      <Header />
    <Container className='py-3 App'>
      <Routes>

        <Route index element={<HomeScreen />}  />
        <Route path='product/:id' element = {<ProductScreen/>} />

      </Routes>
    </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
