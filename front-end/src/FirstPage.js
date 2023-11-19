import React from 'react';
import logo from './images/logo.png';
import burger from './images/confusedburger.png';
// import { Link } from 'react-router-dom';


const FirstPage = () => {
    const logoStyle = {
        width: '189px',
        height: '54px',
        position: 'absolute',
        top: '32px',
        left: '55px',
      };

      const exclusiveDeals = {
        width: '189px',
        height: '54px',
        top: '32px',
        left: '299px',
        color: '#004225',
        fontFamily: 'Judson',
        fontSize: '30px',
        fontWeight: '700',
        lineHeight: '35px',
        textAlign: 'center',
        position: 'absolute',
        paddingTop: '15px',
        cursor: 'pointer',
      };

      const aboutus = {
        width: '189px',
        height: '54px',
        top: '32px',
        left: '500px',
        color: '#004225',
        fontFamily: 'Judson',
        fontSize: '30px',
        fontWeight: '700',
        lineHeight: '35px',
        textAlign: 'center',
        position: 'absolute',
        paddingTop: '15px',
        cursor: 'pointer',
      };

      const loginbutton = {
        width: '189px',
        height: '54px',
        top: '32px',
        right: '32px',
        backgroundColor: '#FFB000B2',
        borderRadius: '50px',
        boxShadow: '0px 5px 4px 0px #00000040',
        color: '#004225',
        fontFamily: 'Judson',
        fontSize: '30px',
        fontWeight: '700',
        lineHeight: '35px',
        textAlign: 'center',
        position: 'absolute',
        paddingTop: '15px',
        cursor: 'pointer',
      };

    const burgerStyle = {
        width: '400px',
        height: '400px',
        position: 'absolute',
        top: '200px',
        left: '100px',
        
    };

    const pStyle = {
        fontFamily: 'Montserrat',
        fontSize: '80px',
        fontWeight: '700',
        lineHeight: '98px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: '#004225',
        position: 'absolute',
        top: '200px',
        left: '600px',

    };

    const p2Style = {
        fontFamily: 'Pecita',
        fontSize: '30px',
        fontWeight: '400',
        lineHeight: '36px',
        letterSpacing: '0em',
        textAlign: 'left',
        color: '#004225',
        position: 'absolute',
        top: '500px',
        left: '600px',

    };

  const starthere = {
    width: '200px',
    height: '65px',
    backgroundColor: '#004225',
    boxShadow: '0px 5px 4px 0px #00000040',
    borderRadius: '20px',
    color: 'white',
    fontSize: '20px',
    fontWeight: '500',
    fontAlign: 'center',
    position: 'absolute',
    bottom: '20px', 
    right: '50px',  
    cursor: 'pointer',
};

  

  return (
    <div>
        <div>
            <img src={logo} alt="logo of platewise" style={logoStyle} />
            <div style={exclusiveDeals} onClick={() => alert('Navigate to "Exclusive Deals"')}>
                ExclusiveDeals
            </div>
            <div style={aboutus} onClick={() => alert('Navigate to "About Us"')}>
                About Us
            </div>
        </div>
        {/* <div>
            <img src={logo} alt="logo of platewise" style={logoStyle} />
            <Link to="/exclusive-deals">
                <button>Exclusive Deals</button>
            </Link>
            <Link to="/about-us">
                <button>About Us</button>
            </Link>
        </div> */}

      <div style={loginbutton} onClick={() => alert('Navigate to "LOGIN"')}>
        Login
      </div>

      <div>
        <img src={burger} alt="Confused burger" style={burgerStyle}/>
      </div>
      <div style={pStyle}>
        <p>Confused about <br /> what to eat?</p>
       </div>

       <div style={p2Style}>
        <p>We Make Decisions Deliciously Simple</p>
        </div>
      
      <button style={starthere}>
        Start here
      </button>
    </div>
  );
}

export default FirstPage;
