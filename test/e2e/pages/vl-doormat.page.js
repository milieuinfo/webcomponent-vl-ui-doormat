const VlDoormat = require('../components/vl-doormat');
const {Page, Config} = require('vl-ui-core').Test;

class VlDoormatPage extends Page {
  async getDoormat() {
    return this._getDoormat('doormat');
  }

  async getImageDoormat() {
    return this._getDoormat('doormat-image');
  }

  async getAltDoormat() {
    return this._getDoormat('doormat-alt');
  }

  async getGraphicDoormat() {
    return this._getDoormat('doormat-graphic');
  }

  async load() {
    await super.load(Config.baseUrl + '/demo/vl-doormat.html');
  }

  async _getDoormat(selector) {
    return new VlDoormat(this.driver, `#${selector}`);
  }
}

module.exports = VlDoormatPage;
