require('co-mocha')

const path = require('path'),
  request = require('supertest'),
  shell = require('shelljs'),
  { bind: bindFn } = require('genomatic'),
  waigo = require('waigo')

const test = require('waigo-test-utils').mocha(module)


test['integration'] = {
  beforeEach: function *() {
    shell.cp('-Rf', path.join(__dirname, '/../src/support'), this.appFolder)
    shell.cp('-Rf', path.join(__dirname, '/../src/models'), this.appFolder)

    yield waigo.init({
      appFolder: this.appFolder
    })

    this.App = new (waigo.load('application'))()
    this.koa = this.App.koa

    this.startApp = bindFn(function *(cfg) {
      yield this.App.start(cfg)

      this.request = request(this.App.config.baseURL)
    }, this)
  },

  afterEach: function *() {
    yield this.App.shutdown()

    shell.rm('-rf', path.join(this.appFolder, 'support'))
    shell.rm('-rf', path.join(this.appFolder, 'models'))
  },

  'connect to rethinkdb': function *() {
    yield this.startApp({
      postConfig: (config) => {
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
        }
      }
    })
  }
}
