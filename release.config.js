module.exports = {
  branches: ['master'],
  
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      "@semantic-release/npm",
      {
        "npmPublish": false,
        "tarballDir": "dist"
      }
    ],
    ['@semantic-release/github', {
      labels: ['release']
    }],
    '@semantic-release/git',
  ],
  
  verifyConditions: ['@semantic-release/github'],
};
