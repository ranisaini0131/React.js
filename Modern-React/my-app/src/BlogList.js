import React from 'react'
// import jsonArray from 'C:\Users\Hp\OneDrive\Desktop\React\Modern-React\data\db.json'

function BlogList({ jsonArray, title }) {

    // const blog = props.blog
    // const title = props.title

    return (
        <div>
            <h1>{title}</h1>
            {jsonArray.map((blog) => (
                <div key={jsonArray.id}>
                    <h2>{jsonArray.title}</h2>
                    <p>Written by {jsonArray.author}</p>
                </div>
            ))}

        </div>
    )
}

export default BlogList