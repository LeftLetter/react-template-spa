module.exports = {
  semi: false,
  singleQuote: true,
  overrides: [
    {
      files: ['*.md'],
      options: { parser: 'markdown-nocjsp' },
    },
  ],
}
