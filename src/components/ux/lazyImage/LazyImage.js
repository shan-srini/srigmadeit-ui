import React, { useState, useEffect } from 'react'

/**
 * Everything in my power to reduce dependencies size... 
 * This should work fine.
 */
// 1x1 png transparent purple
const placeHolder =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='
const LazyImage = ({ src, className }) => {
    const [renderSrc, setImageSrc] = useState(placeHolder)
    const [imageRef, setImageRef] = useState()
    useEffect(() => {
        let observer
        let unmounted = false

        if (imageRef && renderSrc === placeHolder) {
            if (IntersectionObserver) {
                observer = new IntersectionObserver(
                    entries => {
                        entries.forEach(entry => {
                            // when image is visible in the viewport
                            if (
                                !unmounted &&
                                (entry.intersectionRatio > 0 || entry.isIntersecting)
                            ) {
                                setImageSrc(src);
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
                setImageSrc(src);
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
        <img ref={setImageRef} className={className} src={renderSrc} />
    )
}

export default LazyImage;