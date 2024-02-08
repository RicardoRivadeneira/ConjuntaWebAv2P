import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <h1>Cargando</h1>;

  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}

// Añade la validación de PropTypes
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
