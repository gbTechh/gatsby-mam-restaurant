import classNames from "classnames"
import { checkProp } from "../utils"

export const classes = ({ gap, align, justify, wrap }) => {

  const cls = classNames(
    "row",
    { "row--align-center": align === "center" },
    { "row--align-flex-start": align === "flex-start" },
    { "row--align-flex-end": align === "flex-end" },
    { "row--align-stretch": align === "stretch" },
    { "row--align-baseline": align === "baseline" },
    { "row--align-center": align === "center" },
    { "row--justify-center": justify === "center" },
    { "row--justify-flex-start": justify === "flex-start" },
    { "row--justify-flex-end": justify === "flex-end" },
    { "row--justify-stretch": justify === "stretch" },
    { "row--justify-space-around": justify === "space-around" },
    { "row--justify-space-between": justify === "space-between" },
    { "row--justify-space-evenly": justify === "space-evenly" },
    { "row--wrap": wrap === "wrap" },
    { "row--no-wrap": wrap === "nowrap" },

    { "row--gap-0": checkProp(gap, 'm') === "0" },
    { "row--gap-1": checkProp(gap, 'm') === "1" },
    { "row--gap-2": checkProp(gap, 'm') === "2" },
    { "row--gap-3": checkProp(gap, 'm') === "3" },
    { "row--gap-4": checkProp(gap, 'm') === "4" },
    { "row--gap-5": checkProp(gap, 'm') === "5" },
    { "row--gap-6": checkProp(gap, 'm') === "6" },
    { "row--gap-7": checkProp(gap, 'm') === "7" },
    { "row--gap-8": checkProp(gap, 'm') === "8" },
    { "row--gap-9": checkProp(gap, 'm') === "9" },
    { "row--gap-10": checkProp(gap, 'm') === "10" },
    { "mqt-row--gap-0": checkProp(gap, 't') === "0" },
    { "mqt-row--gap-1": checkProp(gap, 't') === "1" },
    { "mqt-row--gap-2": checkProp(gap, 't') === "2" },
    { "mqt-row--gap-3": checkProp(gap, 't') === "3" },
    { "mqt-row--gap-4": checkProp(gap, 't') === "4" },
    { "mqt-row--gap-5": checkProp(gap, 't') === "5" },
    { "mqt-row--gap-6": checkProp(gap, 't') === "6" },
    { "mqt-row--gap-7": checkProp(gap, 't') === "7" },
    { "mqt-row--gap-8": checkProp(gap, 't') === "8" },
    { "mqt-row--gap-9": checkProp(gap, 't') === "9" },
    { "mqt-row--gap-10": checkProp(gap, 't') === "10" },
    { "mqd-row--gap-0": checkProp(gap, 'd') === "0" },
    { "mqd-row--gap-1": checkProp(gap, 'd') === "1" },
    { "mqd-row--gap-2": checkProp(gap, 'd') === "2" },
    { "mqd-row--gap-3": checkProp(gap, 'd') === "3" },
    { "mqd-row--gap-4": checkProp(gap, 'd') === "4" },
    { "mqd-row--gap-5": checkProp(gap, 'd') === "5" },
    { "mqd-row--gap-6": checkProp(gap, 'd') === "6" },
    { "mqd-row--gap-7": checkProp(gap, 'd') === "7" },
    { "mqd-row--gap-8": checkProp(gap, 'd') === "8" },
    { "mqd-row--gap-9": checkProp(gap, 'd') === "9" },
    { "mqd-row--gap-10": checkProp(gap, 'd') === "10" },


  )

  return cls
}