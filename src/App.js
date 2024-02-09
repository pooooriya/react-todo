import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoPage from "./components/Pages/Todo";
import LoginPage from "./components/Pages/Login";
import { Layout } from "./components/Layout";
import { GuardRoute } from "./components/GuardRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TodoPage />} />
          <Route
            element={
              <GuardRoute>
                <LoginPage />
              </GuardRoute>
            }
            path="login"
          />
          <Route
            element={
              <GuardRoute>
                <LoginPage />
              </GuardRoute>
            }
            path="blog"
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
