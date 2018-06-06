# vue-countable

Vue binding for [countable.js](https://sacha.me/Countable/). Provides real-time paragraph, sentence, word, and character counting.

### Demo

[View Demo](https://johndatserakis.github.io/vue-countable/) | [View on NPM](https://www.npmjs.com/package/vue-countable) | [View on GitHub](https://github.com/johndatserakis/vue-countable)

### Install

```
# npm
npm i vue-countable

# yarn
yarn add vue-countable
```

Or you can include it through the browser at the bottom of your page:

`<script src="https://unpkg.com/vue-countable"></script>`

### About

Simple way to count characters, words, sentences, and paragraphs in your Vue apps.

Pass your `text` as a prop to the provided component, along with a unique `id`, and register for the `change` event to get real-time count updates.

### Usage Example

```html
import VueCountable from 'vue-countable'
Vue.component('vue-countable', VueCountable)
```


```html
<!-- In your html - Make sure the id prop is unique on your page. -->
<vue-countable
    :text="myText" // Your text variable
    :id="'myId'" // A unique string id
    @change="change" // Register for the change event
></vue-countable>

<!-- The @change function -->
change (event) {
    console.log(event)
    // event.words to get word count, etc.
}
```

Now, anytime (and on component initialization) your `myText` variable changes, `vue-countable` will emit an event containing the details of your text. Register for this event as shown above to get your real-time counts.

### Props

| prop    | type  | description                    |
|---------|-------|--------------------------------|
| text | String | Text you want to track. |
| id | String | A unique id for your tracking instance. This allows you to have multiple different counts on the same page.|

### Events

| event    | value  | description                    |
|---------|-------|--------------------------------|
| change | Object | Provides `character`, `word`, `sentence`, `paragraph`, and `all` values. |

### Development

``` bash
# install dependencies
npm install

# serve with hot reload
npm run watch

# build demo page
npm run build:example

# build
npm run build

# publish to npm
npm version patch
npm publish
```

### Other

Go ahead and fork the project! Submit an issue if needed. Have fun!

### Thank You

[Sacha Schmid](https://sacha.me/) for [countable.js](https://sacha.me/Countable/).

### License

[MIT](http://opensource.org/licenses/MIT)

Packaged with a mixture of [vue-lib-template](https://github.com/biigpongsatorn/vue-lib-template) and [vue-sfc-rollup](https://github.com/team-innovation/vue-sfc-rollup). Using [webpack 4](https://webpack.js.org/).