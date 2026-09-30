import React from 'react';

function Skills() {
  const skillsList = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Git & GitHub'];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skillsList.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;