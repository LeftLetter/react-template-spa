module.exports = {
  '*.{js,cjs,ts}': ['eslint --fix', 'prettier --write'],
  '*.tsx': ['eslint --fix', 'prettier --write'],
  '*.{html,htm}': ['markuplint --fix', 'prettier --write'],
  '*.{md,css,scss}': ['prettier --write'],
}
