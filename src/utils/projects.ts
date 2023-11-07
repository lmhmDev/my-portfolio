import { Project } from './types'
import { technologies } from './technologies'
import { NextTech, TypescriptTech, TailwindTech, ReactTech } from './constants'

export const projects: Project[] = [
    {
        imgUrl: '/img/task-it.png',
        name: 'Task it',
        description:
            'Task it is a kanban board that helps you organize your todos between different columns using drag and drop.',
        technologies: [ReactTech, NextTech, TypescriptTech, TailwindTech],
    },
    {
        imgUrl: '/img/tell-me-more.png',
        name: 'Tell me more',
        description:
            'Web App that tells you a fun fact about anything you can describe in 2 words or less.',
        technologies: [ReactTech, NextTech, TypescriptTech, TailwindTech],
    },
    {
        imgUrl: '/img/paas.png',
        name: 'PAAS (Pets As A Service)',
        description:
            'Web App to fetch random dogs and cats pictures (your choice) and store your favorite ones in your browser.',
        technologies: [ReactTech, TypescriptTech],
    },
]
