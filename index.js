// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: 'personal-access-token123'
})

await octokit.request('POST /repos/{owner}/{repo}/releases', {
    owner: 'OWNER',
    repo: 'REPO',
    tag_name: 'v1.0.0',
    target_commitish: 'master',
    name: 'v1.0.0',
    body: 'Description of the release',
    draft: false,
    prerelease: false,
    generate_release_notes: false
})