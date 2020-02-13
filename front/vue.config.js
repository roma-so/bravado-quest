module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      '^/users': {
        target: 'http://0.0.0.0:3000/',
        ws: true,
        changeOrigin: true
      }
    }
  }
}