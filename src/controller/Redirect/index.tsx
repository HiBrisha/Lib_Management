import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const AutoRedirect = () =>{
    const navigate = useNavigate();

    useEffect(()=>{
        //Direct after 3s
        const timer = setTimeout(()=>{
            navigate('/login')
        },3000);
        return ()=> clearTimeout(timer);
    },[navigate]);

    return(
        <div>
            <h2>You will be redirected in 3 seconds...</h2>
        </div>
    );
}

export default AutoRedirect;