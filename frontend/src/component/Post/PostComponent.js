import { useEffect, useState } from "react";
import axios from "axios";
import LinkComponent from "../../common/Link/LinkComponent";
import FooterComponent from "../Footer/FooterComponent";
import DOMPurify from 'dompurify';
import HtmlReactParser from 'html-react-parser';
import { useNavigate } from 'react-router-dom';

function PostComponent() {

    const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
    const [post, setPost] = useState();

    useEffect(() => {
        axios.get(`${API_ENDPOINT}/posts/${window.location.pathname.split("/").pop()}/`)
        .then(post => {
            console.log(post.data);
            setPost(post.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[]);

    return(
        <div className="PostComponent m-6">
            {
                <div className="PostArea">
                    <h1 className="text-2xl font-bold text-gray-100">{post?.title}</h1>
                    <div className="hidden lg:block mb-0">
                        <LinkComponent></LinkComponent>
                    </div>
                    <p className="text-gray-200 mb-6">{HtmlReactParser(DOMPurify.sanitize(post?.content))}</p>
                </div>
            }
            <div className="hidden lg:block mt-8 bottom-0 lg:w-1/4">
                <FooterComponent></FooterComponent>
            </div>
        </div>
    )
}

export default PostComponent;