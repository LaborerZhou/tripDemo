const getAssets = (url) => {
  return new URL(`../assets/${url}`, import.meta.url).href
}

export default getAssets