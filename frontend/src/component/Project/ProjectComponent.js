import { useEffect, useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import HtmlReactParser from 'html-react-parser';

function ProjectComponent() {

    const [projectData, setProjectData] = useState();

    useEffect(() => {
        axios.get((window.location.pathname+"/"))
        .then(posts => {
            console.log(posts.data);
            setProjectData(posts.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[]);

    return (
        <div className="Project lg:h-screen flex mx-auto grid lg:grid-cols-7 md:grid-cols-1">
            <div className="px-8 py-4 lg:col-start-1 lg:col-end-3">
                <h1 className="text-2xl font-bold text-gray-100 mb-12">{projectData?.project_name}</h1>
                <div className='description mb-8'>
                    <p className="text-gray-200">{projectData?.project_description}</p>
                </div>
                <div className='details mb-8'>
                    <p className="text-gray-200">{HtmlReactParser(DOMPurify.sanitize(projectData?.project_details))}</p>
                </div>
                <p className="text-gray-200">{projectData?.project_link}</p>
            </div>
        </div>
    )
}

export default ProjectComponent;