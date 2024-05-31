import zhouRequest from '../request'

export function getCityAll() {
  return zhouRequest.get({
    url: "/city/all"
  })
}