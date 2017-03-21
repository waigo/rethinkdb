# waigo-plugin-rethinkdb

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


## License

MIT - see LICENSE.md
