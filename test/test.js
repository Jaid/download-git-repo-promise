import path from "path"
import fs from "fs"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
   * @type { import("../src") }
   */
const {default: downloadGitRepoPromise} = indexModule

it("should run", async () => {
  await downloadGitRepoPromise("Jaid/epoch-seconds", path.join(__dirname, "..", "dist", "test", "repo"))
  expect(fs.existsSync(path.join(__dirname, "..", "dist", "test", "repo", "package.json"))).toBeTruthy()
})