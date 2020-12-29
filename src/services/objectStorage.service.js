import { S3 } from 'aws-sdk'
const Compress = require('compress.js')

const COS = {
    uploadCOS: uploadCOS
}
export default COS;

// upload to COS
async function uploadCOS(secretConfig, objectIDs, objects, setLoadingStatusText) {
    var cos = new S3(secretConfig);
    const upload = (media_id, file) => {
        return cos.upload({
            Bucket: 'srigmadeit',
            ACL: 'public-read',
            Key: media_id,
            Body: file,
            CacheControl: "public, max-age=15552000"
        }).promise()
            .then(() => {
                // console.log(`Item: created!`);
            })
            .catch((e) => console.log(e));
    }
    // just assert ObjectIDs and objects lengths are the same for sure
    if (objectIDs.length !== objects.length) throw "Did not receive IDs for all objects to upload to COS"
    setLoadingStatusText && setLoadingStatusText("Attempting to compress files... This may take a while.");
    // compress files
    objects = await compress(objects);
    // console.log(objects)
    // upload files
    for (let ii = 0; ii < objects.length; ii++) {
        setLoadingStatusText && setLoadingStatusText("Files are compressed, uploading files to IBM Cloud storage. \n file:" + ii)
        upload(objectIDs[ii], objects[ii]);
    }
    setLoadingStatusText("Done")
}

function compress(files) {
    const compress = new Compress();
    return compress.compress(files, {
        size: 4,
        quality: .75,
        resize: true // keeps aspect ratio, drops to 1920px max width/height: can set alternative with maxWidth/Height
    }).then((data) => {
        return data.map(pic => Compress.convertBase64ToFile(pic.data, pic.ext))
    })
}

async function deleteCOS(secretConfig, objectIDs) {
    var cos = new S3(secretConfig);
    const deleteObjects = (toDelete) => {
        return cos.deleteObjects({
            Bucket: 'srigmadeit-storage-cos-standard-s6x',
            Delete: {
                Objects: {
                    toDelete
                }
            }
        }).promise()
            .then(() => {
                // console.log(`Item: deleted!`);
                return true;
            })
            .catch((e) => console.log(e));
    }
    let toDelete = objectIDs.map((objectID) => { return { 'Key': objectID } })
    await deleteObjects(toDelete);
}