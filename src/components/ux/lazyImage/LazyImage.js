import React, { useState, useEffect } from 'react'

/**
 * Everything in my power to reduce dependencies size... 
 * This should work fine.
 */
// 1x1 png transparent purple
const placeHolder =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkSPxfDwADqgHh5Lh3ywAAAABJRU5ErkJggg=='
const LazyImage = (props) => {
    const [visible, setVisible] = useState(false)
    const [imageRef, setImageRef] = useState()
    useEffect(() => {
        let observer
        let unmounted = false

        if (imageRef && visible === false) {
            if (IntersectionObserver) {
                observer = new IntersectionObserver(
                    entries => {
                        entries.forEach(entry => {
                            // when image is visible in the viewport
                            if (
                                !unmounted &&
                                (entry.intersectionRatio > 0 || entry.isIntersecting)
                            ) {
                                setVisible(true);
                            }
                        })
                    },
                    {
                        threshold: 0.5,
                    }
                )
                observer.observe(imageRef)
            } else {
                // Old browsers fallback
                setVisible(true);
                console.log("Unable to lazy load images. IntersectionObserver API missing.");
            }
        }
        return () => {
            unmounted = true
            if (observer && observer.unobserve) {
                observer.unobserve(imageRef)
            }
        }
    })

    return (
        visible ?
            <img {...props} />
            :
            <img ref={setImageRef} src={placeHolder} style={{ width: '100%', height: '100%', borderRadius: '15px' }} />
    )
}

export default LazyImage;