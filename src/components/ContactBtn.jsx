import React from 'react';

function contactBtn (click, props) {
    return(
<svg onclick={click} width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
<rect width="5" height="23" fill="red"/>
<rect x="16" width="5" height="23" fill="red"/>
<rect x="8" width="5" height="23" fill="red"/>
</svg>

    )
};

export default contactBtn;



