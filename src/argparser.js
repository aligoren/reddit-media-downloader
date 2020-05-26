const argParser = (args = []) => {

    let url = ''
    let fileName = ''
    let type = ''
    let folder = ''

    args.forEach(arg => {
        if (arg.startsWith('--url')) {
            url = arg.replace('--url=', '')
        } else if (arg.startsWith('--file')) {
            fileName = arg.replace('--file=', '')
        } else if (arg.startsWith('--type')) {
            type = arg.replace('--type=', '')
        } else if (arg.startsWith('--folder')) {
            folder = arg.replace('--folder=', '')
        }
    })

    if (!type) {
        type = 'image'
    }

    if (type == 'image' && !fileName) {
        fileName = 'image.png'
    } else if (type == 'video' && !fileName) {
        fileName = 'video.mp4'
    }

    return {
        url,
        fileName,
        type,
        folder
    }

}

module.exports = argParser