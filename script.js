document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Scroll to section functionality
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = document.querySelector(`#${button.dataset.section}`);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

const infoContent = {
    presentation: "Hi, I'm Dany!. I have a solid university education in programming logic, OOP, Relational DB and development tools. I am versatile when facing any challenge and new learnings.",
    education: "Graduated in 2022 as a University Technician in Programming from the National Technological University of Mar del Plata. And courses in Spring Boot, Angular, HTML, CSS and JS, Manual Testing and English carried out in a complementary and self-taught manner.",
    experience: "For 3 years I worked as a professor at a renowned university in Argentina, teaching the solid foundations of structured programming and object-oriented programming (OOP). In addition, I provided students with a strong knowledge of relational databases and computer architectures.",
    hobbies: "I really enjoy listening to music all day long. In my free time I usually play the guitar or the piano or play some video games. I like to learn new things whenever possible and I try to maintain a balanced life between health, work and family.",
    softSkills: "Self-taught - Teamwork - Assertive Communication - Critical, Logical and Analytical Thinking - Empathy - Emotional Intelligence - Resilience."
};

function updateInfo() {
    const selector = document.getElementById('info-selector');
    const infoText = document.getElementById('info-text');
    const selectedValue = selector.value;
    infoText.textContent = infoContent[selectedValue];
}

// Set default text on page load
document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('info-selector');
    const infoText = document.getElementById('info-text');
    selector.value = "presentation"; // Ensure the default selected option matches
    infoText.textContent = infoContent["presentation"];
});


const technologies = [
    { name: "Java", category: "languages", icon: "devicon-java-plain colored", level: "Solid knowledge" },
    { name: "MySQL", category: "databases", icon: "devicon-mysql-plain colored", level: "Solid knowledge" },
    { name: "C", category: "languages", icon: "devicon-c-plain colored", level: "Solid knowledge" },
    { name: "Git", category: "tools", icon: "devicon-git-plain colored", level: "Intermediate" },
    { name: "Github", category: "tools", icon: "devicon-github-original", level: "Intermediate" },
    { name: "HTML", category: "languages", icon: "devicon-html5-plain colored", level: "Intermediate" },
    { name: "CSS", category: "languages", icon: "devicon-css3-plain colored", level: "Intermediate" },
    { name: "Visual Studio Code", category: "tools", icon: "devicon-vscode-plain colored", level: "Intermediate"},
    { name: "Slack", category: "tools", icon: "devicon-slack-plain", level: "Intermediate" },
    { name: "Trello", category: "tools", icon: "devicon-trello-plain-wordmark", level: "Intermediate" },
    { name: "PHP", category: "languages", icon: "devicon-php-plain colored", level: "Intermediate" },
    { name: "Spring Boot", category: "frameworks", icon: "devicon-spring-plain colored", level: "Basics" },
    { name: "PostgreSQL", category: "databases", icon: "devicon-postgresql-plain colored", level: "Basics" },
    { name: "Angular", category: "frameworks", icon: "devicon-angularjs-plain colored", level: "Basics" },
    { name: "JavaScript", category: "languages", icon: "devicon-javascript-plain colored", level: "Basics" },
    { name: "Docker", category: "tools", icon: "devicon-docker-plain colored", level: "Basics" },
    { name: "Figma", category: "tools", icon: "devicon-figma-plain colored", level: "Basics" },
    //{ name: "Postman", category: "tools", icon: "devicon-postman-plain colored", level: "Intermediate" },
];

function displayTechnologies(category) {
    const grid = document.getElementById("tech-grid");
    grid.innerHTML = ""; // Clear previous items

    const filteredTechnologies =
        category === "all"
            ? technologies
            : technologies.filter(tech => tech.category === category);

    filteredTechnologies.forEach(tech => {
        const techItem = document.createElement("div");
        techItem.classList.add("tech-item");

        // Create and append icon
        const icon = document.createElement("i");
        icon.className = tech.icon;
        techItem.appendChild(icon);

        // Create and append the level pill
        const levelPill = document.createElement("span");
        levelPill.textContent = tech.level;
        levelPill.classList.add("tech-level", tech.level.toLowerCase().replace(" ", "-"));
        techItem.appendChild(levelPill); // Append to techItem instead of grid

        // Add the techItem to the grid
        grid.appendChild(techItem);
    });
}

function filterTechnologies() {
    const category = document.getElementById("category-filter").value;
    displayTechnologies(category);
}

// Display all technologies by default
displayTechnologies("all");



