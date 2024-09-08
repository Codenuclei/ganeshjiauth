import Header from '@/app/header';
import React, { useState } from 'react';

function FAQComponent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is this website for?',
      answer: 'This website allows eligible users to participate in online voting for elections, surveys, or polls. It ensures secure, transparent, and efficient voting for individuals or organizations.'
    },
    {
      question: 'How do I register to vote?',
      answer: 'To register, click on the "Register" button and complete the form with your personal details. You may need to provide an email, phone number, or identification depending on the specific election rules.'
    },
    {
      question: 'Who can vote?',
      answer: 'Eligibility depends on the specific election. Generally, registered users who meet the age and residency requirements set by the organizers can vote. Specific criteria will be provided on the election details page.'
    },
    {
      question: 'How do I cast my vote?',
      answer: 'Once logged in, navigate to the "Current Elections" section, select the election you\'re eligible for, and follow the on-screen instructions to cast your vote. Ensure you review your selections before submitting.'
    },
    {
      question: 'Is my vote confidential?',
      answer: 'Yes. We use advanced encryption methods to ensure that all votes are cast anonymously. Your identity will not be linked to your vote to ensure privacy and fairness.'
    },
    {
      question: 'Can I change my vote after submitting it?',
      answer: 'Once your vote has been submitted, it cannot be changed. Make sure to review your selections before finalizing your vote.'
    },
    {
      question: 'What should I do if I forgot my login details?',
      answer: 'Click on the "Forgot Password" link on the login page. You’ll be prompted to enter your registered email to receive a link to reset your password.'
    },
    {
      question: 'What kind of elections can I vote in?',
      answer: 'The types of elections may vary. The website could host general elections, local elections, organizational elections, or polls and surveys. Each election’s details and eligibility criteria will be listed.'
    },
    {
      question: 'How secure is this platform?',
      answer: 'We use state-of-the-art security measures, including end-to-end encryption, multi-factor authentication (MFA), and secure servers to protect user data and ensure the integrity of the voting process.'
    },
    {
      question: 'How can I verify that my vote was counted?',
      answer: 'You will receive a confirmation after your vote is submitted. Depending on the election, you may also receive a receipt or token that verifies your vote has been recorded. All votes are counted anonymously to ensure voter privacy.'
    },
    {
      question: 'Is there a deadline for voting?',
      answer: 'Yes, each election has a deadline. Check the election details on the website to know the exact dates and times when voting begins and ends.'
    },
    {
      question: 'Can I vote using a mobile device?',
      answer: 'Yes, our platform is fully responsive, meaning you can vote using a smartphone, tablet, or any other mobile device with internet access.'
    },
    {
      question: 'I am having technical issues. What should I do?',
      answer: 'If you experience any technical difficulties, please visit our <a href="#">Support Page</a> or contact us at <a href="mailto:support@votingsite.com">support@votingsite.com</a>. We will help resolve the issue as quickly as possible.'
    },
    {
      question: 'What browsers are supported?',
      answer: 'Our website works best on the latest versions of Chrome, Firefox, Safari, and Edge. For security reasons, we recommend using up-to-date browsers.'
    },
    {
      question: 'Will there be any charges for voting?',
      answer: 'No, voting on this platform is free of charge for users. However, some elections may require registration or qualification, which will be specified by the election organizers.'
    },
    {
      question: 'How are results announced?',
      answer: 'Election results will be available on the website after the voting period ends. You can visit the “Election Results” section to see the final tallies.'
    }
  ];

  return (<div>
    <Header />
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h2 style={{ color: '#2C3E50' }}>Frequently Asked Questions (FAQ)</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-section" style={{ marginBottom: '20px' }}>
          <h3
            onClick={() => toggleAnswer(index)}
            style={{
              color: '#2980B9',
              cursor: 'pointer',
              marginBottom: '10px'
            }}
          >
            {index + 1}. {faq.question}
          </h3>
          <p
            style={{
              display: openIndex === index ? 'block' : 'none',
              margin: 0,
              padding: '10px',
              borderLeft: '3px solid #2980B9',
              backgroundColor: '#ECF0F1'
            }}
            dangerouslySetInnerHTML={{ __html: faq.answer }}
          />
        </div>
      ))}
    </div></div>
  );
}

export default FAQComponent;
