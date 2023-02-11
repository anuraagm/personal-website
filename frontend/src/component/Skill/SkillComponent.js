import { useState, useEffect } from "react";
import axios from "axios";


function SkillComponent() {

    const [skills, setSkills] = useState();
    const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

    useEffect(() => {
        axios.get(`${API_ENDPOINT}/technology/`)
        .then(res => {
            console.log("res data ",res.data);
            setSkills(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[]);

    return (
        <div className="Skills">
            {skills ? 
                (
                    <div className="flex flex-wrap">
                        {skills.map((element, index) => 
                            <div key={index} className='w-1/3 p-2'>
                                <a href="#skills" class="block p-6 bg-white border border-gray-200 rounded-sm shadow hover:bg-zinc-100 bg-zinc-800 border-zinc-700 hover:bg-zinc-700 flex justify-center items-center">
                                    <h5 class="mb-2 lg:text-2xl font-bold tracking-tight text-gray-100">{element.technology_name}</h5>
                                </a>
                            </div> 
                        )}
                    </div>
                )
                :
                <h1>No Skill Data Retrieved</h1>
            }
        </div>
    )
}

export default SkillComponent;