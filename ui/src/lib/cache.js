import {largeObjects} from './large-objects'

const smartCache = []

export function saveCache(data) {
  // TODO: finish implementation

  smartCache.push([
    ...data,
    ...new Array(1000000).join('x')
  ])
}
