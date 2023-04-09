module.exports = {
  '*.{js,cjs,ts}': ['eslint --fix', 'prettier --write'],
  '*.tsx': ['markuplint --fix', 'eslint --fix', 'prettier --write'],
  '*.md': ['prettier --write'],
  '*.{html,htm}': ['markuplint --fix'],
}
