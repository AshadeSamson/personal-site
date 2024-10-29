const projects=[{title:"Terapeuta",description:"Terapeuta is a web application built with React.js and Firebase, aimed at providing online therapist support and facilitating virtual therapy sessions. Users can register, log in, book sessions, and manage their profiles securely.",imageUrl:"./assets/terapeuta.webp",link:"https://terapeuta-2023.web.app/"},{title:"KOOK",description:"Node.js Back-end application for the KOOK project connecting chefs and food enthusiasts seeking personalized culinary experiences. Provides a secure platform for chefs and customers.",imageUrl:"./assets/personal_site.webp",link:"https://github.com/KOOK-47/KOOK-Backend"},{title:"Fall Predictor",description:"A Python Machine Learning classification task to predict fall incidents in elderly persons taking into account reports and clinical information.",imageUrl:"./assets/fall_predictor.webp",link:"https://fallprediction.streamlit.app/"},{title:"IP-Tracker",description:"A web application to track IP addresses and domains, providing users with key information and locations on an interactive map. Developed using HTML5, CSS, Leaflet.js, and Node.js.",imageUrl:"./assets/ip_tracker.webp",link:"https://ip-tracker-app.glitch.me/"},{title:"MitXSS",description:"A Machine Learning classification task to detect XSS URLs deployed as a Chrome web extension to prevent attacks from malicious URLs.",imageUrl:"./assets/mitxss.jpg",link:"https://github.com/AshadeSamson/Mechanism-against-XSS"},{title:"Cryptografico",description:"Cryptografico is a dashboard application displaying a user's cryptocurrency balance, transaction history, and account settings. Built with React.js and Vanilla JavaScript.",imageUrl:"./assets/cripto.webp",link:"https://cryptografico.netlify.app/"}],projectsContainer=document.querySelector(".project-content");projects.forEach(t=>{let e=document.createElement("div");e.classList.add("project-item"),e.innerHTML=`
    <div><img class="project-photo" src="${t.imageUrl}" alt="project-snapshot" width="900" height="600" loading="lazy"></div>
    <h3 class="title-one">${t.title}</h3>
    <p class="text-small">${t.description}</p>
    <span><a target="_blank" class="projects-link" href="${t.link}">&lt;&lt; See Project &gt;&gt;</a></span>
`,projectsContainer.appendChild(e)}),initializeCarousel();