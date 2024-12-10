import { ExperienceInterface } from "../types/ExperienceInterface";
import { links } from "./links";

export const experiences: ExperienceInterface[] = [
    {
        textColor: 'text-yellow',
        company: "Singapore Airlines",
        position: "Full Stack Developer Intern",
        period: "January 2024 - June 2024",
        description: ["Built a Streamlit application incorporating Generative AI and prompt engineering \
            to streamline ideation processes, resulting in accelerated innovation outcomes and enhanced collaboration.",
            "Developed prototype which integrates WebSockets, FastAPI, and React for a real-time voice chat app with audio \
            input/output using SpeechRecognition and SpeechSynthesis Web APIs.", 
        "Contributed to the front-end development, the development of an API middleware , and their integration \
        for a quiz app that provides recommendations based on the user’s emotions, in collaboration with 2 other developers."],
        links: [{
            label: "Recommendation Letter",
            url: links["sq-recommendation"],
        }]
    },
    {
        textColor: "text-blue",
        company: "National University of Singapore",
        position: "Software Developer Assistant (Part-Time)",
        period: "June 2023 - December 2024",
        description: ["Developed a chatbot that provides student hints for assignments related to Object Oriented Programming \
            with Python and ChatGPT API, to be used in a class of 500 - 600 students under the supervision of 2 professors.",
            "Employed contextual prompt engineering to generate relevant replies according to the context of the course."],
    },
    {
        textColor: "text-red",
        company: "OCBC",
        position: "Test Automation Engineer Intern",
        period: "May 2023 - August 2023",
        description: ["Wrote test cases based on the given user stories for user acceptance testing & fulfil daily quota of at least 10 per day.",
            "Conducted automated unit and integration tests with Tricentis Tosca, mainly for mobile and web integration.",
            "Analyzed data and arrange a Quality Assurance dashboard on internal OCBC applications, focusing on their downtime \
            hours and patterns to suggest changes to improve the productivity of employees."],
    },
]