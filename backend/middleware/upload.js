const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/")
    },

    // defines how files will be named
    filename: function (req, file, cb) {
        cb(null, Date.now()+"-"+file.originalname)
    },
})

// create the multer insteance with our storage configuratuin
const upload = muller({ storage: storage})

// export the configured muller instance for use in routes
module.exports = upload
