import {useState, useEffect, useRef, scrollIntoView} from 'react';
import axios from 'axios';
import SkillComponent from '../Skill/SkillComponent';
import ContactComponent from '../Contact/ContactComponent';

function WorkComponent ({workRef, projectRef, place}) {

    const [work, setWork] = useState(null);
    const [project, setProjects] = useState(null);

    useEffect(() => {
        console.log("changed : ",place);
    },[place]);

    useEffect(() => {
        axios.get('/projects/')
        .then(projects => {
            console.log(projects.data);
            setProjects(projects.data);
        })
        .catch(err => {
            console.log(err);
        })
        axios.get('/work/')
        .then(work => {
            console.log(work.data);
            setWork(work.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[]);

    return (
        <div className="Work overflow:scroll">
            <div className='Workdone lg:pt-12' id="work" ref={workRef}>
                <h2 class="text-2xl font-bold text-gray-100 mb-6">Work Experience</h2>
                {work !== null ? (
                        work.map(element => 
                            <div className='mb-6'>
                                <a href="#" class="block p-6 bg-white border border-gray-200 rounded-sm shadow hover:bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100">{element.company_name}</h5>
                                    <p class="font-normal text-gray-700 dark:text-gray-400">{element.role_details}</p>
                                </a>
                            </div> 
                        )
                    )
                    :
                    <h1>No Work Data Retrieved</h1>
                }
            </div>
            <div className='Projects lg:pt-12' id="projects" ref={projectRef}>
                <div>
                    <h2 class="text-2xl font-bold text-gray-100 mb-6">Projects</h2>
                    {project !== null ? (
                            project.map(element => 
                                <div className='mb-6'>
                                    <a href="#" class="block p-6 bg-white border border-zinc-200 rounded-sm shadow hover:bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100">{element.project_name}</h5>
                                        <p class="font-normal text-gray-700 dark:text-gray-400">{element.project_description}</p>
                                    </a>
                                </div> 
                            )
                        )
                        :
                        <h1>No Project Data Retrieved</h1>
                    }
                </div>
            </div>
            <div className='Skills lg:pt-12 mb-12'>
                <div>
                    <h2 class="text-2xl font-bold text-gray-100 mb-6">Skills</h2>
                    <SkillComponent></SkillComponent>
                </div>
            </div>
            <div className='Contact lg:pt-12 mb-12'>
                <div>
                    <h2 class="text-2xl font-bold text-gray-100 mb-6">Contact</h2>
                    <ContactComponent></ContactComponent>
                </div>
            </div>
        </div>
    );
}

export default WorkComponent;