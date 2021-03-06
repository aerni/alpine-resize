![NPM Version](https://badgen.net/npm/v/@aerni/alpine-resize?style=flat-square)
![Build Size](https://badgen.net/badgesize/gzip/aerni/alpine-resize/main/dist/cdn.min.js?style=flat-square)
![License](https://img.shields.io/github/license/aerni/tailwindcss-rfs?style=flat-square)

# Alpine Resize
This is a convenience wrapper for Resize Observer that allows you to easily react when an element is resized.

One possible use case is if you need to dynamically set the `sizes` attribute on the `<source>` tag of a `<picture>` element.

## Installation
You can use this plugin by either including it from a `<script>` tag or installing it via NPM:

### Via CDN
You can include the CDN build of this plugin as a `<script>` tag, just make sure to include it BEFORE Alpine's core JS file.

```html
<!-- Alpine Resize -->
<script defer src="https://cdn.jsdelivr.net/npm/@aerni/alpine-resize@1.x.x/dist/cdn.min.js"></script>

<!-- Alpine Core -->
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### Via NPM
You can install Resize from NPM for use inside your bundle like so:

```
npm install @aerni/alpine-resize
```

Then initialize it from your bundle:

```js
import Alpine from 'alpinejs'
import resize from '@aerni/alpine-resize'

Alpine.plugin(resize)
```


## Usage
Add `x-resize` to any element within an Alpine component. When that component is resized, the provided expression will execute.

For example, in the following snippet, `resized` will remain `false` until the element is resized. At that point, the expression will execute and `resized` will become `true`:

```html
<div x-data="{ resized: false }" x-resize="resized = true">
    <div x-show="resized">
        I was just resized!
    </div>
</div>
```
