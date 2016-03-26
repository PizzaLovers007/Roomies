angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.profile', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController.friendsList', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/friendsList.html',
        controller: 'friendsListCtrl'
      }
    }
  })

  .state('tabsController.settings', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.editProfile', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/editProfile.html',
        controller: 'editProfileCtrl'
      }
    }
  })

  .state('tabsController.editFriend', {
    url: '/page9',
    views: {
      'tab2': {
        templateUrl: 'templates/editFriend.html',
        controller: 'editFriendCtrl'
      }
    }
  })

  .state('addFriend', {
    url: '/page10',
    templateUrl: 'templates/addFriend.html',
    controller: 'addFriendCtrl'
  })

  .state('addFriend2', {
    url: '/page11',
    templateUrl: 'templates/addFriend2.html',
    controller: 'addFriend2Ctrl'
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});