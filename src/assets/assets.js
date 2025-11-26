import Logo from './Logo.png';

export const assets = {
    Logo
}

export const projectCategories = [
  {
    id: 'ml-ai',
    name: 'ML/AI Projects',
    description: 'Machine Learning and Artificial Intelligence projects',
    icon: '🤖',
    projects: [
      {
        id: 1,
        title: 'Image Caption Generator using CNN & LSTM',
        description: 'Implemented an AI model that generates captions for images using TensorFlow and Keras.',
        tags: ['Python', 'TensorFlow', 'Keras', 'CV','Flickr8k datasets','Matplotlib'],
      },
      {
        id: 2,
        title: 'Trust-Aware Energy Opltimization in Wireless Sensor Networks using Deep Learning ',
        description: 'The project aims to detect and avoid untrustworthy nodes by simulating network scenarios and applying machine learning and Deep learning algorithms to optimize data routing and energy usage, ensuring reliable and efficient WSN operation',
        tags: ['Python', 'NS-2', 'Matlab', 'ML','Python animation libary'],
      },
      {
        id: 3,
        title: 'Recommendation System',
        description: 'Collaborative filtering recommendation engine',
        tags: ['Python', 'Scikit-learn', 'Pandas'],
      },
    ],
  },
  {
    id: 'mern',
    name: 'MERN Stack Projects',
    description: 'Full-stack applications built with MongoDB, Express, React, and Node.js',
    icon: '⚛️',
    projects: [
      {
        id: 4,
        title: 'E-commerce Platform',
        description: 'A full-stack food delivery application inspired by Zomato, allowing users to browse dishes, add them to the cart, and place orders. Admins can manage food items via a dedicated panel',
        tags: ['React', 'Node.js', 'MongoDB', 'Express','JWT','Multer','Axios'],
      },
      {
        id: 5,
        title: 'Spotify Clone (Full Stack Application',
        description: 'Built a Spotify-like music streaming platform enabling users to upload, play, and manage playlist.',
        tags: ['React', 'Node js', 'MongoDB', 'JWT'],
      },
      {
        id: 6,
        title: 'Hotel Management System',
        description: 'The platform allows users to browse hotels, search for rooms, book stays, and manage reservations, while hotel owners can manage hotels, rooms, and bookings.',
        tags: ['React', 'Axios', 'Node.js','Express.js', 'MongoDB','Clerk Auth','Brevo SMTP','Cloudinary'],
      },
    ],
  },
  {
    id: 'java',
    name: 'Java Stack Projects',
    description: 'Enterprise applications built with Java and Spring Framework',
    icon: '☕',
    projects: [
      {
        id: 7,
        title: 'Banking Management System',
        description: 'Secure banking application with transaction management',
        tags: ['Java', 'Spring Boot', 'MySQL', 'JPA'],
      },
      {
        id: 8,
        title: 'Employee Portal',
        description: 'Enterprise HR management system with role-based access',
        tags: ['Java', 'Spring MVC', 'Hibernate', 'Thymeleaf'],
      },
      {
        id: 9,
        title: 'Inventory Management',
        description: 'Real-time inventory tracking and management system',
        tags: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API'],
      },
    ],
  },
];