module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactSearchFilter',
      externals: {
        react: 'React'
      }
    }
  }
}
