import React from 'react';

function Test ({left, center, right}, props) {
    return(
        <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
<rect width="5" height="23" fill={left}/>
<rect x="16" width="5" height="23" fill={center}/>
<rect x="8" width="5" height="23" fill={right}/>
</svg>


    )
};

export default Test;