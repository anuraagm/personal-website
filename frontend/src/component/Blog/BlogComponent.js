import { useEffect } from "react";
import axios from "axios";

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
        <div className="BlogComponent">
            <h1 className="text-2xl font-bold text-gray-100">Blog - Coming Soon!</h1>
        </div>
    )
}

export default BlogComponent;