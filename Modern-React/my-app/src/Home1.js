import React, { useEffect, useState } from 'react'
import BlogList from './BlogList.js';

function Home1() {

    const [blog, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum...", author: 'mario', id: 1 },
        { title: "My new website", body: "lorem ipsum...", author: 'mayoshi', id: 2 },
        { title: "My new website", body: "lorem ipsum...", author: 'mario', id: 3 },
    ]);

    const [name, setName] = useState('mario')

    const handleDelete = (id) => {
        const newBlog = blog.filter(blog => blog.id !== id)
        setBlogs(newBlog)
    }

    useEffect(() => {
        console.log('use Effect ran');
        console.log(name)
    }, [name])

    return (
        <div>

            <BlogList blog={blog} title='All Blogs' handleDelete={handleDelete} />
            <BlogList blog={blog.filter((blog) => blog.author === 'mario')} title="Mario' s blogs" />
            <button onClick={() => setName('luigi')}>change Name</button>
            <p>{name}</p>

        </div>
    )
}

export default Home1