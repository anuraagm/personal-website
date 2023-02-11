import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SkillComponent from '../Skill/SkillComponent';
import ContactComponent from '../Contact/ContactComponent';
import ProjectModal from '../../common/Modal/ProjectModal';

function WorkComponent ({workRef, projectRef, place}) {

    const [work, setWork] = useState(null);
    const [project, setProjects] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [currentData, setCurrentData] = useState();
    const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

    let navigate = useNavigate();

    useEffect(() => {
        console.log("changed : ",place);
    },[place]);

    useEffect(() => {
        axios.get(`${API_ENDPOINT}/projects/`)
        .then(projects => {
            console.log(projects.data);
            setProjects(projects.data);
        })
        .catch(err => {
            console.log(err);
        })
        axios.get(`${API_ENDPOINT}/work/`)
        .then(work => {
            console.log(work.data);
            setWork(work.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[]);

    const routeProject = ({id}) => {
        console.log('id : ',id);
        let path = `/projects/${id}`;
        navigate(path);
    }

    const manageModal = (elem) =>{
        console.log(elem.id);
        setOpenModal(true);
        setCurrentData(elem);
    }

    return (
        <div className="Work overflow:scroll">
            <div className='Workdone lg:pt-12' id="work" ref={workRef}>
                <h2 class="text-2xl font-bold text-gray-100 mb-6">Work Experience</h2>
                {work !== null ? (
                        work.map(element => 
                            <div className='mb-6'>
                                <a href={element.company_link} class="block p-6 border rounded-sm shadow bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100">{element.company_name}</h5>
                                    <p class="font-normal text-gray-400">{element.role_details}</p>
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
                                <div className='mb-6' id={element.id} onClick={() => manageModal(element)}>
                                    <div class="block p-6 border rounded-sm shadow bg-zinc-800 border-zinc-700 hover:bg-zinc-700" id="toggle-card">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100">{element.project_name}</h5>
                                        <p class="font-normal text-gray-400">{element.project_description}</p>
                                    </div>
                                </div>
                            )
                        )
                        :
                        <h1>No Project Data Retrieved</h1>
                    }
                    <div>
                        <ProjectModal openModal={openModal} setOpenModal={setOpenModal} data={currentData}></ProjectModal>
                    </div>
                </div>
            </div>
            <div className='Skills lg:pt-12 mb-12' id="skills">
                <div>
                    <h2 class="text-2xl font-bold text-gray-100 mb-6">Skills</h2>
                    <SkillComponent></SkillComponent>
                </div>
            </div>
            <div className='Contact lg:pt-12 mb-12' id="contact">
                <div>
                    <h2 class="text-2xl font-bold text-gray-100 mb-6">Contact</h2>
                    <ContactComponent></ContactComponent>
                </div>
            </div>
        </div>
    );
}

export default WorkComponent;