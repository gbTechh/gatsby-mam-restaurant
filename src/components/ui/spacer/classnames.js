import classNames from "classnames"
import { checkProp } from "../utils"

export const classes = ({ x, y }) => {

  const cls = classNames(
    "spacer",
    { "spacer--x-0": checkProp(x, 'm') === "0" },
    { "spacer--x-1": checkProp(x, 'm') === "1" },
    { "spacer--x-2": checkProp(x, 'm') === "2" },
    { "spacer--x-3": checkProp(x, 'm') === "3" },
    { "spacer--x-4": checkProp(x, 'm') === "4" },
    { "spacer--x-5": checkProp(x, 'm') === "5" },
    { "spacer--x-6": checkProp(x, 'm') === "6" },
    { "spacer--x-7": checkProp(x, 'm') === "7" },
    { "spacer--x-8": checkProp(x, 'm') === "8" },
    { "spacer--x-9": checkProp(x, 'm') === "9" },
    { "spacer--x-10": checkProp(x, 'm') === "10" },

    { "mqt-spacer--x-0": checkProp(x, 't') === "0" },
    { "mqt-spacer--x-1": checkProp(x, 't') === "1" },
    { "mqt-spacer--x-2": checkProp(x, 't') === "2" },
    { "mqt-spacer--x-3": checkProp(x, 't') === "3" },
    { "mqt-spacer--x-4": checkProp(x, 't') === "4" },
    { "mqt-spacer--x-5": checkProp(x, 't') === "5" },
    { "mqt-spacer--x-6": checkProp(x, 't') === "6" },
    { "mqt-spacer--x-7": checkProp(x, 't') === "7" },
    { "mqt-spacer--x-8": checkProp(x, 't') === "8" },
    { "mqt-spacer--x-9": checkProp(x, 't') === "9" },
    { "mqt-spacer--x-10": checkProp(x, 't') === "10" },

    { "mqd-spacer--x-0": checkProp(x, 'd') === "0" },
    { "mqd-spacer--x-1": checkProp(x, 'd') === "1" },
    { "mqd-spacer--x-2": checkProp(x, 'd') === "2" },
    { "mqd-spacer--x-3": checkProp(x, 'd') === "3" },
    { "mqd-spacer--x-4": checkProp(x, 'd') === "4" },
    { "mqd-spacer--x-5": checkProp(x, 'd') === "5" },
    { "mqd-spacer--x-6": checkProp(x, 'd') === "6" },
    { "mqd-spacer--x-7": checkProp(x, 'd') === "7" },
    { "mqd-spacer--x-8": checkProp(x, 'd') === "8" },
    { "mqd-spacer--x-9": checkProp(x, 'd') === "9" },
    { "mqd-spacer--x-10": checkProp(x, 'd') === "10" },


    { "spacer--y-0": checkProp(y, 'm') === "0" },
    { "spacer--y-1": checkProp(y, 'm') === "1" },
    { "spacer--y-2": checkProp(y, 'm') === "2" },
    { "spacer--y-3": checkProp(y, 'm') === "3" },
    { "spacer--y-4": checkProp(y, 'm') === "4" },
    { "spacer--y-5": checkProp(y, 'm') === "5" },
    { "spacer--y-6": checkProp(y, 'm') === "6" },
    { "spacer--y-7": checkProp(y, 'm') === "7" },
    { "spacer--y-8": checkProp(y, 'm') === "8" },
    { "spacer--y-9": checkProp(y, 'm') === "9" },
    { "spacer--y-10": checkProp(y, 'm') === "10" },

    { "mqt-spacer--y-0": checkProp(y, 't') === "0" },
    { "mqt-spacer--y-1": checkProp(y, 't') === "1" },
    { "mqt-spacer--y-2": checkProp(y, 't') === "2" },
    { "mqt-spacer--y-3": checkProp(y, 't') === "3" },
    { "mqt-spacer--y-4": checkProp(y, 't') === "4" },
    { "mqt-spacer--y-5": checkProp(y, 't') === "5" },
    { "mqt-spacer--y-6": checkProp(y, 't') === "6" },
    { "mqt-spacer--y-7": checkProp(y, 't') === "7" },
    { "mqt-spacer--y-8": checkProp(y, 't') === "8" },
    { "mqt-spacer--y-9": checkProp(y, 't') === "9" },
    { "mqt-spacer--y-10": checkProp(y, 't') === "10" },

    { "mqd-spacer--y-0": checkProp(y, 'd') === "0" },
    { "mqd-spacer--y-1": checkProp(y, 'd') === "1" },
    { "mqd-spacer--y-2": checkProp(y, 'd') === "2" },
    { "mqd-spacer--y-3": checkProp(y, 'd') === "3" },
    { "mqd-spacer--y-4": checkProp(y, 'd') === "4" },
    { "mqd-spacer--y-5": checkProp(y, 'd') === "5" },
    { "mqd-spacer--y-6": checkProp(y, 'd') === "6" },
    { "mqd-spacer--y-7": checkProp(y, 'd') === "7" },
    { "mqd-spacer--y-8": checkProp(y, 'd') === "8" },
    { "mqd-spacer--y-9": checkProp(y, 'd') === "9" },
    { "mqd-spacer--y-10": checkProp(y, 'd') === "10" },
  )

  return cls
}