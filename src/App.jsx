import { Route,Routes } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Jobs from "./components/jobs";
import ProtectedRoute from "./components/protectedRoute";
import NotFound from "./components/notFound";
import JobItemsDetails from "./components/jobItemDetails";

const App = ()=>{


    return (

        <Routes>

                <Route path = "/" element = {<ProtectedRoute Component = {Home}/>}></Route>

                <Route path = "/jobs" element = {<ProtectedRoute Component = {Jobs}/>}></Route>

                <Route path = "/jobs/:id" element = {<ProtectedRoute Component = {JobItemsDetails}/>}></Route>


                <Route path = "/login" element = {<Login/>}></Route>

                <Route path = "/*" element = {<NotFound/>}></Route>

        </Routes>
    )
}


export default App;