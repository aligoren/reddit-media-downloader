/**
 * 
 * @param {string} mediaString We'll parse XML document using regexp to get video formats. Videos can have different formats like 360, 720, etc.
 */
const videoFormatExtracter = (mediaString) => {

    return mediaString.match(/<BaseURL>(.*)<\/BaseURL>/g).map(val => val.replace(/<\/?BaseURL>/g,'').replace(/DASH_/g, ''))

}

/**
 * 
 * @param {string} htmlString It comes from http request. This is a response string.
 * @param {string} format video or image. By default image
 */
const mediaUrlExtracter = (htmlString, format = 'image') => {

    let result = '';

    if (format == 'image') {
        result = htmlString.match(/<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/g).find(url => url.includes('i.redd.it'))

        if (result) {
            result = result.replace(/^<a href="(.+?)"/g, '$1')
        }
    } else {
        result = htmlString.match(/<source.*?src="(.*?)"/g).find(url => url.includes('v.redd.it'))

        if (result) {
            result = result.replace(/^<source src="(.+?)"/g, '$1').split('HLSPlaylist')

            result = result[0] + 'DASHPlaylist.mpd'
        }
    }
    
    return result;
}

module.exports = {
    videoFormatExtracter,
    mediaUrlExtracter
}