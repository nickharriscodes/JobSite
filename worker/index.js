var CronJob = require('cron').CronJob;
var fetchGithub = require('./tasks/fetch-github');

new CronJob('*/1 * * * *', fetchGithub, null, true, 'America/Los_Angeles');