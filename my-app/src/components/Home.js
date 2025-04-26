import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SignUpModal from './SignUpModal';
import SignInModal from './SignInModal';
import styles from './styles/Home.module.css';

const Home = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUpModal(true);
  };

  const handleSignInClick = () => {
    setShowSignInModal(true);
  };

  const handleCloseModal = () => {
    setShowSignUpModal(false);
    setShowSignInModal(false);
  };

  const features = [
    {
      title: 'Real-Time Tracking',
      description: 'Monitor your expenses as they happen, ensuring you stay on top of your finances.',
    },
    {
      title: 'Budget Planning',
      description: 'Set monthly budgets and receive alerts when you approach your limits.',
    },
    {
      title: 'Insightful Reports',
      description: 'Gain insights into your spending habits with detailed charts and summaries.',
    },
    {
      title: 'Secure Data',
      description: 'Your financial data is encrypted and stored securely to protect your privacy.',
    },
    {
      title: 'Multi-Currency Support',
      description: 'Manage expenses in multiple currencies with real-time exchange rates.',
    },
    {
      title: 'User-Friendly Interface',
      description: 'Navigate through the app with ease, thanks to our intuitive design.',
    },
  ];

  return (
    <div>
      <Navbar onSignInClick={handleSignInClick} />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>Smart Expense Manager</h1>
          <p className={styles.subtitle}>
            Track your expenses, manage your budget, and stay in control of your finances!
          </p>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </section>

        {/* Call-to-Action Section */}
        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Take Control of Your Finances Today</h2>
          <button className={styles.ctaButton} onClick={handleSignUpClick}>
            Sign Up Now
          </button>
        </section>
      </div>
      <Footer />
      {showSignUpModal && <SignUpModal onClose={handleCloseModal} />}
      {showSignInModal && <SignInModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Home;
