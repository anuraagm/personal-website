import IntroComponent from "../Intro/IntroComponent";
import WorkComponent from "../Work/WorkComponent";

function HomeComponent () {
    return (
        <div className="Home mx-auto p-5 grid md:grid-cols-2 sm:grid-cols-1 gap-4">
            <IntroComponent className="col-span-2"></IntroComponent>
            <WorkComponent className="col-span-2"></WorkComponent>
        </div>
    );
}

export default HomeComponent;