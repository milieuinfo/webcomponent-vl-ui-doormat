import {nativeVlElement, define} from 'vl-ui-core';

/**
 * VlDoormatText
 * @class
 * @classdesc De doormat text die gebruikt wordt in combinatie met de vl-doormat component.
 *
 * @extends HTMLDivElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-doormat/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-doormat/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-doormat.html|Demo}
 *
 */
export class VlDoormatText extends nativeVlElement(HTMLDivElement) {
  connectedCallback() {
    this._processStyle();
  }

  _processStyle() {
    this._addClass();
  }

  _addClass() {
    this.classList.add('vl-doormat__text');
  }
}

define('vl-doormat-text', VlDoormatText, {extends: 'div'});

