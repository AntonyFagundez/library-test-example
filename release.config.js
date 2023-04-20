/**
 * @type {import("semantic-release")}
 */
module.exports = {
  pkgRoot: "dist",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    "@semantic-release/npm",
    "@semantic-release/github",
    [
      "@semantic-release/exec",
      {
        // This format is required by semantic release
        // eslint-disable-next-line no-template-curly-in-string
        prepareCmd: "pnpm dlx rjp package.json version ${nextRelease.version}",
      },
    ],
    [
      "@semantic-release/git",
      {
        message: "Release <%= nextRelease.version %> [skip ci]",
        assets: ["package.json", "CHANGELOG"],
      },
    ],
  ],
  branches: ["main", { name: "beta", prerelease: "beta" }],
};
