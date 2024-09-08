  import { useState } from 'react';
  import { useRouter } from 'next/router';
  import '@/pages/auth/globals.css';
  import Header from '@/app/header';

  export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedDocumentType, setSelectedDocumentType] = useState('adhaar'); // Default selected document type
    const [document, setDocument] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [motherName, setMotherName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            password,
            documentType: selectedDocumentType,
            document,
            fatherName,
            motherName,
            mobileNumber,
          }),
        });

        if (!res.ok) {
          const { message } = await res.json();
          throw new Error(message);
        }

        router.push('/auth/signin'); // Redirect to sign-in page after successful sign-up
      } catch (err: any) {
        setError(err.message);
      }
    };

    const handleDocumentTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const type = e.target.value;
      setSelectedDocumentType(type);
      setDocument(''); // Clear document number when changing document type
    };

    return (
      <div className='ssy'>
        <Header />
      <div className="signup-form-container">
        <div className="title">Sign Up</div>
        <div className="text-center mb-4">
          <div className="mb-4"></div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
        </div>
        <form onSubmit={handleSignup} className="form">
          <input
            className="input-field"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <input
            className="input-field"
            type="text"
            placeholder="Father's Name"
            name="fatherName"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            required
          />
          <input
            className="input-field"
            type="text"
            placeholder="Mother's Name"
            name="motherName"
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
            required
          />
          <input
            className="input-field"
            type="tel"
            placeholder="Mobile Number"
            name="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        <center><label className="label"><b>Document Type</b></label></center> 
          <select
            className="select-field"
            name="documentType"
            value={selectedDocumentType}
            onChange={handleDocumentTypeChange}
            required
          >
            <option value="adhaar">Aadhaar</option>
            <option value="pan">PAN</option>
            <option value="drivingLicense">Driving License</option>
          </select>
          <input
            className="input-field"
            type="text"
            placeholder={`Enter ${selectedDocumentType.charAt(0).toUpperCase() + selectedDocumentType.slice(1)} Number`}
            name="documentNumber"
            value={document}
            onChange={(e) => setDocument(e.target.value)}
            required
          />
          <button className="submit-button" type="submit">
            Sign Up
          </button>
          <footer>
            <a href='/auth/signin' className="text-center mt-4 block">Already have an account? Sign in</a>
          </footer>
        </form>
      </div></div>
    );
  }
