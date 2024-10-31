import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !role || !password) {
      setError('Todos los campos son obligatorios');
      return;
    }
    setError(''); // Limpiar error si se completa correctamente
    // Aquí iría la lógica de registro
    console.log("Nombre:", name, "Correo:", email, "Role:", role, "Contraseña:", password);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input 
            type="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Ingresa tu correo"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Rol</label>
          <select 
            className="form-control" 
            value={role} 
            onChange={(e) => setRole(e.target.value)}>
            <option value="">Selecciona un rol</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input 
            type="password" 
            className="form-control" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Ingresa tu contraseña"
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
}

export default Register;
