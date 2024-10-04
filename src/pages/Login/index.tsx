//./src/pages/Login/index.tsx
import Login_Layout from "../../layout/login";
import { SignUp } from "../../components/form";
export function Login(){
    return(
        <Login_Layout Form={SignUp}/>
    );
}