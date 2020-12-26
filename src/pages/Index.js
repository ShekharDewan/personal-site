import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">I write code for data!</Link></h2>
          <p>My goal is to use my skills to serve needs - including yours.</p>
        </div>
      </header>
      <p> I believe in spreading effort wisely. Therefore, I have adapted this website from <Link to="https://github.com/mldangelo/personal-site">here</Link>. You can read more <Link to="/about">about me</Link>,
        or check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me. Happy to chat.
      </p>
      <p> Source available <a href="https://github.com/shekhardewan/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
