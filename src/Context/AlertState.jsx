import { useState } from "react";
import AlertContext from "./AlertContext";

const AlertState = (props) =>{
    const [alert, setAlert] = useState(null);


    const showAlert = (message, type, duration = 3000) =>{
        setAlert({msg: message, type: type});
        setTimeout(()=>setAlert(null), duration);
    }
    return(
        <AlertContext.Provider value={{alert, showAlert}}>
            {props.children}
        </AlertContext.Provider>
    )
}
export default AlertState
