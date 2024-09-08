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
          <a href="/auth/das">Voting</a>
          <a href="/auth/news">News</a>
          <a href="/auth/res">Results</a>
          <a href="/auth/faq">FAQs</a>
          <a href="/auth/profile">My Account</a>
        </nav>
      </header>
        </div>
    );
    }