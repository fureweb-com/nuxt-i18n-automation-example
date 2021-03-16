import set from 'lodash/set'

export default async (context, locale) => {
  // https://docs.google.com/spreadsheets/d/1TZu5G5VxPRoXeCjY7-OQbHFp09y73wGTiDsyzk6UwPQ/edit
  const sheetId = '1TZu5G5VxPRoXeCjY7-OQbHFp09y73wGTiDsyzk6UwPQ'
  const sheetName = 'dictionary'
  const dictionary = {}

  const response = await context.$gsparser.parse(sheetId, sheetName)
  if (response.length) {
    response.forEach((item) => set(dictionary, item.key, item[locale]))
  } else {
    const { default: fallbackDictionary } = require(`./${locale}/fallback.json`)
    Object.assign(dictionary, fallbackDictionary)
  }

  return Promise.resolve(dictionary)
}
