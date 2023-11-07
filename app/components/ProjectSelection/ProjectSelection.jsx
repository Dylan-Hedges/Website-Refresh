//Renders component on the client side/browser - use for components with interactivity
"use client";
import React, { useState, useEffect } from 'react';
import { projectsData } from './projectsData.js';

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
            <h2>Projects</h2>
            <button onClick={() => handleClick('All')}>All</button>       
            <button onClick={() => handleClick('Web')}>Web</button>
            <button onClick={() => handleClick('UI')}>UI</button>    
            <button onClick={() => handleClick('Email')}>Email</button>      
            {currentProjects.map(project => (
                <div key={project.id} style={{border: '1px solid grey', width: '500px', margin: '20px'}}>
                    <h2>{project.title}</h2>
                    <img src={project.image} style={{width:'200px'}}/>

                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    )
}
