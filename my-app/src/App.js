import React from 'react';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;



// import React, { useState } from 'react';
// import SignInModal from './components/SignInModal';
// import ExpensePage from './components/ExpensePage';

// const App = () => {
//   const [token, setToken] = useState('');
//   const [showExpensePage, setShowExpensePage] = useState(false);

//   const handleLoginSuccess = (receivedToken) => {
//     setToken(receivedToken);
//     setShowExpensePage(true); // show ExpensePage directly
//   };

//   return (
//     <div>
//       {showExpensePage ? (
//         <ExpensePage token={token} />
//       ) : (
//         <SignInModal onLoginSuccess={handleLoginSuccess} />
//       )}
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import HomePage from './components/Home';
// import Nav from './components/Navbar';
// import Footer from './components/Footer';
// import SignInModal from './components/SignInModal';
// import SignUpModal from './components/SignUpModal';
// import ExpensePage from './components/ExpensePage';

// const App = () => {
//   const [token, setToken] = useState('');
//   const [showExpensePage, setShowExpensePage] = useState(false);

//   const handleLoginSuccess = (receivedToken) => {
//     setToken(receivedToken);
//     setShowExpensePage(true);
//   };

//   return (
//     <>
//       <HomePage />
//       <Nav />
//       {showExpensePage ? (
//         <ExpensePage token={token} />
//       ) : (
//         <SignInModal onLoginSuccess={handleLoginSuccess} />
//       )}
//       <SignUpModal />
//       <Footer />
//     </>
//   );
// };

// export default App;




// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ExpensePage from './components/ExpensePage';
// import Home from './components/Home';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/expenses" element={<ExpensePage />} />
//         <Route path='/' element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

