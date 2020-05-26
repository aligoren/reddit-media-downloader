const https = require('https')
const fs = require('fs')

/**
 * 
 * @param {string} url Http client to http requests
 */
const httpClient = (url) => {
    return new Promise((resolve, reject) => {
        
        if(!url) reject(new Error('URL is missed'))

        https.get(url, response => {
            
            let data = ''

            response.on('data', chunk => data += chunk)

            response.on('end', () => resolve(data))

            response.on('error', reject)

        })

    })
}

/**
 * 
 * @param {string} url Media url
 * @param {string} fileName File name for the downloaded file
 * @param {string} folder If the folder is not empty, it will create a folder into the directory you specified
 */
const downloadFile = (url, fileName = 'image.png', folder = '') => {
    https.get(url, response => {

        let downloadDir = '';

        if (folder) {
            downloadDir = `${folder}/`

            fs.exists(folder, (exists) => {
                if (!exists) {
                    fs.mkdir(folder, (err) => { 
                        if(err) throw err
                    })
                }
            })
        }

        const file = fs.createWriteStream(downloadDir + fileName)

        response.pipe(file)

    })
}

module.exports = {
    httpClient,
    downloadFile
}