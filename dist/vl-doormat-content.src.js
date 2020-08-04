import {nativeVlElement, define} from 'vl-ui-core';

/**
 * VlDoormatContent
 * @class
 * @classdesc De doormat content container die gebruikt wordt in combinatie met de vl-doormat component.
 *
 * @extends HTMLDivElement
 *
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-doormat/releases/latest|Release notes}
 * @see {@link https://www.github.com/milieuinfo/webcomponent-vl-ui-doormat/issues|Issues}
 * @see {@link https://webcomponenten.omgeving.vlaanderen.be/demo/vl-doormat.html|Demo}
 *
 */
export class VlDoormatContent extends nativeVlElement(HTMLDivElement) {
  constructor() {
    super();
    this._processStyle();
  }

  get _iconTemplate() {
    return this._template(`<span class="vl-doormat__content__arrow" aria-hidden="true"></span>`);
  }

  _processStyle() {
    this._addClass();
    this._appendIcon();
  }

  _addClass() {
    this.classList.add('vl-doormat__content');
  }

  _appendIcon() {
    this.appendChild(this._iconTemplate);
  }
}

define('vl-doormat-content', VlDoormatContent, {extends: 'div'});

