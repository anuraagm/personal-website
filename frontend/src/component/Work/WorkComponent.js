import {useState, useEffect} from 'react';
import axios from 'axios';

function WorkComponent () {

    const [work, setWork] = useState(null);
    const [project, setProjects] = useState(null);

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
        <div className="Work">
            <div className='mb-12'>
                <h2 class="text-2xl font-bold text-gray-100 mb-6">Work Experience</h2>
                {work !== null ? (
                        work.map(element => 
                            <div className='mb-6'>
                                <a href="#" class="block p-6 bg-white border border-gray-200 rounded-sm shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{element.company_name}</h5>
                                    <p class="font-normal text-gray-700 dark:text-gray-400">{element.role_details}</p>
                                </a>
                            </div> 
                        )
                    )
                    :
                    <h1>No Work Data Retrieved</h1>
                }
            </div>
            <div className='mt-12'>
                <h2 class="text-2xl font-bold text-gray-100 mb-6">Projects</h2>
                {project !== null ? (
                        project.map(element => 
                            <div className='mb-6'>
                                <a href="#" class="block p-6 bg-white border border-gray-200 rounded-sm shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{element.project_name}</h5>
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
    );
}

export default WorkComponent;