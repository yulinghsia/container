import React from 'react';
import './about.css';

const About = () => (
  <main id="about">
    <h2>About this site</h2>
      <p>
      This website is a micro frontend React app. It is deployed on AWS using Terraform.
      </p>
    <p>
      Micro frontends is an architectural style where independently deliverable
      frontend applications are composed into a greater whole. It's useful for
      breaking up monolithic frontend codebases into smaller, simpler
      applications that can be delivered to production by multiple teams
      independently.
    </p>
      <p>
          All code on this website was the work of {' '}
          <a href="https://twitter.com/thecamjackson">Cam Jackson</a>, who wrote a full explanation of how the
      code for this demo works, check out the{' '}
      <a href="https://martinfowler.com/articles/micro-frontends.html">
        long-form article that Cam wrote for martinfowler.com
      </a>.
    </p>
  </main>
);

export default About;
