import React from 'react';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      {/* Other components */}
      <div style={{ paddingTop: '70px' }}> {/* Add this style to ensure content doesn't hide behind the fixed navbar */}
        <section id="home">
          <h1>Home Section</h1>
          {/* Content */}
        </section>
        <section id="about">
          <h1>About Section</h1>
          {/* Content */}
        </section>
        <section id="projects">
          <h1>Projects Section</h1>
          {/* Content */}
        </section>
        <section id="contact">
          <h1>Contact Section</h1>
          {/* Content */}
        </section>
      </div>
    </div>
  );
}

export default App;