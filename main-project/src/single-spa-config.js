// import * as singleSpa from 'single-spa'
import { insertScript }from './config/importFunc';
import newMap from './config/importmap.config';
insertScript(newMap)
const System = window.System;

(function() {
  Promise.all([
    System.import('single-spa'),
    System.import('vue'),
    System.import('vue-router')
  ]).then(
    function (modules) {
    const singleSpa = modules[0];
    const Vue = modules[1];
    const VueRouter = modules[2];
    
    Vue.use(VueRouter)

    singleSpa.registerApplication(
      'navbar',
      () => System.import('navbar'),
      location => true
    );

    singleSpa.registerApplication(
      'app1',
      () => System.import('app1'),
      location => location.pathname.startsWith('/app1')
    )

    singleSpa.registerApplication(
      'app2',
      () => System.import('app2'),
      location => location.pathname.startsWith('/app2')
    )

    singleSpa.start();
  })
})()