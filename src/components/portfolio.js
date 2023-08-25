import React from "react";
import "./portfolio.css";

function Portfolio() {
  const colors = [
    "#336699",
    "#FF5733",
    "#33CC99",
    "#ff4040",
    "#ffc0cb",
    "#ffd700"
  ];

  function myFunction() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.getElementById("head").style.backgroundColor = colors[randomIndex];
  }

  return (
    <>
      <header id="head">
        <h1>Welcome to my Profile</h1>
        <br />
        <button onClick={myFunction}>click here</button>
      </header>
      <div id="container">
        <div id="image-div">
          <img src="ankit.jpg" alt="profile pic" width="300" id="image" />
          <br />
        </div>
        <h2 id="name">Ankit Sharma</h2>
        <p className="text">Front-End Web Developer</p>
        <hr />
        <h3 className="mini-heading">About Me</h3>
        <p className="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id totam
          rerum, voluptatum praesentium vero repellendus quae dolorum magni
          reprehenderit doloribus nisi nulla nostrum odio. Sit deleniti commodi
          quidem velit in?
        </p>
        <hr />
        <h3 className="mini-heading">Contact Info</h3>
        <div className="text-two">
          <p>
            <strong>Email</strong>: ankitbagda2107@gmail.com
          </p>
          <p>
            <strong>Mobile Number</strong>: (+91) 0123456789
          </p>
          <p>
            <strong>Website - </strong>
            <a
              href="http://127.0.0.1:5500/Portfolio.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Portfolio Website Link
            </a>
          </p>
        </div>
        <hr />
        <h1 className="mini-heading">Skills</h1>
        <ul className="text">
          <li>HTML 5</li>
          <li>React</li>
          <li>Javascript</li>
          <li>CSS</li>
          <li>Bootstrap</li>
        </ul>
        <hr />
        <h1 className="mini-heading">Contact US</h1>
        <form action="" className="text-two">
          <label htmlFor="Name">
            <b>Enter your name:</b>
          </label>
          <br />
          <br />
          <input name="Name" type="text" placeholder="Enter your First name" />
          <input name="Name" type="text" placeholder="Enter your Second name" />
          <br />
          <br />

          <label htmlFor="email">
            <b>Enter your E-Mail:</b>
          </label>
          <br />
          <br />
          <input
            name="email"
            type="email"
            placeholder="Enter your email address"
          />
          <br />
          <br />

          <label htmlFor="mNumber">
            <b>Enter your Mobile Number:</b>
          </label>
          <br />
          <br />
          <input
            name="mnumber"
            type="number"
            placeholder="Enter your Mobile Number"
            min="0"
            max="9999999999"
          />
          <br />
          <br />

          <label htmlFor="message">
            <b>Enter your Message:</b>
          </label>
          <br />
          <br />
          <textarea id="message" name="message" cols="30" rows="10"></textarea>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default Portfolio;
