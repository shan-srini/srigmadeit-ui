// Props W3 :)
import React from 'react'
import './SimpleArrow.css'


const SimpleArrow = (props) => {
    const { right, left, up, down } = props;
    const propsClone = Object.assign({}, props);
    let rotateStyle;
    if (right) {
        rotateStyle = 'rotateRight';
        delete propsClone.right;
    } else if (left) {
        rotateStyle = 'rotateLeft';
        delete propsClone.left;
    } else if (up) {
        rotateStyle = 'rotateUp';
        delete propsClone.up;
    } else if (down) {
        rotateStyle = 'rotateDown';
        delete propsClone.down;
    }

    return (
        <div className='arrowContainer' {...propsClone}>
            <div className={`arrow ${rotateStyle}`} />
        </div>
    )
}

export default SimpleArrow;