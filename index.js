// Octokit.js
// https://github.com/octokit/core.js#readme
// git push origin v3.8.8
// git tag -a v3.8.8 -m "my version 3.8.8"

const {Octokit} = require("octokit");
const octokit = new Octokit({
    auth: ''
})

async function createRelease() {
    await octokit.request('POST /repos/{owner}/{repo}/releases', {
        owner: '',
        repo: '',
        tag_name: 'v3.8.8',
        target_commitish: 'release-3.8.8-deleteme',
        name: 'v3.8.8',
        body: 'Description of the release',
        draft: false,
        prerelease: false,
        generate_release_notes: true
    })
}

console.log(createRelease())
