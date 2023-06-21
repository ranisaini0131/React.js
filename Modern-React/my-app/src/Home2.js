import React, { useEffect, useState } from 'react'
import BlogList from './BlogList.js';

function Home2() {

    const [blog, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/jsonArray')
            .then(res => {
                return res.json();
            }).then(data => {
                setBlogs(data)
            })
    }, [])

    return (
        <div>
            {blog && <BlogList blogs={blog} title="All Blogs !" />}


        </div>
    )
}

export default Home2