// console.log("courses.js loaded"); // Already here, can be removed or kept

document.addEventListener('DOMContentLoaded', function() {
    const courseListContainer = document.getElementById('course-list-container');

    if (!courseListContainer) {
        console.error('Course list container not found!');
        return;
    }

    // Check if getLessons function is available
    if (typeof getLessons !== 'function') {
        console.error('getLessons function is not defined. Make sure lessons.js is loaded before courses.js');
        // Display a message to the user in the container
        courseListContainer.innerHTML = '<p>Error loading courses. The getLessons function is missing.</p>';
        return;
    }

    const lessons = getLessons();

    if (!lessons || lessons.length === 0) {
        courseListContainer.innerHTML = '<p>No courses available at the moment.</p>';
        return;
    }

    const ul = document.createElement('ul');
    ul.className = 'course-list'; // For styling

    lessons.forEach(lesson => {
        const li = document.createElement('li');
        li.className = 'course-item'; // For styling

        const link = document.createElement('a');
        link.href = `lesson.html?id=${lesson.id}`;

        const title = document.createElement('h3');
        title.textContent = lesson.title;

        const description = document.createElement('p');
        description.textContent = lesson.description;

        link.appendChild(title);
        link.appendChild(description);
        li.appendChild(link);
        ul.appendChild(li);
    });

    courseListContainer.appendChild(ul);
});

console.log("courses.js logic to display course list populated.");
