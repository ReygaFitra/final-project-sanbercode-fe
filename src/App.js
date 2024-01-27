import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import { GlobalProvider } from './Context/GlobalContext';
import Layout from './Layout/Layout';
import ListData from './Pages/Dashboard/ListData';
import FormData from './Pages/Dashboard/FormData';
import LayoutDashboard from './Layout/LayoutDashboard';
import Jobs from './Pages/Home/Jobs';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import LoginRoute from './Routes/LoginRoute';
import UserRoute from './Routes/UserRoute';
import Detail from './Pages/Dashboard/Detail';
import ChangePassword from './Pages/Dashboard/ChangePassword';
import Page404 from './Pages/Error/Page404';
import Profile from './Pages/Dashboard/Profile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />

            <Route
              path="/login"
              element={
                <LoginRoute>
                  <Layout>
                    <Login />
                  </Layout>
                </LoginRoute>
              }
            />

            <Route
              path="/register"
              element={
                <LoginRoute>
                  <Layout>
                    <Register />
                  </Layout>
                </LoginRoute>
              }
            />

            <Route
              path="/Jobs"
              element={
                <Layout>
                  <Jobs />
                </Layout>
              }
            />

            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />

            <Route
              path="/dashboard"
              element={
                <UserRoute>
                  <Dashboard />
                </UserRoute>
              }
            />

            <Route
              path="/dashboard/list-job-vacancy"
              element={
                <UserRoute>
                  <LayoutDashboard>
                    <ListData />
                  </LayoutDashboard>
                </UserRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <UserRoute>
                  <LayoutDashboard>
                    <Profile />
                  </LayoutDashboard>
                </UserRoute>
              }
            />

            <Route
              path="/profile/change-password"
              element={
                <UserRoute>
                  <LayoutDashboard>
                    <ChangePassword />
                  </LayoutDashboard>
                </UserRoute>
              }
            />

            <Route
              path="/dashboard/list-job-vacancy/:idDetail"
              element={
                <UserRoute>
                  <Detail />
                </UserRoute>
              }
            />

            <Route
              path="/dashboard/list-job-vacancy/form"
              element={
                <UserRoute>
                  <LayoutDashboard>
                    <FormData />
                  </LayoutDashboard>
                </UserRoute>
              }
            />

            <Route
              path="/dashboard/list-job-vacancy/form/edit/:idData"
              element={
                <UserRoute>
                  <LayoutDashboard>
                    <FormData />
                  </LayoutDashboard>
                </UserRoute>
              }
            />

            <Route path="*" element={<Page404 />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
