/** @module download-git-repo-promise */

import downloadGitRepo from "download-git-repo"
import pify from "pify"

/**
 * Returns a promisied version of `download-git-repo`
 */
export default pify(downloadGitRepo)