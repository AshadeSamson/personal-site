// Array of project objects
const projects = [
    {
        title: "Terapeuta",
        description: "Terapeuta is a web application built with React.js and Firebase, aimed at providing online therapist support and facilitating virtual therapy sessions. Users can register, log in, book sessions, and manage their profiles securely.",
        imageUrl: "./assets/terapeuta.jpg",
        link: "https://terapeuta-2023.web.app/"
    },
    {
        title: "KOOK",
        description: "Node.js Back-end application for the KOOK project connecting chefs and food enthusiasts seeking personalized culinary experiences. Provides a secure platform for chefs and customers.",
        imageUrl: "./assets/kook.jpg",
        link: "https://github.com/KOOK-47/KOOK-Backend"
    },
    {
        title: "Fall Predictor",
        description: "A Python Machine Learning classification task to predict fall incidents in elderly persons taking into account reports and clinical information.",
        imageUrl: "./assets/fall.jpg",
        link: "https://fallprediction.streamlit.app/"
    },
    {
        title: "IP-Tracker",
        description: "A web application to track IP addresses and domains, providing users with key information and locations on an interactive map. Developed using HTML5, CSS, Leaflet.js, and Node.js.",
        imageUrl: "./assets/iptracker.jpg",
        link: "https://ip-tracker-app.glitch.me/"
    },
    {
        title: "MitXSS",
        description: "A Machine Learning classification task to detect XSS URLs deployed as a Chrome web extension to prevent attacks from malicious URLs.",
        imageUrl: "./assets/mitxss.jpg",
        link: "https://github.com/AshadeSamson/Mechanism-against-XSS"
    },
    {
        title: "Cryptografico",
        description: "Cryptografico is a dashboard application displaying a user's cryptocurrency balance, transaction history, and account settings. Built with React.js and Vanilla JavaScript.",
        imageUrl: "./assets/cripto.jpg",
        link: "https://cryptografico.netlify.app/"
    }
];

// Select the container where project items will be added
const projectsContainer = document.querySelector('.project-content');

// Generate and insert project items
projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');

    projectItem.innerHTML = `
        <div><img class="project-photo" src="${project.imageUrl}" alt="project-snapshot"></div>
        <h3 class="title-one">${project.title}</h3>
        <p class="text-small">${project.description}</p>
        <span><a target="_blank" class="projects-link" href="${project.link}">See Project >>></a></span>
    `;

    projectsContainer.appendChild(projectItem);
});


initializeCarousel()