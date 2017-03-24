# waigo-plugin-rethinkdb

[![Build Status](https://secure.travis-ci.org/waigo/waigo.svg)](http://travis-ci.org/waigo/rethinkdb)
[![NPM module](https://badge.fury.io/js/waigo.svg)](https://npmjs.org/package/waigo-plugin-rethinkdb)
[![Waigo channel on discord](https://img.shields.io/badge/discord-join%20chat-738bd7.svg?style=flat-square)](https://discord.gg/Jf3pGjf)
[![Follow on Twitter](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&label=Follow&maxAge=2592000)](https://twitter.com/waigojs)

This [waigo](http://waigojs.com) plugin provides a database connection and
corresponding model layer for working with RethinkDB databases.

Models:

* `src/models/acl`
* `src/models/activity`
* `src/models/cron`
* `src/models/user`

Database connections:

* `src/support/db/rethinkdb`

## Installation

```bash
$ npm install waigo-plugin-rethinkdb
```

## Usage

Set your `main` database to be a RethinkDB db:

```js
/* file: src/config/base.js */

module.exports = function(config) {
  ...

  config.db = {
    main: {
      type: 'rethinkdb',
      serverConfig: {
        db: 'waigo',
        servers: [
          {
            host: '127.0.0.1',
            port: 28015,
          }
        ],
      }
    }
  };

  ...
}
```

## Development

To run the tests:

```shell
$ npm install
$ npm test
```


## License

MIT - see LICENSE.md
