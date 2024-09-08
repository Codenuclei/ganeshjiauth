import React from 'react';
import styles from '@/pages/auth/faq.css'; // Adjust the import path if necessary
import Header from '@/app/header';

const ContactUs: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
        // For example, you could use fetch or axios to submit form data
        // const formData = new FormData(event.currentTarget);
        // fetch('/api/contact', { method: 'POST', body: formData });
    };

    return (
        <div className={styles.contactContainer}>
            <Header />  
            <h1>Contact Us</h1>
            <p>
                If you have any questions, feedback, or technical issues, feel free to contact us. We’re here to help you have a smooth and secure voting experience.
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows={5} placeholder="Your message" required></textarea>

                <button type="submit">Send Message</button>
            </form>
            <div className={styles.contactInfo}>
                <p>Email: <a href="mailto:support@votingsite.com">support@votingsite.com</a></p>
                <p>Phone: +91 1800-270-7444</p>
                <p>Address: Lovely Professional University, Jalandhar - Delhi, Grand Trunk Rd, Phagwara, Punjab 144411</p>
            </div>
        </div>
    );
};

export default ContactUs;
