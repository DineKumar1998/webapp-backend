'use strict';

/**
 * inner-image service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::inner-image.inner-image');
