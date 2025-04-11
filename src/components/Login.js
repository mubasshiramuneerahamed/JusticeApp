// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './AuthForm.css';

// const Login = () => {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/signin', form);
//       localStorage.setItem('token', res.data.token);
//       alert(`Welcome, ${res.data.user.name}`);
//       navigate('/news');
//     } catch (err) {
//       alert(err.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <input name="email" type="email" placeholder="Email Address" onChange={handleChange} required />
//         <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit">Login</button>
//         <p onClick={() => navigate('/')} className="form-link">Don't have an account? Sign up</p>
//       </form>
//     </div>
//   );
// };

// export default Login;





import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './AuthForm.css';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signin', form);
      localStorage.setItem('token', res.data.token);
      alert(`Welcome, ${res.data.user.name}`);
      navigate('/news');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input name="email" type="email" placeholder="Email Address" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
        <p className="form-link" onClick={() => navigate('/')}>Don't have an account? Sign up</p>
        <p className="form-link"><Link to="/">← Back to Home</Link></p>
      </form>
    </div>
  );
};

export default Login;
