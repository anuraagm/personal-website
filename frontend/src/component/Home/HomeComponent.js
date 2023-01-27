import IntroComponent from "../Intro/IntroComponent";
import WorkComponent from "../Work/WorkComponent";

function HomeComponent () {
    return (
        <div className="Home h-screen flex mx-auto p-5 grid lg:grid-cols-7 md:grid-cols-1 md:p-12">
            <div className="lg:col-start-1 lg:col-end-3 mb-10">
                <IntroComponent></IntroComponent>
            </div>
            <div className="flex-1 flex overflow-hidden lg:col-start-4 lg:col-end-8 ">
                <div className="flex-1 overflow-y-scroll">
                    <WorkComponent className="flex-1 overflow-y-scroll"></WorkComponent>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;