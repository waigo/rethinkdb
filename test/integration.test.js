const path = require('path'),
  request = require('supertest'),
  shell = require('shelljs'),
  waigo = require('waigo')

const test = require('waigo-test-utils').mocha(module)


test['integration'] = {
  beforeEach: function *() {
    var self = this

    shell.cp('-Rf', path.join(__dirname, '/../src/support'), this.appFolder)
    shell.cp('-Rf', path.join(__dirname, '/../src/models'), this.appFolder)

    yield waigo.init({
      appFolder: this.appFolder
    })

    self.Application = waigo.load('application')
    self.app = self.Application.app

    self.startApp = function *(cfg) {
      yield self.Application.start(cfg)

      self.request = request(self.app.config.baseURL)
    }
  },

  afterEach: function *() {
    yield this.Application.shutdown()

    shell.rm('-rf', path.join(this.appFolder, 'support'))
    shell.rm('-rf', path.join(this.appFolder, 'models'))
  }
}
