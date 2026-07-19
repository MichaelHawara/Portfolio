import React from 'react';
import ProjectCard from '../components/ProjectCard';
import "../styles/Projects.css";

function Project(title, link, vid, desc) {
    this.title = title;
    this.vid = vid;
    this.link = link;
    this.desc = desc;
}


function Projects() {
    var projs = [
        new Project("Battleship Game", "https://github.com/hansintheair/BattleshipWeb", "assets/temp_vid.mp4", "A battleship game developed using React and WebSockets."),
        new Project("Battleship Game", "https://github.com/hansintheair/BattleshipWeb", "assets/battleshipImage.jpg"),
        new Project("Battleship Game", "https://github.com/hansintheair/BattleshipWeb", "assets/battleshipImage.jpg")
    ];


    return (
        <div>
            <title>M.H. Projects</title>
            <div className="cardRow">
                {projs.map((proj) => (
                    <div className='cardRow'>
                        <ProjectCard projTitle={proj.title} gitlink={proj.link} vidPath={proj.vid} desc={proj.desc} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;