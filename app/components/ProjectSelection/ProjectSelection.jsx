//Renders component on the client side/browser - use for components with interactivity
"use client";
import React, { useState, useEffect } from 'react';
import { projectsData } from './projectsData.js';
import styles from './ProjectSelection.module.css';


//Project Selection Component
export default function ProjectSelection(){
    //State that keeps track of current tag
    const [tag, setTag] = useState('All');
    //State that keeps track of projects to show on screen
    const [currentProjects, setProjects] = useState(projectsData);

    //Hook that runs everytime there is a change to the tag state
    useEffect(() => {
        //Filter that only returns project which have the current tag 
        const filteredProjects = projectsData.filter((project) => {
            return project.tag.includes(tag)
        })
        setProjects(filteredProjects);
    }, [tag]); 

    const handleClick = (newTag) =>{
        //Updates the tag state with a new tag
        setTag(newTag);
    }

    return(
        <div>
            <div className={styles.btnContainer}>
                <button className={styles.btn} onClick={() => handleClick('All')}>All</button>       
                <button className={styles.btn} onClick={() => handleClick('Web')}>Web</button>
                <button className={styles.btn} onClick={() => handleClick('UI')}>UI</button>    
                <button className={styles.btn} onClick={() => handleClick('Email')}>Email</button>      
            </div>
            <div className={styles.cardsContainer}>
                {currentProjects.map(project => (
                    <div key={project.id} className={styles.card}>
                        <h3>{project.title}</h3>
                        <img src={project.image} className={styles.cardImg}/>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
