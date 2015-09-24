Package.describe({
  name: 'planettraining:workers',
  summary: 'Spawn headless worker meteor processes to work on async jobs',
  version: '2.1.1',
  git: 'https://github.com/Differential/meteor-workers'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  Npm.depends({
    monq: '0.3.2'
  });

  api.use([
    'coffeescript',
    'mongo',
    'random',
    'differential:cluster@1.0.1',
    'percolate:synced-cron@1.3.0',
    'underscorestring:underscore.string@3.2.2'
  ], 'server');

  api.addFiles([
    'collections/jobs.coffee',
    'lib/Job.coffee',
    'lib/init.coffee'
  ], 'server');

  api.export(['Job', 'Jobs'], 'server');
  api.imply('differential:cluster');
});
