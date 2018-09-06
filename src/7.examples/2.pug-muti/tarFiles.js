const fs = require('fs')
const fsPromises = fs.promises
const path = require('path')
const child_process = require('child_process')
var exec = require('child-process-promise').spawn

const OPENPATH = path.resolve(__dirname, '../dist/open')
const HOME_INDEX_PATH = path.resolve(OPENPATH, 'home/index.html')
const HOME_INDEX_PATH_TO = path.resolve(OPENPATH, 'index.html')
const OFFICIAL_PATH = path.resolve(OPENPATH, 'official')
const CLOUD = path.resolve(OPENPATH, 'cloudRender')
const PRODUCERTOOLS = path.resolve(OPENPATH, 'producerTools')
const PROMOTEFILM = path.resolve(OPENPATH, 'promoteFilm')

const HOME_INDEX_PATH_EN = path.resolve(OPENPATH, 'home_en/index.html')
const HOME_INDEX_PATH_TO_EN = path.resolve(OPENPATH, 'en/index.html')
const EN_PATH = path.resolve(OPENPATH, 'en')
const OFFICIAL_PATH_EN = path.resolve(OPENPATH, 'en/official')
const CLOUD_EN = path.resolve(OPENPATH, 'cloudRender_en')
const PRODUCERTOOLS_EN = path.resolve(OPENPATH, 'producerTools_en')
const PROMOTEFILM_EN = path.resolve(OPENPATH, 'promoteFilm_en')


async function tarFile() {
    // 1. 拷贝 home/index.html
    await fsPromises.copyFile(HOME_INDEX_PATH, HOME_INDEX_PATH_TO)
    // 2. 创建 official en
    await fsPromises.mkdir(OFFICIAL_PATH)
    await fsPromises.mkdir(EN_PATH)
    await fsPromises.mkdir(OFFICIAL_PATH_EN)
    // 3. 拷贝 3个进去
    await exec('cp', ['-r', CLOUD, PRODUCERTOOLS, PROMOTEFILM, OFFICIAL_PATH])
    await exec('cp', ['-r', CLOUD_EN, PRODUCERTOOLS_EN, PROMOTEFILM_EN, OFFICIAL_PATH_EN])
    await fsPromises.copyFile(HOME_INDEX_PATH_EN, HOME_INDEX_PATH_TO_EN)
    // 4. 压缩
    await exec('zip', [
        '-rm', 'open.zip', 'index.html', 'official', 'en'
    ], {cwd: OPENPATH})
}

tarFile().catch((err) => {
    console.log(err);
})