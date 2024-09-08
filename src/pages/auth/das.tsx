import React, { useState, useEffect } from 'react';
import DOTs from '@/pages/auth/1.avif';
function MyComponent() {
  // Mock data directly included
  const [data, setData] = useState({
    total: 18,
    runners: Array.from({ length: 18 }, (_, i) => ({
      name: `Candidate ${i + 1}`,
      id: i.toString(),
      age: 20 + (i % 10),
      gender: i % 2 === 0 ? 'Male' : 'Female',
      image: 'https://i.ibb.co/W0Q6mmr/1.jpg',
      about: `This is candidate ${i + 1}, with unique attributes and qualifications.`
    }))
  });

  const [overlayContent, setOverlayContent] = useState('');

  useEffect(() => {
    renderIcons();
  }, [data]);

  const vote = async (id) => {
    try {
      const response = await fetch('https://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (response.status === 200) {
        window.location.replace('https://localhost:3000/');
      } else {
        alert('Unable to Register your vote');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const learn = (id) => {
    const runner = data.runners.find(runner => runner.id === id);
    if (runner) {
      setOverlayContent(`
        <div>
          <img src="https://cdn.vectorstock.com/i/1000v/82/55/anonymous-user-circle-icon-vector-18958255.avif" alt="" height="80%" style="border-radius: 50%; border-width: 0px;" />
          <img src="cross.webp" height="5%" style="position:absolute; right: -50%; top: 0;" onclick="unLearn()" />
          <h3>${runner.name}</h3>
        </div>
        <div>${runner.about}</div>
      `);
      document.getElementById('overlay').style.opacity = 1;
      document.getElementById('dimmer').style.opacity = 0.7;
      document.getElementById('overlay').style.zIndex = 10;
      document.getElementById('dimmer').style.zIndex = 9;
    }
  };

  const unLearn = () => {
    setOverlayContent('');
    document.getElementById('overlay').style.opacity = 0;
    document.getElementById('dimmer').style.opacity = 0;
    document.getElementById('overlay').style.zIndex = -10;
    document.getElementById('dimmer').style.zIndex = -9;
  };

  const renderIcons = () => {
    let inner = '';
    data.runners.forEach(runner => {
      inner += `
        <div class="icon">
          <img src="${runner.image}" alt="" height="50%" width="50%" />
          <h3>${runner.name}</h3>
          <button class="vote" onclick="vote(${runner.id})">Vote</button><br />
          <a href="#" onclick="learn(${runner.id})" class="learn">Learn more</a>
        </div>
      `;
    });
    document.getElementById('icons').innerHTML = inner;
  };

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: `
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Voter Pro</title>
            <style>
              body {
                padding: 0;
                margin: 0;
                font-family: Arial, sans-serif;
              }
              header {
                background-color: #2980B9;
                height: 10%;
                color: white;
                padding: 10px;
                text-align: center;
                align-items: center;
                justify-content: left;
                display: flex;
              }
              header div {
                display: flex;
                height: 100%;
                margin-right: 5%;
              }
              nav a {
                color: white;
                margin: 0 15px;
                text-decoration: none;
              }
              .banner {
                background-color: lightblue;
                padding: 15px;
                text-align: center;
              }
              #icons {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
                margin: 20px 0;
              }
              .icon {
                text-align: center;
                margin: 10px;
                border-width: 2px;
                border-style: solid;
                border-color: black;
                width: 20%;
                aspect-ratio: 1;
              }
              .learn {
                font-size: x-small;
              }
              .vote {
                background-color: rgb(0, 79, 122);
                height: 15%;
                width: 30%;
                border-radius: 1rem;
                margin-bottom: 8px;
                color: white;
              }
              .vote:hover {
                background-color: rgb(2, 56, 85);
              }
              #overlay {
                position: absolute;
                z-index: -5;
                background-color: aqua;
                border-radius: 2rem;
                height: 70%;
                width: 30%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
              }
              #overlay div {
                height: 50%;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
              }
              #dimmer {
                height: 100%;
                width: 100%;
                background-color: black;
                position: absolute;
                z-index: -1;
                opacity: 0;
                top: 0;
                left: 0;
              }
            </style>
        </head>
        <body>
            <header>
                <div>
                  <img src="https://i.ibb.co/6PcnswB/vote.webp" alt="" width="100px" height="100px"/>
                  <h1>VoteX</h1>
                </div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Register</a>
                    <a href="#">Voting</a>
                    <a href="#">News</a>
                    <a href="#">Results</a>
                    <a href="#">FAQs</a>
                    <a href="#">My Account</a>
                </nav>
            </header>
            <div id="dimmer"></div>
            <div class="banner">
                <div>This is the new official Voting website</div>
                <div>The website has been updated to provide voters an even easier way to Cast their votes</div>
            </div>
            <div id="icons"></div>
            <div id="overlay">${overlayContent}</div>
            <script>
              function vote(id) { ${vote.toString()} }
              function learn(id) { ${learn.toString()} }
              function unLearn() { ${unLearn.toString()} }
            </script>
        </body>
        </html>
      ` }} />
    </div>
  );
}

export default MyComponent;
