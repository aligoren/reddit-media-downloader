# Reddit Media Downloader

A very simple media downloader for Reddit.

## Usage

These are CLI parameters. All media files, will be downloaded with their best quality.

### --url

Reddit thread URL. For example, [https://www.reddit.com/r/badUIbattles/comments/gqgk79/humanproof_twofactor_authentication/](https://www.reddit.com/r/badUIbattles/comments/gqgk79/humanproof_twofactor_authentication/)

**Usage example** 

`node index.js --url=https://www.reddit.com/r/badUIbattles/comments/gqgk79/humanproof_twofactor_authentication/`

By default media will be `image.png`.

### --type

There are two types you can select. These are `video` and `image`. By default type is `image`.

**Usage example** 

`node index.js --url=https://www.reddit.com/r/badUIbattles/comments/gqgk79/humanproof_twofactor_authentication/ --type=video`

### --file

If you didn't specify the file name, it will be `image.png` for images and `video.mp4` for videos.

**Usage example** 

`node index.js --url=https://www.reddit.com/r/badUIbattles/comments/gqgk79/humanproof_twofactor_authentication/ --type=video --file="humanproof twofactor humanproof_twofactor_authentication.mp4"`

### --folder

By default, media files will be downloaded to the current directory. But, if you want to use different folder, use this argument.

**Usage example** 

`node index.js --url=https://www.reddit.com/r/badUIbattles/comments/gqgk79/humanproof_twofactor_authentication/ --type=video --file="humanproof twofactor humanproof_twofactor_authentication.mp4" --folder="/home/opcode/Videos"`

## To Do

- [ ] Try to handle media files without specify type
- [ ] Write tests