const projects = [
    {
        title: "Movies CRUD",
        description: "API Restful with Java, Spring Boot and persistence with MySQL Database. Ready to be consumed by a customer.",
        tags: [
            { icon: "devicon-java-plain colored", name: "Java" },
            { icon: "devicon-spring-plain colored", name: "Spring Boot" },
            { icon: "devicon-mysql-plain colored", name: "MySQL" }
        ],
        link: "https://github.com/DanyDiaz1/MoviesCRUD-APIrestful"
    },
    {
        title: "Search Engine",
        description: "Using binary trees and files for word searching.",
        tags: [
            { icon: "devicon-c-plain colored", name: "C" }
        ],
        link: "https://github.com/DanyDiaz1/SearchEngine_FinalProject_Lab2_UTN"
    },
    {
        title: "Encryptor",
        description: "Made as a challenge with a user interface.",
        tags: [
            { icon: "devicon-html5-plain colored", name: "HTML" },
            { icon: "devicon-css3-plain colored", name: "CSS" },
            { icon: "devicon-javascript-plain colored", name: "JavaScript" },
        ],
        link: "https://danydiaz1.github.io/challenge-encriptador/"
    },
    {
        title: "Pet App",
        description: "Final university project applying all the concepts learned such as agile methodologies, documentation, use case diagrams, UML, DER and application of the MVC model with a CRUD system with functionalities related to the purpose of the app.",
        tags: [
            { icon: "devicon-html5-plain colored", name: "HTML" },
            { icon: "devicon-css3-plain colored", name: "CSS" },
            { icon: "devicon-php-plain colored", name: "PHP" },
        ],
        link: "https://github.com/DanyDiaz1/PetHero_FinalProject_Lab4_UTN/tree/main"
    },
    {
        title: "Portfolio",
        description: "You are here!",
        tags: [
            { icon: "devicon-html5-plain colored", name: "HTML" },
            { icon: "devicon-css3-plain colored", name: "CSS" },
            { icon: "devicon-javascript-plain colored", name: "JavaScript" },
        ],
        link: "https://danydiaz1.github.io/Portfolio/"
    },
    {
        title: "File Manager API",
        description: "API to upload, list or download files of any type. Data persistence in PostgreSQL.",
        tags: [
            { icon: "devicon-java-plain colored", name: "Java" },
            { icon: "devicon-spring-plain colored", name: "Spring Boot" },
            { icon: "devicon-postgresql-plain colored", name: "PostgreSQL" },
        ],
        link: "https://danydiaz1.github.io/Portfolio/"
    }
];

function generateProjectCards() {
    const projectGrid = document.getElementById('project-grid');

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const title = document.createElement('h4');
        title.textContent = project.title;

        const description = document.createElement('p');
        description.textContent = project.description;

        const tagsDiv = document.createElement('div');
        tagsDiv.className = 'tags';

        project.tags.forEach(tag => {
            const icon = document.createElement('i');
            icon.className = tag.icon;
            tagsDiv.appendChild(icon);
        });

        const link = document.createElement('a');
        link.href = project.link;
        link.textContent = "View Project";
        link.className = 'project-link';

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(tagsDiv);
        card.appendChild(link);

        projectGrid.appendChild(card);
    });
}

const techFilter = document.getElementById('tech-filter');
const projectGrid = document.getElementById('project-grid');

function filterProjects() {
    const selectedTech = techFilter.value.toLowerCase();
    projectGrid.innerHTML = ''; // Limpia la cuadrícula

    const filteredProjects = projects.filter(project =>
        selectedTech === 'all' || project.tags.some(tag => tag.name.toLowerCase() === selectedTech)
    );

    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const title = document.createElement('h4');
        title.textContent = project.title;

        const description = document.createElement('p');
        description.textContent = project.description;

        const tagsDiv = document.createElement('div');
        tagsDiv.className = 'tags';

        project.tags.forEach(tag => {
            const icon = document.createElement('i');
            icon.className = tag.icon;
            tagsDiv.appendChild(icon);
        });

        const link = document.createElement('a');
        link.href = project.link;
        link.textContent = "View Project";
        link.className = 'project-link';

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(tagsDiv);
        card.appendChild(link);

        projectGrid.appendChild(card);
    });
}

techFilter.addEventListener('change', filterProjects);

window.onload = () => {
    generateProjectCards();
    filterProjects();
};


const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  trucazo.setAttribute('href', `mailto:danielferdiazz@gmail.com?subject=Oferta de trabajo de ${form.get('name')}&body=${form.get('message')}`)
  trucazo.click()
}