module.exports = {
  specs: {
    '\\.[jt]sx?$': '@markuplint/react-spec',
  },
  parser: {
    '\\.[jt]sx?$': '@markuplint/jsx-parser',
  },
  extends: ['markuplint:recommended'],
  excludeFiles: ['./index.html'],
}
