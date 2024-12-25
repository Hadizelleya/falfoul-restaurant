'use strict';

/**
 * sandwich service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sandwich.sandwich');
