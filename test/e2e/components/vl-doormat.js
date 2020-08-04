const {VlElement} = require('vl-ui-core').Test;
const {By} = require('vl-ui-core').Test.Setup;

class VlDoormat extends VlElement {
  async getTitle() {
    return this._getText('[is="vl-doormat-title"]');
  }

  async getText() {
    return this._getText('[is="vl-doormat-text"]');
  }

  async hasImage() {
    try {
      await this.findElement(By.css('[is="vl-doormat-image"]'));
      return true;
    } catch (error) {
      return false;
    }
  }

  async isAlt() {
    return this.hasAttribute('data-vl-alt');
  }

  async isGraphic() {
    return this.hasAttribute('data-vl-graphic');
  }

  async _getText(selector) {
    const element = await this.findElement(By.css(selector));
    const title = await new VlElement(this.driver, element);
    return title.getText();
  }
}

module.exports = VlDoormat;
