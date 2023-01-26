import IntroComponent from "../Intro/IntroComponent";
import WorkComponent from "../Work/WorkComponent";

function HomeComponent () {
    return (
        <div className="Home mx-auto p-5 grid md:grid-cols-7 sm:grid-cols-1 md:p-12">
            <div className="md:col-start-1 md:col-end-3">
                <IntroComponent></IntroComponent>
            </div>
            <div className="md:col-start-4 md:col-end-7">
                <WorkComponent className="col-span-4"></WorkComponent>
            </div>
        </div>
    );
}

export default HomeComponent;