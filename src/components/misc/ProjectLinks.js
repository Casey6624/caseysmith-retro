import React from "react"
import Icons from "../Icons/Icons"
import Button from '@material-ui/core/Button';

export default function ProjectLinks({ github = "https://github.com/casey6624", project }){
    return(
        <div className="project-links-container">
            <p id="githubLogo" onClick={() => window.open(github)}>{Icons.Github} </p> 
            <Button color="secondary" onClick={() => window.open(github)}>
                View This Project on GitHub
            </Button>        
        </div>
    )
}