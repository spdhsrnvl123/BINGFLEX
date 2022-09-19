import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/domain/Home"
import Login from "./components/domain/Login"

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element = {<Login />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;