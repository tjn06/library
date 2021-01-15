import React from 'react';

function contactBtn ({left, center, right}, props) {
    return(
//         <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg%22%7B...props%7D%3E
// <rect width="5" height="23" fill={left}/>
// <rect x="16" width="5" height="23" fill={center}/>
// <rect x="8" width="5" height="23" fill={right}/>
// </svg>

<svg width="95" height="95" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<circle cx="47.5" cy="43.5" r="42.5" fill="#FCA300" stroke="#4F4F4F" stroke-width="2"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="95" height="95" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
<text x="50%" y="48%" dominant-baseline="middle" font-size="18" font-weight="bold" font-family="Helvetica" text-anchor="middle" fill="#4F4F4F">Kontakt</text>
</svg>

    )
};

export default contactBtn;