import './App.css';
import {Routes,Route} from "react-router-dom";
import {Layout} from "./Layout/Layout";
import {Students} from "./pages/Students/Students";


function App() {
  return (
      <Routes>
        <Route path={"/"} element={<Layout/>}>
          <Route index element={<Students/>}></Route>
        </Route>
      </Routes>
  );
}

export default App;
