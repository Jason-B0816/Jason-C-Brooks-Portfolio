# Jason C Brooks Portfolio
Module 12 Assignment

# Developer Portfolio
This is a responsive, single-page developer portfolio built with React, React Router, and Bootstrap.  My application features both dark and light mode functionality, along with smooth animations, and a responsive design for an optimal user experience on both mobile devices and desktops. 

## Features
* Animations: Smooth transitions and hover effects for interactive UI components.
* Active Footer Animation:  Footer slides in with animation when the page loads.
* Dark and Light Mode: User is able to toggle between themes with a dedicated button.  Preferences are saved in local. 
* Responsive Navigation:  A navigation menu with React Router links for seamless routing to pages. 

* Sectioned Pages:

About Me

Portfolio

Contact

Resume

## Technologies Used
* React: Component-base UI development
* React Router: For client-side routing
* Bootstrap: Responsive CSS framework for styling.
* Custom CSS: Additional styling and animations.

## Getting Started
* Prerequisites

Make sure you have the following installed on your system:

Node.js (v16 or higher)

npm or yarn

Installation

* Clone the repository:

git clone https://github.com/Jason-B0816/Jason-C-Brooks-Portfolio

* Navigate to the project directory:

cd developer-portfolio

* Install dependencies:

npm install

* tart the development server:

npm run dev

* Open your browser and navigate to:

http://localhost:3000

## Components
* Navigation (Nav.jsx)

A responsive navigation menu that uses React Router Link components to navigate between pages.

* Footer (Footer.jsx)

A footer with a slide-in animation and hover effects.

* Dark/Light Theme Toggle

A button to toggle between dark and light themes. The theme state is persisted using localStorage.

* Main Pages

* About Me

Displays a brief introduction and background information.

* Portfolio

A grid layout showcasing projects.

* Contact

A form for users to get in touch.

* Resume

A section to display or download your resume.

* Styling

All styles are managed in the app.css file. Key features include:

CSS variables for theme customization.

Media queries for responsive design.

Animations for hover effects and transitions.

* Customization

Adding a New Page

Create a new component file in the pages directory (e.g., NewPage.jsx).

Add the page to the router in main.jsx:

{
  path: "/new-page",
  element: <NewPage />
}

Update the Nav component to include a link to the new page.

* Modifying Theme Colors

Update the CSS variables in the :root selector of app.css:

:root {
  --background-color: #ffffff;
  --text-color: #333333;
  --primary-color: #007BFF;
  --secondary-color: #f53232;
  /* Add or modify as needed */
}

* Deployment

To deploy your application:

Build the project:

npm run build

Deploy the dist folder to your preferred hosting platform (e.g., Netlify, Vercel, GitHub Pages).

# License
This project is licensed under the Apache License 

# Contributions
Feel free to submit a pull request or open an issue to suggest improvements or reports. 

# Contact
* Email: jbrooks200800@gmail.com
* GitHub Username Link: https://github.com/Jason-B0816
* GitHub Repository Link: https://github.com/Jason-B0816/Jason-C-Brooks-Portfolio
* Deployed Netlify.app Link: https://rad-creponne-d0da5d.netlify.app/
