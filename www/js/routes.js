angular.module('app.routes', ['ionicUIRouter'])

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

  .state('tabsController.friendSList', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/friendSList.html',
        controller: 'friendSListCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.feed'
      2) Using $state.go programatically:
        $state.go('tabsController.feed');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page4
      /page1/tab2/page4
      /page1/tab3/page4
  */
  .state('tabsController.feed', {
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/feed.html',
        controller: 'feedCtrl'
      },
      'tab2': {
        templateUrl: 'templates/feed.html',
        controller: 'feedCtrl'
      },
      'tab3': {
        templateUrl: 'templates/feed.html',
        controller: 'feedCtrl'
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

  .state('tabsController.addFriend', {
    url: '/page10',
    views: {
      'tab2': {
        templateUrl: 'templates/addFriend.html',
        controller: 'addFriendCtrl'
      }
    }
  })

  .state('tabsController.addFriend2', {
    url: '/page11',
    views: {
      'tab2': {
        templateUrl: 'templates/addFriend2.html',
        controller: 'addFriend2Ctrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.pokes'
      2) Using $state.go programatically:
        $state.go('tabsController.pokes');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page12
      /page1/tab2/page12
      /page1/tab3/page12
  */
  .state('tabsController.pokes', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/pokes.html',
        controller: 'pokesCtrl'
      },
      'tab2': {
        templateUrl: 'templates/pokes.html',
        controller: 'pokesCtrl'
      },
      'tab3': {
        templateUrl: 'templates/pokes.html',
        controller: 'pokesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page5')

  

});
