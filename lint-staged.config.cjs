module.exports = {
  '*.{js,cjs,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.md': ['prettier --write'],
  '*.{html,html,tsx}': ['markuplint --fix'],
}
