import React from 'react';

export default function ShowUser(props) {
    const { user } = props;
    return (
        <>
            {
                user.map((value, index) => (
                    <ul key={index}>
                        <li>
                            {value.name}
                        </li>
                        <li>
                            {value.email}
                        </li>
                    </ul>
                ))
            }
        </>
    )
}
