import React from 'react'
import './style.css'

const ScrollArrow = (props) => {
    const [open, setOpen] = React.useState(false);
    return (
        <div class="arrow" onClick={() => setOpen(!open)}>
            <span class={open ? "line left-open" : "line left"}></span>
            <span class={open ? "line right-open" : "line right"}></span>
        </div>
    );
};

export default ScrollArrow;