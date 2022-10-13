import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Routes/HOME";
import Login from "./Routes/LOGIN";
import SignUp from "./Routes/SIGNUP";
import TvShow from "./Routes/TVSHOW";
import Map from "./Routes/MAP";
import Menu from "../components/Menu"


function Router(){
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/tvshows" element={<TvShow />}></Route>
                <Route path="/Map" element={<Map />}></Route>
                <Route path="/login" element = {<Login />}></Route>
                <Route path="/signup" element = {<SignUp />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;