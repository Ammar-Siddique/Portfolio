// Sample projects data
const projects = [
    { name: 'Project 1 : Airline Mangement System', technology: 'C' },
    { name: 'Project 2 : Hotel Mangement System', technology: 'C++' },
    { name: 'Project 3 : AMAZON REVIEW ANALYSIS (SPAM OR NON-SPAM) ', technology: 'Python' },
    { name: 'Project 4 : Pinng pong ball game using Irvine', technology: 'Assembly Language' },
    { name: 'Project 5 : Pinng pong ball game using Irvine', technology: 'Assembly Language' },
    { name: 'Project 6 : Algorithm visulizer', technology: 'React, Node.js' },
    { name: 'Project 7 : Real-Time Object detection on web', technology: 'Node.js, Python' },
    // Add more projects as needed
];

// Function to filter projects by technology
function filterProjects() {
    const filterInput = document.getElementById('filter');
    const filterValue = filterInput.value.toLowerCase();
    const projectList = document.getElementById('project-list');

    // Clear existing project list
    projectList.innerHTML = '';

    // Filter and display projects
    projects.forEach(project => {
        if (project.technology.toLowerCase().includes(filterValue) || filterValue === '') {
            const listItem = document.createElement('li');
            listItem.textContent = `${project.name} - ${project.technology}`;
            projectList.appendChild(listItem);
        }
    });
}

// Initial project list display
filterProjects();
