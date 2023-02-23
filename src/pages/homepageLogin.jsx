import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/home_img_desktop.webp';
import useGlobalState from '../context';
import { setSignIn } from '../reducer/action';

const HomepageLogin = () => {
  const [isOpen, setIsopen] = useState(false);
  const [email, setEmail] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    setEmail({ ...email, [e.target.name]: value });
  };
  console.log(email);

  const [, dispatch] = useGlobalState();
  const login = () => {
    if (email.email === 'mohitH@gmail.com' && email.password === '99999') {
      dispatch(
        setSignIn({
          email: 'mohith',
          password: 99999,
        })
      );
      navigate('/dashboard');
    } else {
      alert('wrong email or password');
    }
  };
  return (
    <div>
      <div className='container-fluid '>
        <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
          <div className='sd-header'>
            <div className='login-signup'>
              <ul className='login-header'>
                <button className='login-item'>Login</button>
                <button className='login-item'>Signup</button>
              </ul>
            </div>
          </div>
          <div className='sd-body'>
            <div class='login-form'>
              <form onSubmit={login}>
                <div class='form-group'>
                  <input
                    type='email'
                    name='email'
                    placeholder='E-mail '
                    className='login-email'
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div class='form-group'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='login-email'
                    onChange={(e) => handleChange(e)}
                  />
                  <span class='input-icon'>
                    <i class='fa fa-lock'></i>
                  </span>
                </div>
                <div className='checkbox-logn'>
                  <input
                    type='checkbox'
                    class='form-check-input'
                    id='exampleCheck1'
                  />
                  <label class='form-check-label' for='exampleCheck1'>
                    Do not remember me
                  </label>
                </div>
                <div className='forget-form'>
                  <a class='reset-psw' href='#'>
                    Forgot your password?
                  </a>
                </div>
                <button class='login-btn'>Login</button>
                <div class='seperato'>
                  <p className='breakline'></p>
                  <p className='socialmedia'>Or Continue With </p>
                </div>

                <div class='social-icon'>
                  <button type='button' className='faApple'>
                    <i class='fa-brands fa-apple'></i>
                  </button>
                  <button type='button' className='faFacebook'>
                    <i class='fa fa-facebook'></i>
                  </button>
                  <button type='button' className='faGoogle'>
                    <i class='fa fa-google' aria-hidden='true'></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
      <div className='Top-navbar'>
        <div className='top-navbar-mini'>
          <div className='nav-left'>
            <nav class='navbar navbar-expand-lg navbar-light bg-light'>
              <a class='navbar-brand' href='#'>
                LOGO
              </a>
              <button
                class='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span class='navbar-toggler-icon'></span>
              </button>

              <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul class='navbar-nav mr-auto'>
                  <li class='nav-item active'>
                    <a class='nav-link' href='#'>
                      About Us
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>
                      Help Center
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='#'>
                      Assets
                    </a>
                  </li>
                  <li class='nav-item dropdown'>
                    <a
                      class='nav-link dropdown-toggle'
                      href='#'
                      role='button'
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      More
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className='nav-right'>
            <div className='nav-btn'>
              <button className='nav-btn-login' onClick={ToggleSidebar}>
                Login
              </button>
            </div>
            <div className='nav-btn'>
              <button className='nav-btn-signup' onClick={ToggleSidebar}>
                Registration
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='home-section'>
        <div className='home-content'>
          <h1 className='home-h1'>Profitability on the rise</h1>
          <h3 className='home-h5'>
            A trading platform that supports your financial goals.
          </h3>
          <button className='home-btn-trading'>
            Start Trading - It's Free
          </button>
        </div>
        <div className='home-img'>
          <div className='bnr-image'>
            <img className='home-bnr' alt='trading_image' src={image}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageLogin;
