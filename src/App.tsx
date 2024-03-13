import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './Routes';
import mainlayout from './layouts/Mainlayout';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/Mainlayout';
function App() {
  return (
    <>
      <Router>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              const Layout = route.layout || mainlayout;
              return (
                <Route key={index} path={route.path} element={<Layout> <Page /> </Layout>}/>
              );
            })}
            <Route path="*" element={<MainLayout> <NotFound/> </MainLayout>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;