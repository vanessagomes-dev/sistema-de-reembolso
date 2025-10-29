import { BrowserRouter } from "react-router";
import { AuthRoutes } from "./AuthRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";

export function Routes(){
    return(
        <BrowserRouter>
            <ManagerRoutes />
        </BrowserRouter>
    )
}