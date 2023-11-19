import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
// import ExclusiveDeals from './Exclusive Deals';
// import AboutUs from './About Us';

const App = () => {
  return (
    <div>
      <FirstPage />
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<FirstPage />} />
    //     <Route path="/exclusive-deals" element={<ExclusiveDeals />} />
    //     <Route path="/about-us" element={<AboutUs />} />
    //   </Routes>
    // </Router>
  );
}

export default App;