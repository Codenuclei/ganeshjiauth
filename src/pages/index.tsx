import React from 'react';
import Image from 'next/image';
import '@/pages/globals.css';
import BC from '@/pages/bc.jpg';
import Header from '@/app/header';
import VOT from '@/pages/vote.webp';
import sviv from '@/pages/right-arrow-svgrepo-com.svg';
const HomePage: React.FC = () => {
  return (
    <div >
      
      <Header />

      <section className="hero">
        <div className="content">
          <div className="slogan">
            <h2>Vote for the Future</h2>
            <p>Vote responsibly to a responsible party.</p>
            <a href="/auth/signup" className="btn">Sign Up <Image src={sviv} className="downer" height={20} width={20} alt={' Arrow'}/></a>
          </div>
          <div className="illustration">
            {/* Use Next.js Image component for optimized images */}
            <Image src={BC} alt="Vote Illustration" width={500} height={300} />
          </div>
        </div>
      </section>

      <footer>
        <ul>
          <li><a href="/LAR">Learn More</a></li>
          <li><a href="/CV">Cast Your Vote</a></li>
          <li><a href="/RP">Report a Problem</a></li>
        </ul>
      </footer>
    </div>
  );
};

export default HomePage;
