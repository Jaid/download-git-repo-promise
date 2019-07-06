/** @module download-git-repo-promise */

/**
 * Returns the number of seconds passed since Unix epoch (01 January 1970)
 * @example
 * import downloadGitRepoPromise from "download-git-repo-promise"
 * const result = downloadGitRepoPromise()
 * result === 1549410770
 * @function
 * @returns {number} Seconds since epoch
 */
export default () => Math.floor(Date.now() / 1000)