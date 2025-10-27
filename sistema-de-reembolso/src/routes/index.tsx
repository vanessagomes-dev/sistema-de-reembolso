import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";

export function Routes(){
    return(
        <BrowserRouter>
            <EmployeeRoutes />
        </BrowserRouter>
    )
}