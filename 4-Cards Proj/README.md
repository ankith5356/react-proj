📘 Job Listing UI

A React-based Job Listing Interface where job details are dynamically rendered using reusable components and clean UI styling.

🚀 Project Overview

This project displays job openings using a Card-based UI. All job information is stored inside an array of objects, and each job is rendered dynamically using the map() function in React.

Each Card component receives data through props, such as:

Company name

Company logo

Job role

Salary

Date posted

Tags (Full-time / Level)

Location

The Card layout is divided into three structured sections:

Top: Logo + Save button

Center: Company name, date posted, job title, and tags

Bottom: Pay, location, and Apply button

A unique key is added to each mapped element to help React efficiently track list items.

Styling is done using clean CSS with Flexbox to ensure a modern, neat, and responsive UI.

🛠️ Technologies Used

React.js

JavaScript (ES6+)

CSS / Flexbox

Lucide Icons

📂 Features

✔ Dynamic rendering of job cards
✔ Reusable Card component
✔ Uses props for clean data flow
✔ Flexbox-based UI layout
✔ Clean and modern design
✔ Fully responsive layout

📁 Project Structure
src/
│── components/
│    └── Card.jsx
│
│── App.jsx
│── index.css
└── main.jsx

📦 How to Run
npm install
npm run dev