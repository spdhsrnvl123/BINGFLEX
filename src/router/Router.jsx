import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "pages/Home";
import Login from "pages/Login";
import SignUp from "pages/Signup";
import TvShow from "pages/Tvshow";
import Map from "pages/Map";
import Header from "components/domain/Header";

function Router(){
    return(
        <BrowserRouter>
            <Header />
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