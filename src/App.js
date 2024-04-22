import { Routes, Route} from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/signin/sign-in.component";


const Shop = () => {
  return <h1>I am shop page</h1>
}


const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />}/>
        <Route path="sign-in" element={<SignIn />} />
      </Route>


    </Routes>
  )
}

export default App;


//  {/* since index is mentioned in route, all Index routes render into their PARENT's <Outlet /> at parents URL */}
// Routes allows to set different routes by using <Route path="" element={}/> 
