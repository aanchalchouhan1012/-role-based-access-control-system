import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ allowedRoles, children }) {
  const { role, loading } = useAuth();

  
  if (loading) {
    return (
      <div className="loading">
        <h2>Checking Access...</h2>
        <p>Please wait...</p>
      </div>
    );
  }


  if (!role) {
    return <Navigate to="/login" replace />;
  }

  
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/access-denied" replace />;
  }

  return children;
}

export default ProtectedRoute;