# Grapesjs Fontawesome Icon Picker

### HTML
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet">
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/grapesjs-fontawesome-icon-picker"></script>

<div id="gjs"></div>
```

### JS
```js
const editor = grapesjs.init({
	container: '#gjs',
  height: '100%',
  fromElement: true,
  storageManager: false,
  plugins: ['grapesjs-fontawesome-icon-picker'],
});
```

### CSS
```css
body, html {
  margin: 0;
  height: 100%;
}
```


## Summary

* Plugin name: `grapesjs-fontawesome-icon-picker`
* Components
    * `fa-icon`
* Blocks
    * `fontawesome-icon`
* Traits
    * `fa-picker`


## Options

No option for now.


## Download

* CDN
  * `https://unpkg.com/grapesjs-fontawesome-icon-picker`
* NPM
  * `npm i grapesjs-fontawesome-icon-picker`
* GIT
  * `git clone https://github.com/anhba817/grapesjs-fontawesome-icon-picker.git`



## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-fontawesome-icon-picker.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container: '#gjs',
      // ...
      plugins: ['grapesjs-fontawesome-icon-picker'],
      pluginsOpts: {
        'grapesjs-fontawesome-icon-picker': { /* options */ }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-fontawesome-icon-picker';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```



## Development

Clone the repository

```sh
$ git clone https://github.com/anhba817/grapesjs-fontawesome-icon-picker.git
$ cd grapesjs-fontawesome-icon-picker
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```



## License

MIT
