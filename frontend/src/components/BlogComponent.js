import {useState, useEffect} from 'react';
import axios from "axios";

function BlogComponent() {
    const [blog, setBlog] = useState();

    useEffect(() => {
        renderItems()
    },[])

    const renderItems = async() => {
        const items = await axios.get("/api/blogs/");
        const posts = items.data;
        setBlog(posts);
    };

    const posts = blog?.map((post, i) => (
        <li key={i} className="list-group-item">
            <div><span>{post.title}</span></div>
            <div><span>{post.content}</span></div>
        </li>
    ));

    return (
        <div className="Blog">
            <ul className="list-group list-group-flush border-top-0">
              {posts}
            </ul>
        </div>
      );
}

export default BlogComponent;