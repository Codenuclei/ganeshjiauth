import React from 'react';
import Image from 'next/image';
import '@/pages/globals.css';
import BC from '@/pages/bc.jpg';
import VOT from '@/pages/vote.webp';
const HomePage: React.FC = () => {
  return (
    <div >
      <header>
        <div>
          {/* Use Next.js Image component for optimized images */}
          <Image src={VOT} alt="VoteX Logo" width={50} height={50} />
          <h1>VoteX</h1>
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/auth/signup">Register</a>
          <a href="/Dashboard">Voting</a>
          <a href="/News">News</a>
          <a href="/Results">Results</a>
          <a href="/Faqs">FAQs</a>
          <a href="/Profile">My Account</a>
        </nav>
      </header>

      <section className="hero">
        <div className="content">
          <div className="slogan">
            <h2>Vote for the Future</h2>
            <p>Vote responsibly to a responsible party.</p>
            <a href="#" className="btn">Next</a>
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
