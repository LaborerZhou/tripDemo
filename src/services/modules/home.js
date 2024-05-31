import zhouRequest from '../request'

export function getHotSuggests() {
  return zhouRequest.get({
    url: "/home/hotSuggests"
  })
}

export function getCategories() {
  return zhouRequest.get({
    url: "/home/categories"
  })
}