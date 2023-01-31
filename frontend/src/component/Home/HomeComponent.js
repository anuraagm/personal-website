import IntroComponent from "../Intro/IntroComponent";
import WorkComponent from "../Work/WorkComponent";
import LinkComponent from "../../common/Link/LinkComponent";
import FooterComponent from "../Footer/FooterComponent";
import { useEffect, useRef, useState } from "react";

function HomeComponent () {

    const workRef = useRef();
    const projectRef = useRef();
    const [place, setPlace] = useState(workRef);

    return (
        <div className="Home lg:h-screen flex mx-auto grid lg:grid-cols-7 md:grid-cols-1">
            <div className="relative px-8 py-4 lg:col-start-1 lg:col-end-3">
                <div className="lg:fixed lg:w-1/4">
                    <IntroComponent></IntroComponent>
                    <div className="hidden lg:block">
                        <LinkComponent workRef={workRef} projectRef={projectRef} setPlace={setPlace}></LinkComponent>
                    </div>
                    <div className="invisible lg:visible">
                        <FooterComponent></FooterComponent>
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