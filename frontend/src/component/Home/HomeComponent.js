import IntroComponent from "../Intro/IntroComponent";
import WorkComponent from "../Work/WorkComponent";
import LinkComponent from "../../common/Link/LinkComponent";
import FooterComponent from "../Footer/FooterComponent";
import { useEffect, useRef, useState } from "react";
import link from "./link.png";

function HomeComponent () {

    const workRef = useRef();
    const projectRef = useRef();
    const [place, setPlace] = useState(workRef);

    return (
        <div className="Home lg:h-screen flex mx-auto grid lg:grid-cols-7 md:grid-cols-1">
            <div className="px-8 py-4 lg:col-start-1 lg:col-end-3">
                <div className="lg:fixed lg:w-1/4">
                    <IntroComponent></IntroComponent>
                    <div className="hidden lg:block">
                        <LinkComponent workRef={workRef} projectRef={projectRef} setPlace={setPlace}></LinkComponent>
                    </div>
                    <div className="hidden lg:block mt-12">
                        <FooterComponent></FooterComponent>
                    </div>
                    <div className="block md:hidden mt-6">
                        <a href="#">
                            <div className="flex items-center">
                                <img className="mt-2 mr-1" src={link} style={{width:"3%"}}/>
                                <p className='text-xs text-gray-200 mt-2'>Checkout my Blog</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex overflow-hidden lg:col-start-4 lg:col-end-8 px-4">
                <div className="flex-1 overflow-y-scroll">
                    <WorkComponent workRef={workRef} projectRef={projectRef} place={place}></WorkComponent>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;