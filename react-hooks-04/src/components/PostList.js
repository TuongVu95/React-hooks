import React from 'react';

export default function PostList(props) {
    const { post } = props;
    return (
        <ul className="post-list">
            {
                post.map((value, index) => (
                    <li key={index}>
                        {value.title}
                    </li>
                ))
            }
        </ul>
    )
}
