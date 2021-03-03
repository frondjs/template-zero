const {
  init, externals, eventEmitter, render, config, asset, state, component, meta
} = require('@frondjs/frond')

config.set('env', window.process.env.NODE_ENV)
config.set('name', window.frondjs.name)
config.set('version', window.frondjs.version)

console.log(`Project ${config.get('name')} ${config.get('version')} running in ${config.get('env')}`);
