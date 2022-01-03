import {Route} from "react-router-dom";
import AuthenticationPage from "./Components/Pages/Authentication";
import RegistrationPage from "./Components/Pages/Registration";



function Routes(){
  return <div>
    <Route path="/authentication/index" component={AuthenticationPage}/>
    <Route path="/registration/index" component={RegistrationPage}/>
  </div>
}

export default Routes;