import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Routes/LogIn";
import SignUp from "./Routes/SignUp";
import TvShow from "./Routes/TvShows";
import Application from "./Routes/Application";
import Map from "./Routes/Map";
import Menu from "./components/Menu"


function Router(){
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/tvshows" element={<TvShow />}></Route>
                <Route path="/Application" element={<Application />}></Route>
                <Route path="/Map" element={<Map />}></Route>
                <Route path="/login" element = {<Login />}></Route>
                <Route path="/signup" element = {<SignUp />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;