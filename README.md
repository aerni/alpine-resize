---

## This package has been archived in favor of [Alpine's Resize plugin](https://alpinejs.dev/plugins/resize).

---

![NPM Version](https://badgen.net/npm/v/@aerni/alpine-resize?style=flat-square)
![Build Size](https://badgen.net/badgesize/gzip/aerni/alpine-resize/main/dist/cdn.min.js?style=flat-square)
![License](https://img.shields.io/github/license/aerni/tailwindcss-rfs?style=flat-square)

# Alpine Resize
This is a convenience wrapper around ResizeObserver that allows you to easily run code whenever an element is resized. One possible use case is to dynamically set the `sizes` attribute on the `<source>` tag of a `<picture>` element.

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
Add `x-resize` to any element within an Alpine component. The provided expression will execute as soon as the element is resized.

In this example, the element will show as soon as it is resized.

```html
<div x-data="{ resized: false }" x-resize="resized = true">
    <div x-show="resized">
        This element shows as soon as it is resized
    </div>
</div>
```

You can also provide a callback to access the `ResizeObserverEntry` to do fancy things like changing an element's font size based on its width.

```html
<div
    x-data="{
        width: 0,
        minFontSize: 15,
        maxFontSize: 50,
    }"
    x-resize="resizeObserverEntry => {
        width = resizeObserverEntry.contentRect.width
    }"
    :style="{
        'font-size': `${Math.min(maxFontSize, Math.max(minFontSize, width * 0.05))}px`,
    }"
>
    The font-size of this element will change based on its width
</div>
```
