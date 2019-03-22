# General

## First step

- [Using webpack](https://webpack.js.org/guides/installation/)
- [Webpack Github](https://github.com/webpack)
- [Yarn Package Manager](https://yarnpkg.com/lang/en/docs/cli/)

```bash
npm init -y
yarn add webpack webpack-cli -D
```

## First configuration

- https://webpack.js.org/guides/getting-started/#using-a-configuration

- Babel : https://babeljs.io/setup#installation

```javascript
const path = require('path')
const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

module.exports = {
	entry: path.resolve(src, 'index.js'),
	output: {
		filename: 'index.js',
		path: dist
	}
}
```

**package.json**
```json
  "scripts": {    
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
```

```bash
yarn webpack
```

### Serve HTML

- https://github.com/jantimon/html-webpack-plugin

```bash

```

### Development

- Common webpack loaders: https://webpack.js.org/loaders/
- webpack-dev-server
- HTML Template Engine: http://jade-lang.com/

```bash
yarn add webpack-dev-server -D
```

**inject: 'body'** : auto reload html file

```javascript
const path = require('path')
const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		index: path.resolve(src, 'index.js')
	},
  output: {
    filename: '[name].js',
    path: dist
  },
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		port: 8081,
		contentBase: dist
	},
	plugins: [
    new HtmlWebpackPlugin({
    	template: path.resolve(src, 'index.html'),
    	filename: 'index.html',    	
    	inject: 'body'
    }) 
	]
}
```

## Application structure

```html
src
	index.html
	- headfirst
	- advanced
	- solutions
	- apps
	- libs
	- best-practices
	- cheatsheets
	- trendings
dist
```

## Sample structure for each domains

```markdown
domain
- index.html
- styles.css
- [domain].js
```

# Subjects

## Basic

- https://medium.com/dailyjs/some-examples-to-help-understand-javascripts-closure-372e42fff94d

## Overview:

- https://www.w3schools.com/jsref/default.asp
- https://www.sitepoint.com/call-javascript-function-string-without-using-eval/
- http://2ality.com/2017/01/import-operator.html
- https://parceljs.org/code_splitting.html
- https://jsfiddle.net/ryansukale/wd4hdee2/