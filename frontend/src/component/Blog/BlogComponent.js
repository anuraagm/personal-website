import { useEffect, useState } from "react";
import axios from "axios";
import LinkComponent from "../../common/Link/LinkComponent";
import FooterComponent from "../Footer/FooterComponent";
import { useNavigate } from 'react-router-dom';

function BlogComponent() {

    const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
    const [blogs, setBlogs] = useState();
    let navigate = useNavigate();

    const routeBlog = (id) => {
        console.log('id : ',id);
        let path = `/post/${id}`;
        navigate(path);
    }


    useEffect(() => {
        axios.get(`${API_ENDPOINT}/posts/`)
        .then(posts => {
            console.log(posts.data);
            setBlogs(posts.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[]);

    return (
        <div className="BlogComponent m-6">
            {
                blogs ?
                <div>
                    <h1 className="text-2xl font-bold text-gray-100 mb-6">Blog</h1>
                    <div className="flex flex-wrap">
                        {blogs.map((element, index) => 
                            <div key={index} className='p-2 w-1/3'>
                                <div class="bg-zinc-800 border-zinc-700 hover:bg-zinc-700 rounded-lg mb-5">
                                    <a href="#">
                                        <img class="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt=""/>
                                    </a>
                                    <div class="p-5">
                                        <a href="#">
                                            <h5 class="text-gray-200 font-bold text-2xl tracking-tight mb-2">{element.title}</h5>
                                        </a>
                                        <p class="font-normal text-gray-300 mb-3">{element.preview}</p>
                                        <a class="text-white bg-zinc-600 border-zinc-700 hover:bg-zinc-500 focus:ring-4 
                                        focus:ring-zinc-600 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex 
                                        items-center" onClick={()=>{routeBlog(element.id)}}>
                                            Read more
                                        </a>
                                    </div>
                                </div>
                            </div> 
                        )}
                    </div>
                </div>
                :
                <h1 className="text-2xl font-bold text-gray-100 mb-6">Blog - Coming Soon!</h1>
            }
            <div className="hidden lg:block">
                <LinkComponent></LinkComponent>
            </div>
            <div className="hidden lg:block mt-8 bottom-0 lg:w-1/4">
                <FooterComponent></FooterComponent>
            </div>
        </div>
    )
}

export default BlogComponent;