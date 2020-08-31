import React from 'react';

const RefChildComponent = React.forwardRef((props, ref) => {
    return <input type="text" ref={ref}></input>
})
export default RefChildComponent