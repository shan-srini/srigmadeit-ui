import React, { useRef, useState } from 'react'
import { Container } from '@material-ui/core'
import cloudStorageAPI from '../../../../services/objectStorage.service.js'
import photosStaticPageStyle from "../../../photos/Photos.style.js"

// photosPageStaticImage1
// Static images ids (keys) never change
const ManageStaticPhotos = ({ cosConfig }) => {
    const imgRef = useRef(null);
    const [indexImage, setIndexImage] = useState(0);
    return (
        <Container style={{ paddingTop: '10vh' }}>
            <div>
                0 is top left, 1 is bottom left, 2 is middle left, 3 is middle right, 4 is top right, 5 is bottom right
                <br />
                Select a number, upload a photo and submit it. You can see it right away on the photos page.
                <br />
            </div>
            <form onSubmit={(e) => setStaticImage(e, cosConfig, indexImage, imgRef)}>
                <input onChange={(e) => setIndexImage(e.target.value)} type="number" min="0" max="5" value={indexImage} />
                <input ref={imgRef} required type="file" />
                <input type="submit" />
            </form>
            {/* <RenderPreview index={indexImage} imgRef={imgRef} /> */}
        </Container>
    )
}

async function setStaticImage(e, cloudStorageConfig, index, pictureRef) {
    e.preventDefault();
    const picture = pictureRef.current.files[0];
    const idToSet = "staticPhotosPageImage" + index
    try {
        await cloudStorageAPI.uploadCOS(cloudStorageConfig, [idToSet], [picture]);
        window.alert("uploaded")
    }
    catch (err) {
        window.alert("unable to upload image:..." + err);
    }
}

// const RenderPreview = ({ indexSelected, imgRef }) => {
//     const classes = photosStaticPageStyle();
//     const reader = new FileReader();
//     if (!imgRef || !imgRef.current || !imgRef.current.files[0]) return (<div></div>);
//     reader.readAsDataURL(imgRef.current.files[0]);
//     return reader.onload((e) => {
//         console.log(e)
//         return (
//             <div>
//                 <img src={e.target.result} />
//             </div>
//         )
//     })
// }

export default ManageStaticPhotos;