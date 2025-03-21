import React from 'react';

function AboutMe() {
    return (
        <div className aboutMe-container>
         <img src="/images/profilepicture.jpg" alt="Jason Brooks" />
        <h1>About Me</h1>
        <p>Hello and welcome! My name is <strong>Jason C Brooks</strong>, and I’m an aspiring{" "}
                    <strong>Full Stack Web Developer</strong> with a passion for building
                    dynamic, user-friendly applications. I specialize in <strong>React, Node.js, Express, and PostgreSQL</strong>,
                    crafting seamless user experiences from front to back.</p>
                    <p>
                    With a strong foundation in <strong>JavaScript, TypeScript, and modern web technologies</strong>, I’m eager to
                    apply my skills in a collaborative environment where I can continue learning and growing. My portfolio
                    showcases projects that highlight my problem-solving abilities, attention to detail, and enthusiasm for
                    building efficient, scalable applications.
                </p>   
        </div>
    );
}

export default AboutMe;  // Export the AboutMe component