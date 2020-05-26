const args = process.argv
const downloadFromReddit = require('./src/downloader')

const props = args.splice(2)

downloadFromReddit(props)
