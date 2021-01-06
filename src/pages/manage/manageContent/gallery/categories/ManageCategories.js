import React, { useEffect } from 'react'
import { Button, Container, TextField, Typography } from '@material-ui/core'
import srigmadeitAPI, { dataSources } from '../../../../../services/srigmadeitAPI.service'
import cosService from '../../../../../services/objectStorage.service'

const ManageCategories = (props) => {
    return (
        <Container>
            <CreateCategory {...props} />
            <br />
            <EditCategory {...props} />
        </Container>
    )
}

const CreateCategory = (props) => {
    const { eventId } = props;
    const [categoryName, setCategoryName] = React.useState('');
    const [order, setOrder] = React.useState(0);
    return (
        <Container>
            <Typography>Create Category</Typography>
            <TextField label="category name" value={categoryName} onChange={(e) => { setCategoryName(e.target.value) }} />
            <TextField label="category order" type="number" value={order} onChange={(e) => { setOrder(e.target.value) }} />
            <Button type="submit" value="submit" variant="contained" color="secondary" onClick={() => srigmadeitAPI.createCategory(eventId, categoryName, order).then(() => window.alert('success')).catch((e) => window.alert(e))}> Submit </Button>
        </Container>
    )
}

const EditCategory = ({ eventId, cosConfig }) => {
    const [categories, setCategories] = React.useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = React.useState();
    const [deleteURL, setDeleteURL] = React.useState();
    const photosInputRef = React.useRef(null);
    useEffect(() => {
        srigmadeitAPI.getCategories(eventId).then(ret => {
            setCategories(ret);
            if (ret.length > 0) setSelectedCategoryId(ret[0]._id);
        });
    }, [eventId]);
    return (
        <Container>
            Edit Category:
            <select value={selectedCategoryId} onChange={(e) => setSelectedCategoryId(e.target.value)}>
                {categories.map((categoryMeta) => {
                    return <option key={categoryMeta.name} value={categoryMeta._id} > {categoryMeta.name} </option>
                })}
            </select>
            <input required multiple id="uploadPhotos" ref={photosInputRef} type="file" accept="image/*" />
            <button onClick={() => uploadPhotos(eventId, selectedCategoryId, photosInputRef, cosConfig)}> upload photos </button>

            Delete Photos:
            <br />
            photo link
            <input onChange={(e) => setDeleteURL(e.target.value)} />
            <button onClick={(e) => deletePhoto(deleteURL, cosConfig)}> delete photo </button>
        </Container>
    )
}

async function uploadPhotos(eventId, categoryId, photosRef, cosConfig) {
    try {
        const photos = [...photosRef.current.files];
        const media_ids = await srigmadeitAPI.createMedia(eventId, categoryId, dataSources.photosCOS, photos.length);
        await cosService.uploadCOS(cosConfig, media_ids, photos, console.log);

    }
    catch (err) {

    }
}

async function deletePhoto(deleteURL, cosConfig) {
    const deleteId = deleteURL.substring(deleteURL.lastIndexOf('/') + 1)
    if (srigmadeitAPI.deleteMedia(deleteId, cosConfig)) {
        cosService.deleteCOS(cosConfig, [deleteId])
    }
}

export default ManageCategories;