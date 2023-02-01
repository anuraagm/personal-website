import { useEffect } from "react";
import axios from "axios";
import LinkComponent from "../../common/Link/LinkComponent";
import FooterComponent from "../Footer/FooterComponent";

function BlogComponent() {

    useEffect(() => {
        axios.get('/posts/')
        .then(posts => {
            console.log(posts.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[]);

    return (
        <div className="BlogComponent m-6 lg:w-1/4">
            <h1 className="text-2xl font-bold text-gray-100">Blog - Coming Soon!</h1>
            <div className="hidden lg:block">
                <LinkComponent></LinkComponent>
            </div>
            <div className="hidden lg:block mt-12 bottom-0">
                <FooterComponent></FooterComponent>
            </div>
        </div>
    )
}

export default BlogComponent;