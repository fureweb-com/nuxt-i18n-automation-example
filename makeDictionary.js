const fs = require('fs')
const _ = require('lodash')
const PublicGoogleSheetsParser = require('public-google-sheets-parser')

const parser = new PublicGoogleSheetsParser()
const sheetId = '1TZu5G5VxPRoXeCjY7-OQbHFp09y73wGTiDsyzk6UwPQ'
const sheetName = 'dictionary'

const targetLanguages = ['ko', 'en', 'ja']

parser.parse(sheetId, sheetName).then((rows) => {
  const dictionary = {}

  // 언어별 사전을 생성합니다.
  rows.forEach((row) =>
    targetLanguages.forEach((lang) => _.set(dictionary, `${lang}.${row.key}`, row[lang])))

  // 파일을 생성합니다.
  targetLanguages.forEach((lang) => fs.writeFileSync(`./locales/${lang}/fallback.json`, JSON.stringify(dictionary[lang])))

  console.log(`${targetLanguages.length} files created.`)
})
