import p1 from "./pr_pic/p1.png"
import p2 from "./pr_pic/p2.png"
import p3 from "./pr_pic/p3.png"
import p4 from "./pr_pic/p4.png"
import p5 from "./pr_pic/p5.png"
import p6 from "./pr_pic/p6.png"
import p7 from "./pr_pic/p7.png"
import p8 from "./pr_pic/p8.png"
let experience = [
  {
    year: "March,2025 - Aug,2025",
    role: "Software Developer Intern",
    company: "Ecampus",
    description: `At my previous company, I worked as a Software Developer Intern, contributing to the end-to-end development of ERP and LMS platforms, along with building and customizing multiple WordPress websites. I designed and managed database architectures, implemented backend logic, and developed over 30+ APIs and core functionalities to support various business operations and workflows.

I utilized technologies such as Node.js, Express.js, MongoDB, PHP, and CodeIgniter for backend development, and integrated Docker for containerization and streamlined deployment. On the frontend, I built responsive user interfaces using Material UI, React.js, and Next.js. Additionally, I created and optimized WordPress websites, ensuring high performance, responsive design, and SEO-friendly structure.

My role also involved collaborating with cross-functional teams to deliver scalable, maintainable, and efficient solutions aligned with business goals.`,
    technologies: ["React Js", "Material UI", "Express Js", "MySql", "ORM", "Node Js", "Docker"],
  },
  {
    year: "July,2024 - Jan,2024",
    role: "Web Developer Intern",
    company: "NullClass",
    description: `Developed responsive and dynamic websites using React.js, Bootstrap, Tailwind, JavaScript, HTML, and CSS. Gained hands-on experience with backend technologies such as Node.js, Express.js, and MySQL, collaborating with a team to build and optimize full-stack web applications, ensuring high performance and user-friendly experiences.`,
    technologies: ["HTML", "CSS", "React.js", "javascript", "Node Js", " Express Js", "mySQL"],
  },

]

let projects = [
  {
    image: p8,
    title: "Blog",
    descreption: "Created a fully responsive blog website where users can read blogs, write their own, and manage their content. Built using EJS for templating, Node.js, and Express.js for the backend, and MongoDB as the database, the application ensures efficient and secure data management. Users are required to create an account, enabling them to upload, edit, and delete their blogs with ease. The platform delivers a seamless experience, focusing on user-friendly navigation and mobile responsiveness. This project combines interactive features with robust backend technology to offer an engaging blogging platform for users, enhancing accessibility and encouraging content creation and sharing.",
    link: "https://github.com/Karan-2401/Blog-"

  },
  {
    image: p1,
    title: "Dice Game",
    descreption: "Developed an interactive single-player dice game using React for dynamic UI updates. Implemented game logic in JavaScript to generate random dice rolls, providing an engaging and unpredictable experience. The project incorporates modern web development practices with a responsive design using HTML CSS, and Tailwind for a seamless user experience across devices.",
    link: "https://dice-game-ten-psi.vercel.app/"

  },

  {
    image: p3,
    title: "Gemini Clone",
    descreption: "Developed a functional clone of Google Gemini using React and Tailwind CSS for a responsive and modern design. Integrated the Google API to enhance functionality, ensuring real-time data interaction. This project demonstrates advanced proficiency in React's component-based architecture and Tailwind's utility-first approach, providing a seamless user experience across devices. The clone accurately replicates the features and aesthetics of Google Gemini, showcasing API integration and modern web development techniques[It will not give you the answer becouse I have hidden the gemini api key.].",
    link: "https://google-gemini-ruby-iota.vercel.app/"
  },
  {
    image: p4,
    title: "Stack Overflow Clone",
    descreption: "Developed a full-featured Stack Overflow clone using React and React Router for seamless navigation across multiple pages. The project includes user-driven Q&A functionality, where users can post questions, submit answers, and upvote responses. Styled with Tailwind CSS for a modern and responsive layout, the clone replicates key features of Stack Overflow while ensuring a smooth, dynamic user experience through React. The implementation of React Router enhances the app's navigation, enabling multi-page routing for a real-world, scalable application.",
    link: "https://stackoverflow-murex.vercel.app/"
  },
  {
    image: p2,
    title: "Nike Landing page",
    descreption: "Built a visually striking landing page for Nike using React and Tailwind CSS. Implemented a modern, minimalistic design with fast load times and smooth user interactions. Leveraged React for dynamic UI updates and Tailwind CSS for utility-first styling, ensuring a seamless mobile-first experience. The page highlights Nike's latest products, focusing on user engagement and brand consistency..",
    link: "https://nike-topaz.vercel.app/"
  },
  {
    image: p5,
    title: "Movie Website",
    descreption: "Developed a fully responsive movie website using HTML for structure, CSS for styling, and JavaScript along with jQuery for dynamic interactivity. The site allows users to browse through a collection of movies, view details such as ratings, descriptions, and trailers. jQuery was used to handle AJAX requests for real-time data updates, ensuring a smooth and engaging user experience. The design is optimized for performance and usability across devices, providing a seamless browsing experience",
    link: "https://movie-five-gilt.vercel.app/"
  },
  {
    image: p6,
    title: "E-Commerce Website",
    descreption: "Developed a feature-rich e-commerce website using HTML for content structure, CSS for styling, and Bootstrap for a responsive, mobile-friendly layout. Integrated JavaScript and jQuery to handle dynamic features such as product filtering, shopping cart functionality, and AJAX-based interactions. The site offers an intuitive user interface, smooth navigation, and a seamless shopping experience, optimized for performance across different devices.",
    link: "https://storeweb-xi.vercel.app/"
  },
  {
    image: p7,
    title: "Secret Saver",
    descreption: "Developed Secret Saver, a secure web application that allows users to create accounts for saving and managing phone numbers. The platform features a user-friendly interface for easy account management. Additionally, users can enhance their experience by pasting video URLs into a designated section to play videos directly on the site. This project showcases my skills in web development, focusing on user authentication, data management, and dynamic content integration. The application is designed with a clean, intuitive layout, ensuring a seamless user experience.",
    link: "#"
  }
]
export default projects;
export { experience };