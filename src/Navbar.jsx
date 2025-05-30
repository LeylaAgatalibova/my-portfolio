
// // import { Link } from 'react-router-dom';
// // import React, { useState } from 'react';
// // import './Navbar.css'; 
// // function Navbar() {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   return (
// //     <nav className="navbar">

// //     <div className="logo">FastMaster</div>
  
// //     <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
// //     <li><Link to="/">Home</Link></li>
// //         <li><Link to="/about">About</Link></li>
// //         <li><Link to="/projects">Projects</Link></li>
// //         <li><Link to="/contact">Contact</Link></li>
// //         <li><Link to="/gallery">Gallery</Link></li>
// //         <li><Link to="/artcollections">Art Collections</Link></li>
// //     </ul>
  
// //     <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
// //       ☰
// //     </div>
// //   </nav>
  
// //   );
// // }

// // export default Navbar;
// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';
// import './Navbar.css'; 

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">

//       <div className="logo">
//         <Link to="/">
//           <img src="/images/Rhouse.jpg" alt="ZHouse Logo" className="logo-img" />
//         </Link>
//       </div>

//       <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/projects">Projects</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/gallery">Gallery</Link></li>
//         <li><Link to="/artcollections">Art Collections</Link></li>
//       </ul>

//       <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
//         ☰
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Navbar.css'; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menüden bir linke tıklanınca kapat
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={handleLinkClick}>
          <img src="/images/Rhouse.jpg" alt="ZHouse Logo" className="logo-img" />
        </Link>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
        <li><Link to="/projects" onClick={handleLinkClick}>Projects</Link></li>
        <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
        <li><Link to="/gallery" onClick={handleLinkClick}>Gallery</Link></li>
        <li><Link to="/artcollections" onClick={handleLinkClick}>Art Collections</Link></li>
      </ul>

      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
