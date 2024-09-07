import { useState } from 'react';
import { useRouter } from 'next/router';
import '@/pages/auth/signin.css';
export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const contentType = res.headers.get('Content-Type');
        
        // Handle non-JSON responses
        if (contentType && contentType.includes('application/json')) {
          const { message } = await res.json();
          throw new Error(message);
        } else {
          const errorText = await res.text();
          throw new Error(`Unexpected response format: ${errorText}`);
        }
      }

      const { token } = await res.json();
      localStorage.setItem('token', token); // Store JWT token in local storage
      router.push('/'); // Redirect to home page after successful sign-in
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-form-container">
    <div className="text-center mb-4">
      <div className="title">Sign In</div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
    </div>
    <form onSubmit={handleSignin} className="form">
      <input
        className="input-field"
        type="email"
        placeholder="Enter your email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="input-field"
        type="password"
        placeholder="Enter your password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="submit-button" type="submit">
        Sign In
      </button>
      <a href='/auth/signup' className="text-center mt-4 block">Don't have an account? Sign up</a>
      <a href='/auth/forgot-password' className="text-center mt-4 block">Forgot password?</a>
    </form>
  </div>
  );
}
