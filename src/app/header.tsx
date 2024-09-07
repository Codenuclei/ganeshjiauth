import Image from 'next/image';
import '@/pages/globals.css';
import VOT from '@/pages/vote.webp';
export default function Header() {
    return (
        <div><header>
        <div>
          {/* Use Next.js Image component for optimized images */}
          <Image src={VOT} alt="VoteX Logo" width={50} height={50} />
          <h1>VoteX</h1>
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/auth/signup">Register</a>
          <a href="/Dashboard">Voting</a>
          <a href="auth/news">News</a>
          <a href="/Results">Results</a>
          <a href="/Faqs">FAQs</a>
          <a href="/Profile">My Account</a>
        </nav>
      </header>
        </div>
    );
    }