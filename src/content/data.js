// This file contains the content for the portfolio website.

// Import images
import hospitalDataAnalysis from '../assets/hospital-data-analysis.png';

import python from '../assets/python.png';
import mysql from '../assets/mysql.png';
import react from '../assets/react.png';

export default{
    hero: {
        textContent: "Samarth Pal Antil",
        subText: "Currently looking for opportunities",
        desc: ["I'm a Software Developer based in New Delhi, India."," Proficient in Python, Machine Learning, and Full Stack Development."],
        funFact: ["Fun Fact: This website is also built using Vue."],
    },

    carousel: {
        images: [
            python,
            mysql,
            react
        ]
    },


    "projects": [
        {
            "title": "Disease Prediction - Covering 49 diseases with 98% accuracy (Python, pandas)",
            "year": 2024,
            "description": "I harnessed machine learning to predict 49 diseases based on a patient's symptoms, age, and sex. This project involved wrangling messy medical records with 10 lakh+ entries, transforming data into a format the model could understand, and visualizing results to uncover patterns for more informed diagnoses.",
            "outcome": "The predictive model achieved an accuracy of 98%. This high accuracy rate can help doctors make more informed decisions and provide better care to patients. The project also highlighted the potential of machine learning in healthcare to improve patient outcomes and reduce costs.",
            "role": [
                "Machine Learning Engineer",
                "Python Developer",
            ],
            "deliverables": [
                "Data Wrangling",
                "Feature Engineering",
                "Model Training",
                "Model Evaluation"
            ],
            "imagePath": hospitalDataAnalysis
        },
        {
            "title": "In-Browser Proctoring using OpenCV and ReactJS ",
            "year": 2023,
            "description": "I developed an in-browser proctoring system using OpenCV and ReactJS. The system detects if the user like looking away from the screen, multiple faces in the frame, or using mobile devices during the exam.",
            "outcome": "The system was able to detect cheating attempts with 95% accuracy.",
            "role": [
                "Full Stack Developer",
                "Computer Vision Engineer"
            ],
            "deliverables": [
                "Face Detection",
                "Frontend Development",
                "Video Processing",
            ],
        }
    ],


    "experience": [
        {
            "role": "Software Development Engineer Intern",
            "company": "Master-O",
            "duration": "July 2023 - August 2023",
            "responsibilities": [
                "Made a prototype for in browser webcam proctoring using OpenCVJS.",
                "Automated 80% of the customer support process by implementing a chatbot via reducing response time by more than 90%.",
                "Developed SCORM Content Web Player from scratch and integrated with the existing LMS.",
                "Worked on the development of the company's website using NextJS and Redux."
            ],
            "isOpen": false
        },
        {
            "role": "Technology Intern",
            "company": "Lenskart",
            "duration": "July 2022 - August 2022",
            "responsibilities": [
                "Automated repetitive tasks and generated daily inventory reports by coding macros using VBA.",
                "Collaborated closely with the team leader to gain insights into ongoing projects."
            ],
            "isOpen": false
        }
    ],

    "skills": [
        "Python",
        "Pandas",
        "scikit-learn",
        "tensorflow",
        "Machine Learning",
        "Computer Vision",
        "NLP",
        "Data Wrangling, Analysis & Visualization",
        "Predictive Modelling",
        "Web Scraping",
        "SQL", 
        "Full Stack Development",       
        "ReactJs",
        "VueJs",
        "ExpressJs",
        "Google Cloud Platform"
    ],


    about: {
        greeting: ["Hi, I'm Samarth!","I'm a Software Developer with a passion for learning new ways to solve real-world problems."],
        details: [
            "I completed my BTech in Computer Science and Engineering from SRM Univeristy in 2024. I had a spcialization in Artificial Intelligence and Data Science.",
            "I have experience in developing machine learning models, web applications, and automating tasks to improve efficiency. I am always eager to learn new technologies and apply them to create innovative solutions.",
            "I am currently looking for opportunities to work on challenging projects that allow me to grow as a developer and contribute to the success of the organization."
            
        ],    
    },


    links: {
        linkedin: "https://www.linkedin.com/in/samarth-pal-antil-a8b08b221/",
        github: "https://github.com/antil-samarth",
        mailLink: "mailto:antil.samarth@gmail.com",
        mail: "antil.samarth@gmail.com"
    }    
}
