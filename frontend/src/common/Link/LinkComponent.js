import { useRef } from "react";
import { useNavigation } from 'react-router-dom';

function LinkComponent({workRef, projectRef, setPlace}) {

    return (
        <div className="Link">
            <div className="Links mt-12">
                <ul>
                    {window.location.pathname !== "/" ?
                        window.location.pathname === "/blogs" ?
                        <li><a href="/" ><h5 class="text-xs font-bold underline text-gray-100 hover:text-gray-400 mb-6">HOME</h5></a></li>
                        :
                        <li><a href="/blogs" ><h5 class="text-xs font-bold underline text-gray-100 hover:text-gray-400 mb-6">BLOGS</h5></a></li>
                        :
                        <><li><a href="#work" ><h5 class="text-xs font-bold text-gray-100 hover:text-gray-400 mb-6">WORK EXPERIENCE</h5></a></li>
                        <li><a href="#projects"><h5 class="text-xs font-bold text-gray-100 hover:text-gray-400 mb-6">PROJECTS</h5></a></li>
                        <li><a href="#skills"><h5 class="text-xs font-bold text-gray-100 hover:text-gray-400 mb-6">SKILLS</h5></a></li>
                        <li><a href="/blogs"><h5 class="text-xs font-bold text-gray-100 hover:text-gray-400 mb-6">BLOGS</h5></a></li>
                        <li><a href="#contact"><h5 class="text-xs font-bold text-gray-100 hover:text-gray-400 mb-6">CONTACT</h5></a></li></>
                    }
                </ul>
            </div>
        </div>
    )
}

export default LinkComponent;