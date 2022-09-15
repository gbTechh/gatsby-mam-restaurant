const trimSeparator = (str) => {
  if (str[str.length - 1] === "|") {
    return trimSeparator(str.slice(0, -1))
  } else {
    return str
  }
}

const splitPropByMq = (str) => {
  if (typeof str !== "string") {
    str = str.toString()
  }
  return trimSeparator(str)
    .split("|")
    .filter((e) => e)
}

export const checkProp = (prop, mq) => {
  return splitPropByMq(prop)
    .map((e) => {
      if (typeof e === "string") {
        let split = e.split(":")
        if (mq === "m") {
          if (split.length === 1) {
            return e
          }
        }
        if (split[0] === mq) {
          return split[1]
        }
      }
      return undefined
    })
    .filter((e) => e)[0]
}
