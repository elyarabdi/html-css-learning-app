// console.log("lesson_page.js loaded"); // Already here, can be removed or kept

document.addEventListener('DOMContentLoaded', function() {
    const lessonTitleEl = document.getElementById('lesson-title');
    const lessonDescriptionEl = document.getElementById('lesson-description');
    const lessonContentEl = document.getElementById('lesson-content');
    const lessonCodeExampleEl = document.getElementById('lesson-code-example');
    const quizQuestionEl = document.getElementById('quiz-question');
    const quizOptionsEl = document.getElementById('quiz-options'); // This is a div to hold option buttons/labels

    // Check if essential elements exist
    if (!lessonTitleEl || !lessonDescriptionEl || !lessonContentEl || !lessonCodeExampleEl || !quizQuestionEl || !quizOptionsEl) {
        console.error('One or more lesson page elements are missing from the HTML.');
        if (document.getElementById('lesson-container')) {
            document.getElementById('lesson-container').innerHTML = '<p>Error: Lesson content cannot be displayed due to missing HTML elements.</p>';
        }
        return;
    }

    // Get lesson ID from URL query parameter
    const params = new URLSearchParams(window.location.search);
    const lessonId = params.get('id');

    if (!lessonId) {
        lessonTitleEl.textContent = 'Error';
        lessonContentEl.innerHTML = '<p>No lesson ID provided in the URL.</p>';
        console.error('No lesson ID provided in URL.');
        return;
    }

    // Check if getLessonById function is available
    if (typeof getLessonById !== 'function') {
        console.error('getLessonById function is not defined. Make sure lessons.js is loaded before lesson_page.js');
        lessonTitleEl.textContent = 'Error';
        lessonContentEl.innerHTML = '<p>Error loading lesson data. The getLessonById function is missing.</p>';
        return;
    }

    const lesson = getLessonById(lessonId);

    if (!lesson) {
        lessonTitleEl.textContent = 'Lesson Not Found';
        lessonContentEl.innerHTML = `<p>Sorry, the lesson with ID "${lessonId}" could not be found.</p>`;
        console.error(`Lesson with ID "${lessonId}" not found.`);
        return;
    }

    // Populate the page with lesson data
    lessonTitleEl.textContent = lesson.title;
    lessonDescriptionEl.textContent = lesson.description;
    lessonContentEl.innerHTML = lesson.content; // Assuming lesson.content is HTML

    // Display code example
    if (lessonCodeExampleEl.parentElement.tagName === 'PRE') {
        lessonCodeExampleEl.textContent = lesson.exampleCode;
    } else {
        // Fallback if the <code> tag is not inside <pre> for some reason
        const preTag = document.createElement('pre');
        lessonCodeExampleEl.textContent = lesson.exampleCode;
        preTag.appendChild(lessonCodeExampleEl); // This might not be ideal, assumes lessonCodeExampleEl is empty
        // A better approach would be to ensure the HTML structure is <pre><code id="lesson-code-example"></code></pre>
        // For now, we just set textContent directly to the code element as per existing HTML.
    }


    // Populate quiz
    if (lesson.quiz) {
        quizQuestionEl.textContent = lesson.quiz.question;
        quizOptionsEl.innerHTML = ''; // Clear any existing options

        const ul = document.createElement('ul');
        ul.className = 'quiz-options-list';
        lesson.quiz.options.forEach(option => {
            const li = document.createElement('li');
            const button = document.createElement('button'); // Using buttons for options
            button.className = 'quiz-option-button';
            button.textContent = option.text;
            // Storing correctness for potential future use, but not visually indicating it yet
            button.dataset.correct = option.correct;
            li.appendChild(button);
            ul.appendChild(li);
        });
        quizOptionsEl.appendChild(ul);
    } else {
        quizQuestionEl.textContent = 'No quiz available for this lesson.';
    }

    console.log(`Lesson page populated for lesson ID: ${lessonId}`);
});

EOL
