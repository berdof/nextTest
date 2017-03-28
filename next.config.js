const path = require('path')
const glob = require('glob')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')

module.exports = {
  staticModules: function(options) {
    // use options.dev flag to add modules to the bundle based on the env.
    return [
      'moment'
    ]
  },
  webpack: (config, { dev }) => {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        // For all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
        generateStatsFile: true,
        // Will be available at `.next/stats.json`
        statsFilename: 'stats.json'
      })
    );

    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }
      ,
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
      ,
      {
        test: /\.s(a|c)ss$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader',
          { loader: 'sass-loader',
            options: {
              includePaths: ['styles', 'node_modules']
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      }
    )
    return config
  }
}