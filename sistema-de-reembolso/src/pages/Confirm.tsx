import { Navigate, useLocation } from "react-router"

export function Confirm() {
const location = useLocation()

if(!location.state?.fromSubmit) {
    return <Navigate to="/" />
}

    return <h1>Confirm</h1>
}