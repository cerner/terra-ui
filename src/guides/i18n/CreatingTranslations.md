# How to Create Translation Files
To create translations for a component, create a `translations` folder within your component package. Then create a JSON file using the local code as the file name for each desired locale. Within these jsons, supply the key-value pairs such that the key is the message name and the value is the message translation.

**Note**: Translation keys will need to be unique to the component-the `aggregate-translations` tool does not check for existing keys when aggregating translation messages. Given this, it is recommend to namespace the keys with the component name in which the translations are contained.

## Example
If creating an translation file for the en (english) for terra-button, name the file `en.json` and format the file like:
```json
{
  "Terra.button.submit": "Submit",
  "Terra.button.open": "Open",
  "Terra.button.close": "Close"
}
```

## Aggregated Result
Here is an example of how message-translation pairs are aggregated by the `aggregate-translations` tool:

Consider the two component dependencies, `Button` and `SearchBar`, and the `supportedLocales = ['en']`.

The `Button` translation file `en.json` contains:
```json
{
  "Terra.Button.submit": "Submit",
  "Terra.Button.open": "Open",
  "Terra.Button.close": "Close"
}
```

and the `SearchBar` translation file `en.json` contains:
```json
{
  "Terra.SearchBar.search": "Search",
  "Terra.SearchBar.filter": "Filter"
}
```

The `aggregate-translations` tool will write these aggregated message-translation pairs to the `messages` const in the `en.js` file:
```js
const messages = {
  "Terra.Button.submit": "Submit",
  "Terra.Button.open": "Open",
  "Terra.Button.close": "Close",
  "Terra.SearchBar.search": "Search",
  "Terra.SearchBar.filter": "Filter"
}
```
