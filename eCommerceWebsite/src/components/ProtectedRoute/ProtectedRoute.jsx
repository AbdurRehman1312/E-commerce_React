import { Navigate } from "react-router-dom"
const ProtectedRoute = ({ children, user }) => {
    return user ? children : <Navigate to="/login"></Navigate>
}

export default ProtectedRoute