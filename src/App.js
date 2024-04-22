import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";

const App = () => {
  return (
    // Routes allows to set different routes by using <Route path="" element={}/> 
    <Routes>
      <Route path="/" element={<Home />}/> 
    </Routes>
  )
}

export default App;
