// This file contains the content for the portfolio website.

// Import images
import hospitalDataAnalysis from '../assets/hospital-data-analysis.webp';

import python from '../assets/python.webp';
import mysql from '../assets/mysql.webp';
import react from '../assets/react.webp';
import vue from '../assets/vue.webp';

import srm from '../assets/srm.webp';

export default{
    hero: {
        textContent: "Samarth Pal Antil",
        subText: "Python Developer | Backend & AI Engineer",
        desc: [
            "I'm a Software Developer based in New Delhi, India.",
            "Proficient in Python, JavaScript, Rust, AI & LLMs, Cloud & DevOps, and Full Stack Development."
        ],
        funFact: ["Fun Fact: This website is built using Vue."]
    },

    carousel: {
        images: [
            python,
            mysql,
            react,
            vue
        ]
    },

    projects: [
        {
            title: "Disease Prediction - Covering 49 diseases with 98% accuracy (Python, pandas)",
            year: 2024,
            description: "I harnessed machine learning to predict 49 diseases based on a patient's symptoms, age, and sex. This project involved wrangling messy medical records with 10 lakh+ entries, transforming data into a format the model could understand, and visualizing results to uncover patterns for more informed diagnoses.",
            outcome: "The predictive model achieved an accuracy of 98%. This high accuracy rate can help doctors make more informed decisions and provide better care to patients. The project also highlighted the potential of machine learning in healthcare to improve patient outcomes and reduce costs.",
            role: [
                "Machine Learning Engineer",
                "Python Developer"
            ],
            deliverables: [
                "Data Wrangling",
                "Feature Engineering",
                "Model Training",
                "Model Evaluation"
            ],
            imagePath: hospitalDataAnalysis
        },
        {
            title: "In-Browser Proctoring using OpenCV and ReactJS ",
            year: 2023,
            description: "I developed an in-browser proctoring system using OpenCV and ReactJS. The system detects if the user like looking away from the screen, multiple faces in the frame, or using mobile devices during the exam.",
            outcome: "The system was able to detect cheating attempts with 95% accuracy.",
            role: [
                "Full Stack Developer",
                "Computer Vision Engineer"
            ],
            deliverables: [
                "Face Detection",
                "Frontend Development",
                "Video Processing"
            ]
        },
        {
            title: "Aidoku-Community/sources - Open Source Contributor",
            year: 2024,
            description: "Contributed a new source plugin (Rust) to an open-source content aggregation platform.",
            outcome: "Implemented HTML parsing, metadata extraction, content rating, and search filtering across 14 commits with maintainer code review.",
            role: [
                "Open Source Contributor"
            ],
            deliverables: [
                "Rust",
                "WASM",
                "HTML Parsing"
            ]
        }
    ],

    experience: [
        {
            role: "Systems Engineer",
            company: "Tata Consultancy Services (Client: Cisco)",
            duration: "Jan 2025 - Present",
            responsibilities: [
                "Finance AI & Data Platform: Sole developer on a generalized reconciliation platform (React, FastAPI, Pandas, PostgreSQL); gathered requirements from end users and built a customizable step-builder UI for data preprocessing, merging, and reconciliation workflows.",
                "Designed AI agent integration that converts natural-language descriptions into executable plan JSON, enabling non-technical users to configure reconciliation rules without code for reconciliation platform.",
                "Improved document ingestion across PDF, DOCX, Excel, and image formats; extended retrieval logic and permission-based access controls and extracted into tools for an LLM agent.",
                "AI Validation Platform: Architected a RAG validation framework (LLM-as-a-Judge); improved throughput by 35% via multithreading and built an AI agent with custom system prompt and tool routing.",
                "SD-WAN Portal: Shipped REST APIs (Flask, MongoDB) for Cisco's SD-WAN portal; cut service latency by 20% through query optimization."
            ],
            isOpen: true
        },
        {
            role: "Freelance Software Engineer",
            company: "VirKamal Logistics Solutions",
            duration: "Jan 2024 - Dec 2024",
            responsibilities: [
                "Designed and delivered a full-stack Warehouse Management System (Django REST Framework, React, MUI, TanStack, PostgreSQL) for a bonded warehouse, owning architecture end-to-end.",
                "Built automated document parsing pipelines (pypdf, pdfplumber, Pandas) to extract structured data from complex Indian Customs PDFs, eliminating manual data entry.",
                "Engineered automated document generation (WeasyPrint) for GRNs, gatepasses, and invoices; designed relational schema for inventory/dispatches with zero-downtime CI/CD."
            ],
            isOpen: false
        },
        {
            role: "Software Development Engineer Intern",
            company: "Master-O",
            duration: "July 2023 - August 2023",
            responsibilities: [
                "Made a prototype for in browser webcam proctoring using OpenCVJS.",
                "Automated 80% of the customer support process by implementing a chatbot via reducing response time by more than 90%.",
                "Developed SCORM Content Web Player from scratch and integrated with the existing LMS.",
                "Worked on the development of the company's website using NextJS and Redux."
            ],
            isOpen: false
        },
        {
            role: "Technology Intern",
            company: "Lenskart",
            duration: "July 2022 - August 2022",
            responsibilities: [
                "Automated repetitive tasks and generated daily inventory reports by coding macros using VBA.",
                "Collaborated closely with the team leader to gain insights into ongoing projects."
            ],
            isOpen: false
        }
    ],

    education: [
        {
            logo: srm,
            degree: "B.Tech, Computer Science Engineering - Specialization: Data Science & Artificial Intelligence",
            institute: "SRM University",
            duration: "2020 - 2024"
        }
    ],

    skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "Rust",
        "SQL",
        "React",
        "Vue",
        "MUI",
        "TanStack",
        "FastAPI",
        "Django",
        "Flask",
        "REST APIs",
        "Pandas",
        "Microservices",
        "Async Programming",
        "LangChain",
        "Haystack",
        "RAG Pipelines",
        "Agentic AI",
        "Prompt Engineering",
        "Embeddings",
        "Vector Databases (Milvus)",
        "PyTorch",
        "Hugging Face",
        "Azure (OpenAI, AI Search, Cosmos DB)",
        "Docker",
        "CI/CD",
        "Git",
        "PostgreSQL",
        "MongoDB",
        "Cosmos DB"
    ],

    about: {
        greeting: [
            "Hi, I'm Samarth!",
            "I'm a Python Developer and AI Engineer passionate about building scalable backends and intelligent systems."
        ],
        details: [
            "I completed my B.Tech in Computer Science and Engineering from SRM University in 2024, specializing in Data Science & Artificial Intelligence.",
            "I have extensive experience architecting full-stack applications, automating data pipelines, and building RAG frameworks and Agentic AI solutions.",
            "I am currently working as a Systems Engineer at Tata Consultancy Services, driving AI agent integration and platform optimization."
        ]
    },

    links: {
        linkedin: "https://www.linkedin.com/in/samarth-pal-antil/",
        github: "https://github.com/antil-samarth",
        mailLink: "mailto:antil.samarth@gmail.com",
        mail: "antil.samarth@gmail.com",
        website: "https://antil-samarth.com",
        phone: "+919711166863"
    }
}
