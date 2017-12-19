module.exports = {
  type: 'react-app',
  module : {
    loaders : [
      {
        test : /\.css$/,
        loader : 'style-loader'
      },
      {
        test : /\.css$/,
        loader : 'css-loader',
        query : {
          modules : true
        }
      }
    ]
  }
}
