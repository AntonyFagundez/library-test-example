/**
 *
 * @param possiblyClasses array containing strings or nothing
 * @returns classes only with strings
 */
export const joinClasses = (...possiblyClasses: Array<string | undefined>) => {
  return possiblyClasses.filter((x) => Boolean(x)).join(" ");
};
