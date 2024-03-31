import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import CreateRecipe from "./pages/CreateRecipe.jsx";
import RecipeDetail from "./pages/RecipeDetail.jsx";
import Header from './components/Header.jsx'

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}
function App() {


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }/>
        <Route
          path="/create_recipe"
          element={
          <ProtectedRoute>
            <CreateRecipe/>
          </ProtectedRoute>
        }/>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/recipes/:id" element={<RecipeDetail/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
