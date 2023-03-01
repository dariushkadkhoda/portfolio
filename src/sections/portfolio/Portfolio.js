import './portfolio.css'
import ProjectCategories from './projectCategories';
import Projects from './projects';
import Data from './data';
import { useState } from 'react';
const Portfolio = () => {

    const [projects, setProjects] = useState(Data)
    const categories = Data.map(item =>item.category)
    const uniqueCategories =['all',...new Set(categories)]

    const filterProjectsHandler = (category) =>{
        if(category === "all" ){
            setProjects(Data)
            return
        }
        const filterProjects = Data.filter(project => project.category === category)
        setProjects (filterProjects)
    }


    return (
        <section id="portfolio">
            <h2>Recent Project</h2>
            <p>
                check out some of the projects i recently worker on for my clients . use the
                buttons to toggle the different categories
            </p>
            <div className="container portfolio__container">
                <ProjectCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
                <Projects projects={projects} />
            </div>
        </section>
    );
}

export default Portfolio;
