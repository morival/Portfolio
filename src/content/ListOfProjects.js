import project_01 from '../resources/project_01.jpg';
import project_02 from '../resources/project_02.jpg';
import project_03 from '../resources/project_03.jpg';
import project_04 from '../resources/project_04.jpg';


// const ListOfPro = [{
//     modalLabel: "My Destination",
//     modalHeader: "Flask (Python) / MySQL",
//     modalContent: "A full stack web application with CRUD functions created using Python.The app enables users to plan, track and manage travel adventures. Built over 5 days using Flask framework and SQL for the backend database.",
//     gitHub: "https://github.com/morival/W04_project_TBL"
// },
// {
//     modalLabel: "Cosmodex",
//     modalHeader: "Vue.js (JavaScript) / Express.js / MongoDB ",
//     modalContent: "An educational application built using the Vue.js framework. Designed with schoolchildren in mind, it educates the user about the Solar System in a fun and interactive way. The app renders components dynamically based on JSON format data fetched from external APIs and a MongoDB server.",
//     website: "https://morival.github.io/",
//     gitHub: "https://github.com/morival/morival.github.io"
// },
// {
//     modalLabel: "Shop Local",
//     modalHeader: "React.js (JavaScript) / Spring Boot (Java)",
//     modalContent: "An e-commerce application that provides commercial clients with a platform to promote their businesses and enables individual customers to find and book services available in their local area. The application is built with responsive components and laid out using the React framework. Backend written using Spring Data REST in Java.",
//     gitHub:"https://github.com/morival/final_project_frontend"
// },
// {
//     modalLabel: "Rickshaw Registry",
//     modalHeader: "React.js (JavaScript) / Express.js / MongoDB",
//     modalContent: "Application designed to help train new rickshaw riders as well as providing a maintenance checklist and reminders for licence and insurance renewal.",
//     gitHub: "https://github.com/morival/rickshaw-registry"
// }];

const ListOfProjects = [{
    name: "Rickshaw Registry",
    tech: "React.js (JavaScript) / Express.js / MongoDB",
    description: "Application designed to help train new rickshaw riders as well as providing a maintenance checklist and reminders for licence and insurance renewal.",
    gitHub: "https://github.com/morival/rickshaw-registry",
    img: project_04,
    finished: false
},{
    name: "Shop Local",
    tech: "React.js (JavaScript) / Express.js / Spring Boot (Java)",
    description: "An e-commerce application that provides commercial clients with a platform to promote their businesses and enables individual customers to find and book services available in their local area. The application is built with responsive components and laid out using the React framework. Backend written using Spring Data REST in Java.",
    gitHub:"https://github.com/morival/final_project_frontend",
    img: project_03,
    finished: true
},{
    name: "Cosmodex",
    tech: "Vue.js (JavaScript) / Express.js / MongoDB",
    description: "An educational application built using the Vue.js framework. Designed with schoolchildren in mind, it educates the user about the Solar System in a fun and interactive way. The app renders components dynamically based on JSON format data fetched from external APIs and a MongoDB server.",
    website: "https://morival.github.io/",
    gitHub: "https://github.com/morival/morival.github.io",
    img: project_02,
    finished: true
},{
    name: "My Destination",
    tech: "Flask (Python) / MySQL",
    description: "A full stack web application with CRUD functions created using Python.The app enables users to plan, track and manage travel adventures. Built over 5 days using Flask framework and SQL for the backend database.",
    gitHub: "https://github.com/morival/W04_project_TBL",
    img: project_01,
    finished: true
}]

export default ListOfProjects;