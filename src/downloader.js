const { httpClient, downloadFile } = require('./httpClient')
const { videoFormatExtracter, mediaUrlExtracter } = require('./extracter')
const argParser = require('./argparser')

const getMediaUrl = async (url, format) => {
    const response = await httpClient(url)

    let downloadUrl = mediaUrlExtracter(response, format)

    return downloadUrl

}

const downloader = async (args = []) => {

    if(!args.length) new Error(`Props didn't passed`)

    const { url, fileName, type, folder  } = argParser(args)

    const mediaUrl = await getMediaUrl(url, type)

    let downloadUrl = mediaUrl

    if (type == 'video') {
        const getVideoFormats = await httpClient(mediaUrl)
        const formats = videoFormatExtracter(getVideoFormats)

        const videoBaseUrl = mediaUrl.replace('/DASHPlaylist.mpd', '')
        
        const format = formats[0] || 96

        downloadUrl = `${videoBaseUrl}/DASH_${format}`
    }

    downloadFile(downloadUrl, fileName, folder)
}

module.exports = downloader