// pages/About.tsx 
// import React from 'react';
// import Ryan from './images/ryan_hunter.webp';
// import Jaguar04 from './assets/jaguar04.webp';

const About = () => (
  <div className="container has-text-justified">
    <img src='/images/ryan_hunter.webp' alt="Web Developer Ryan Hunter" className="my-2 rounded" style={{ maxWidth: '240px', height: '240px', borderRadius: '10px' }} />
    <h1 className="is-size-1 has-text-justified has-text-weight-bold has-text-link mb-2">About Me</h1>
    <p className="my-2">Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.</p>
    <p className="my-2">Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</p>
    {/* <img src={Jaguar04} alt="Jaguar hiding in bushes" className="my-3 rounded" style={{ maxWidth: '700px', height: '366px' }} /> */}
    <img src='/images/jaguar04.webp' alt="Jaguar hiding in bushes" className="my-2 is-2by1" style={{ borderRadius: '10px' }} />
  </div>
);

export default About;

