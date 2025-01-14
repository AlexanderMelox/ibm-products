/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import createSVGResultFromCarbonIcon from './svg-result-carbon-icon';

/**
 * A Vite loader to generate `lit-html`'s `SVGResult` from an icon descriptor from `@carbon/icons`.
 *
 * @returns {string} The massaged module content.
 */
export default function svgResultCarbonIconLoader() {
  const descriptor = require(this.resourcePath); // eslint-disable-line global-require
  return `
    import { svg } from 'lit';
    import spread from '@carbon/web-components/es/globals/directives/spread.js';
    const svgResultCarbonIcon = ${createSVGResultFromCarbonIcon(descriptor)};
    export default svgResultCarbonIcon;
  `;
}
