import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Routes";
import mainlayout from "./layouts/Mainlayout/Mainlayout";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./layouts/Mainlayout/Mainlayout";
import axios from "axios";
import { Toaster } from "react-hot-toast";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout || mainlayout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    {" "}
                    <Page />{" "}
                  </Layout>
                }
              />
            );
          })}
          <Route
            path="*"
            element={
              <MainLayout>
                {" "}
                <NotFound />{" "}
              </MainLayout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
