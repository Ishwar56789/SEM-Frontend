// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Expense from './components/ExpensePage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/expenses" element={<Expense />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





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


