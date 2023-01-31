import { useState, useEffect } from "react";
import axios from "axios";


function SkillComponent() {

    const [skills, setSkills] = useState();

    useEffect(() => {
        axios.get('/technology/')
        .then(res => {
            console.log("res data ",res.data);
            setSkills(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[]);

    return (
        <div className="Skills" id="skills">
            {skills ? 
                (
                    <div className="flex flex-wrap">
                        {skills.map((element, index) => 
                            <div key={index} className='w-1/3 p-2'>
                                <a href="#" class="block p-6 bg-white border border-gray-200 rounded-sm shadow hover:bg-zinc-100 dark:bg-zinc-800 dark:border-zinc-700 dark:hover:bg-zinc-700 flex justify-center items-center">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100">{element.technology_name}</h5>
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