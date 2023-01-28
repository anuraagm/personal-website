import IntroComponent from "../Intro/IntroComponent";
import WorkComponent from "../Work/WorkComponent";
import LinkComponent from "../../common/Link/LinkComponent";
import FooterComponent from "../Footer/FooterComponent";

function HomeComponent () {
    return (
        <div className="Home lg:h-screen flex mx-auto p-5 grid lg:grid-cols-7 md:grid-cols-1 md:p-4">
            <div className="flex-1 flex overflow-hidden lg:col-start-1 lg:col-end-3 mb-10">
                <div className="flex-1 overflow-y-scroll">
                    <IntroComponent></IntroComponent>
                    <div className="hidden lg:block">
                        <LinkComponent></LinkComponent>
                    </div>
                    <div className="mt-10 invisible lg:visible">
                        <FooterComponent></FooterComponent>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex overflow-hidden lg:col-start-4 lg:col-end-8 ">
                <div className="flex-1 overflow-y-scroll">
                    <WorkComponent></WorkComponent>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;