# JavaScript Learning Hub - Educational Website (Phase 1)

This project is a simple educational website focused on teaching JavaScript, built progressively.
This current version (Phase 1) includes the basic structure and core content delivery features.

## Features (Phase 1)

*   **Home Page:** Welcomes users and provides a link to the courses.
*   **Course Listing Page:** Dynamically lists available JavaScript lessons.
*   **Individual Lesson Pages:** Displays content for each lesson, including:
    *   Title
    *   Description
    *   Detailed content (HTML formatted)
    *   JavaScript code examples (displayed as text)
    *   A simple quiz (options displayed as buttons, no interactivity yet)
*   **Basic Responsive Design:** The layout adapts to different screen sizes.
*   **Content for 3 Initial Lessons:**
    1.  Introduction to JavaScript
    2.  JavaScript Variables
    3.  JavaScript Operators

## Tech Stack (Phase 1)

*   HTML5
*   CSS3
*   Vanilla JavaScript (ES6+)

## How to Run

1.  **Clone the repository (if applicable) or ensure all files are in a single directory.**
    *   `index.html`
    *   `courses.html`
    *   `lesson.html`
    *   `css/style.css`
    *   `js/app.js`
    *   `js/lessons.js`
    *   `js/courses.js`
    *   `js/lesson_page.js`
    *   `assets/` (currently empty)

2.  **Open `index.html` in your web browser.**
    *   Navigate through the website using the links provided.

## Project Structure

```
/
├── index.html              # Home Page
├── courses.html            # Course Listing Page
├── lesson.html             # Individual Lesson Page
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   ├── app.js              # General application script (currently minimal)
│   ├── lessons.js          # Contains lesson data and functions to access it
│   ├── courses.js          # Logic for the course listing page
│   └── lesson_page.js      # Logic for the individual lesson page
├── assets/                 # For images, etc. (currently empty)
└── README.md               # This file
```

## Next Steps (Future Phases)

*   Implement quiz interactivity (checking answers).
*   Add more lessons and expand content.
*   Develop a simple live code editor for examples.
*   Implement user progress tracking.
*   Add search functionality.
*   Implement light/dark theme toggle.
*   Add dynamic lesson management (add/update/delete lessons, possibly via a backend or local storage).
*   Introduce testing (Jest or similar).
*   Potentially refactor with a framework like React if complexity increases significantly.

EOL
