import {Redirect, Route} from "react-router-dom";
import AuthenticationPage from "./Components/Pages/Authentication/index";
import RegistrationPage from "./Components/Pages/Registration/index";
import HomePage from "./Components/Pages/Home/Index"



function Router(){
  return <div>
    <Route exact path="/" component={HomePage}>
      <Redirect to={"/authentication/index"}/>
    </Route>
    <Route path="/authentication/index" component={AuthenticationPage}/>
    <Route path="/registration/index" component={RegistrationPage}/>
  </div>
}

export default Router;