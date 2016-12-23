# assert-successful-request
Simple callback function to assert successful HTTP responses made with the
request module

## How to use

```js
const assertSuccessfulResponse = require('assert-successful-request')

request({ uri: 'https://google.com' }, assertSuccessfulResponse)
```

Simply pass the function as a callback to your `request`-call to assert that
the request was successful.

A request is considered successful if it it resulted in a non-error HTTP status
code.
