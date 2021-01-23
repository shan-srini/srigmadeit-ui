import { S3 } from 'aws-sdk'
const Compress = require('compress.js')

const COS = {
    uploadCOS: uploadCOS,
    deleteCOS: deleteCOS
}
export default COS;

// upload to COS
async function uploadCOS(secretConfig, objectIDs, objects, setLoadingStatusText = console.log, shouldCompress = true) {
    var cos = new S3(secretConfig);
    const upload = (media_id, file) => {
        return cos.putObject({
            Bucket: 'srigmadeit',
            ACL: 'public-read',
            Key: media_id,
            Body: file,
            CacheControl: "public, max-age=604800"
        }).promise()
            .then(() => {
                // console.log(`Item: created!`);
            })
            .catch((e) => console.log(e));
    }
    // just assert ObjectIDs and objects lengths are the same for sure
    if (objectIDs.length !== objects.length) throw "Did not receive IDs for all objects to upload to COS"
    // compress files
    if (shouldCompress) {
        setLoadingStatusText && setLoadingStatusText("Attempting to compress files... This may take a while.");
        objects = await compress(objects);
    }
    // console.log(objects)
    // upload files
    for (let ii = 0; ii < objects.length; ii++) {
        setLoadingStatusText && setLoadingStatusText("now uploading files to Cloud storage. \n file:" + ii)
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
    const remove = (toRemove) => {
        return cos.deleteObject({
            Bucket: 'srigmadeit',
            Key: toRemove
        }).promise()
            .then(() => {
                console.log(`Item: ${toRemove} deleted!`);
                return true;
            })
            .catch((e) => console.log(e));
    }
    for (let ii = 0; ii < objectIDs.length; ii++) {
        await remove(objectIDs[ii])
    }
}