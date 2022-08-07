'use strict';

/**
 * video-counting service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::video-counting.video-counting');
