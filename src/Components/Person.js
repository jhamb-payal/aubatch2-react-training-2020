import React from 'react';

const Person = (props) => {
    const {item} = props
    return <li>I am {item.name}</li>
}

export default Person