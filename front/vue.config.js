module.exports = {
  "devServer": {
    "proxy": {
      "^/api": {
        "target": "http://api:3000",
        "changeOrigin": true,
        "secure": false,
        "pathRewrite": {
          "^/api": "/api"
        },
        "logLevel": "debug"
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}