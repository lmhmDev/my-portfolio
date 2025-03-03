import { job } from './types'
import {
    ReactTech,
    NextTech,
    MaterialTech,
    FirebaseTech,
    TypescriptTech,
    HtmlTech,
    CssTech,
    LaravelTech,
    JavascriptTech,
    FlutterTech,
    PhpTech,
    NodeTech,
    ExpressTech,
    MysqlTech,
    MongoTech,
    ReactNativeTech,
} from './constants'

export const jobs: job[] = [
    {
        position: 'Development Manager',
        company: 'Renterus',
        description:
            'Leading and actively developing for mobile and web applications, I focus on system architecture and hands-on coding, ensuring the delivery of robust, scalable solutions. I steer both our in-house and freelance developers across various project sections, integrating cohesive and innovative development practices.',
        date: 'apr 2024 - present',
        technologies: [
            ReactTech,
            NextTech,
            ReactNativeTech,
            TypescriptTech,
            JavascriptTech,
            NodeTech,
            ExpressTech,
            MongoTech,
            MysqlTech,
            PhpTech,
        ],
    },
    {
        position: 'Full Stack Developer',
        company: 'Renterus',
        description:
            'Mobile app development and deployment using React Native. Design and development of microservices arquitecture backend using Nodejs and PHP. Database management (MongoDB and MySQL). Migrating web project from php to Nextjs.',
        date: 'Jan 2023 - Apr 2024',
        technologies: [
            ReactTech,
            NextTech,
            ReactNativeTech,
            TypescriptTech,
            JavascriptTech,
            NodeTech,
            ExpressTech,
            MongoTech,
            MysqlTech,
            PhpTech,
        ],
    },
    {
        position: 'React Engineer',
        company: 'Power Bargain',
        description:
            'Worked with the UX/UI team to develop a web app that let users publish their products to different online marketplaces all at once, developed different API endpoint using Firebase Functions and Typescript and helped to lead different Freelancers.',
        date: 'oct 2021 - oct 2022',
        technologies: [
            ReactTech,
            NextTech,
            TypescriptTech,
            MaterialTech,
            FirebaseTech,
        ],
    },
    {
        position: 'Software Engineer Intern',
        company: 'Rocketfy',
        description:
            'Developed a mobile app for a health company using flutter and a website for a car rental company using laravel.',
        date: 'nov 2019 - jun 2020',
        technologies: [
            HtmlTech,
            CssTech,
            JavascriptTech,
            LaravelTech,
            FlutterTech,
        ],
    },
    {
        position: 'Software Engineer Intern',
        company: 'QIPRO Soluciones',
        description:
            'Helped develop an automated system for employees to check in/out.',
        date: 'feb 2019 - jun 2019',
        technologies: [JavascriptTech],
    },
]
