/*global angular */
import { react2angular } from "react2angular";
import Todo from "../../components/todo";

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular
  .module("todomvc", ["ngRoute", "ngResource", "oc.lazyLoad"])
  .component("reactTodo", react2angular(Todo, ["title"]))
  .config([
    "$routeProvider",
    "$ocLazyLoadProvider",
    function($routeProvider, $ocLazyLoadProvider) {
      "use strict";

      // Lazy load modules for AngularJs
      $ocLazyLoadProvider.config({
        debug: true,
        modules: [
          {
            name: "AgGrid",
            // load Ag Grid from CDN, for demo purpose
            files: [
              "https://cdnjs.cloudflare.com/ajax/libs/ag-grid/25.1.0/ag-grid-community.min.js"
            ]
          }
        ]
      });

      var routeConfig = {
        todo: {
          controller: "TodoCtrl",
          templateUrl: "todomvc-index.html",
          resolve: {
            store: function(todoStorage) {
              // Get the correct module (API or localStorage).
              return todoStorage.then(function(module) {
                module.get(); // Fetch the todo records in the background.
                return module;
              });
            }
          }
        },
        lazy: {
          controller: "SampleLazyCtrl",
          templateUrl: "lazy-index.html"
        }
      };

      $routeProvider
        .when("/", routeConfig.todo)
        .when("/lazy-page", routeConfig.lazy)
        .when("/:status", routeConfig.todo)
        .otherwise({
          redirectTo: "/"
        });
    }
  ]);
