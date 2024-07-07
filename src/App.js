import { useState } from "react";
import "./index.css";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [features, setFeatures] = useState([
    {
      image: "./images/illustration-features-tab-1.svg",
      header: "Bookmark in one click",
      text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
      image: "./images/illustration-features-tab-2.svg",
      header: "Intelligent search",
      text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },
    {
      image: "./images/illustration-features-tab-3.svg",
      header: "Share your bookmarks",
      text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ]);
  const [openQuestions, setOpenQuestions] = useState([
    false,
    false,
    false,
    false,
  ]);
  const questions = [
    "What is Bookmark?",
    "How can I request a new browser?",
    "Is there a mobile app?",
    "What about other Chromium browsers?",
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) => prev.map((q, i) => (i === index ? !q : q)));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
      setEmail("");
    }
  };

  return (
    <>
      {" "}
      <div className={isMenuOpen ? "menuOpen-App App" : "App"}>
        <header>
          <img
            src="./images/logo-bookmark.svg"
            className="logo"
            alt="bookmark logo"
          />
          <img
            src="./images/icon-hamburger.svg"
            className="menu-icon mobile"
            alt="menu icon"
            onClick={() => setIsMenuOpen(true)}
          />

          <ul className="nav-list desktop">
            <li>features</li>
            <li>pricing</li>
            <li>contact</li>
          </ul>
          <button className="login-button desktop">login</button>
        </header>
        <div className="hero">
          <div className="hero__content">
            <h1>A Simple Bookmark Manager</h1>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="hero__buttons">
              <button className="hero__leftBtn">Get it on Chrome</button>
              <button className="hero__rightBtn">Get it on Firefox</button>
            </div>
          </div>
          <div className="hero__image">
            <img
              src="/images/illustration-hero.svg"
              className="hero-img"
              alt="website illustration"
            />
          </div>
        </div>
        <div className="features">
          <div className="features__header">
            <h2>Features</h2>
            <p>
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </div>
          <div className="features__nav">
            <ul>
              <li
                className={activeTab === 0 ? "active" : ""}
                onClick={() => setActiveTab(0)}
              >
                Simple Bookmarking
              </li>
              <li
                className={activeTab === 1 ? "active" : ""}
                onClick={() => setActiveTab(1)}
              >
                Speedy Searching
              </li>
              <li
                className={activeTab === 2 ? "active" : ""}
                onClick={() => setActiveTab(2)}
              >
                Easy Sharing
              </li>
            </ul>
          </div>
          <div className="feature">
            <div className="feature__image">
              <img
                src={features[activeTab].image}
                alt="bookmarking illustration"
              />
            </div>
            <div className="feature__desc">
              <h2>{features[activeTab].header}</h2>
              <p>{features[activeTab].text}</p>
              <button className="more-button">More Info</button>
            </div>
          </div>
        </div>
        <div className="extensions">
          <div className="extensions__header">
            <h2>Download the extension</h2>
            <p>
              We’ve got more browsers in the pipeline. Please do let us know if
              you’ve got a favourite you’d like us to prioritize.
            </p>
          </div>
          <div className="extension-cards">
            <div className="extension">
              <img
                src="./images/logo-chrome.svg"
                className="extension-logo"
                alt="chrome logo"
              />
              <h3>Add to Chrome</h3>
              <p>Minimum version 62</p>
              <img
                src="./images/bg-dots.svg"
                className="dots"
                alt="dots backgroung"
              />
              <button className="extension-button">
                Add & Install Extension
              </button>
            </div>
            <div className="extension">
              <img
                src="./images/logo-firefox.svg"
                className="extension-logo"
                alt="firefox logo"
              />
              <h3>Add to Firefox</h3>

              <p>Minimum version 55</p>
              <img
                src="./images/bg-dots.svg"
                className="dots"
                alt="dots backgroung"
              />
              <button className="extension-button">
                Add & Install Extension
              </button>
            </div>
            <div className="extension">
              <img
                src="./images/logo-opera.svg"
                className="extension-logo"
                alt="opera logo"
              />
              <h3>Add to Opera</h3>

              <p>Minimum version 46</p>
              <img
                src="./images/bg-dots.svg"
                className="dots"
                alt="dots backgroung"
              />
              <button className="extension-button">
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="questions__header">
            <h2>Frequently Asked Questions</h2>
            <p>
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.
            </p>
          </div>
          {questions.map((question, index) => (
            <div className="question-div" key={index}>
              <div className="question" onClick={() => toggleQuestion(index)}>
                <h4>{question}</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="12"
                  style={{
                    transform: openQuestions[index] ? "rotate(180deg)" : "none",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <path
                    fill="none"
                    stroke={openQuestions[index] ? "#FA5959" : "#5267DF"}
                    stroke-width="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>
              {openQuestions[index] && (
                <p className="answer">
                  Vivamus luctus eros aliquet convallis ultricies. Mauris augue
                  massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
                  luctus eros aliquet convallis ultricies. Mauris augue massa,
                  ultricies non ligula. Suspendisse imperdie tVivamus luctus
                  eros aliquet convallis ultricies. Mauris augue massa,
                  ultricies non ligula. Suspendisse imperdiet.
                </p>
              )}
            </div>
          ))}

          <button className="more-button">More Info</button>
        </div>
        <div className="contact">
          <h5>35,000+ ALREADY JOINED</h5>
          <h2>Stay up-to-date with what we’re doing</h2>
          <div className="form">
            <div className="input">
              <input
                className={emailError ? "input-error" : ""}
                id="emailInput"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                placeholder="Enter your email address"
                required
              />
              {emailError && (
                <>
                  <p className="error">Whoops, make sure it's an email</p>
                  <svg
                    className="error-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <circle cx="10" cy="10" r="10" fill="#FA5959" />
                      <g fill="#FFF" transform="translate(9 5)">
                        <rect width="2" height="7" rx="1" />
                        <rect width="2" height="2" y="8" rx="1" />
                      </g>
                    </g>
                  </svg>
                </>
              )}
            </div>
            <button onClick={handleSubmit} className="contact-button">
              Contact Us
            </button>
          </div>
        </div>
        <footer>
          {" "}
          <img
            src="./images/footer-logo.svg"
            className="logo"
            alt="bookmark logo"
          />
          <ul className="nav-list">
            <li>features</li>
            <li>pricing</li>
            <li>contact</li>
          </ul>
          <div className="social-icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"
              />
            </svg>
          </div>
        </footer>
      </div>
      {isMenuOpen && (
        <div className="menu">
          <div className="menu-header">
            <img
              src="./images/footer-logo.svg"
              className="logo"
              alt="bookmark logo"
            />

            <svg
              className="close-icon"
              onClick={() => setIsMenuOpen(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
            >
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
              />
            </svg>
          </div>
          <ul className="menu-nav">
            <li>features</li>
            <li>pricing</li>
            <li>contact</li>
          </ul>
          <button>login</button>
          <div className="social-icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
