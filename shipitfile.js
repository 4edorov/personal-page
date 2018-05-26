module.exports = function (shipit) {
  reuire('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp',
      // deployTo: '/tmp/deploy_to',
      // repositoryUrl: 'https://github.com/user/repo.git',
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      // deleteOnRollback: false,
      // key: '/path/to/key',
      // shallowClone: true
    },
    staging: {
      // servers: 'user@myserver.com'
    }
  });
};
