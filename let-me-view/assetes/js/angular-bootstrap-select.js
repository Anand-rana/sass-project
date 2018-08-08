'use strict';



angular.module('angular-bootstrap-select.extra', [])
  .directive('dropdownToggle', [dropdownToggleDirective])
  .directive('dropdownClose', [dropdownCloseDirective]);

function dropdownToggleDirective() {
  return {
    restrict: 'ACE',
    priority: 101,
    link: function (scope, element, attrs) {
      var toggleFn = function (e) {
        var parent = angular.element(this).parent();

        angular.element('.bootstrap-select.open', element)
          .not(parent)
          .removeClass('open');

        parent.toggleClass('open');
      };

      element.on('click.bootstrapSelect', '.dropdown-toggle', toggleFn);

      scope.$on('$destroy', function () {
        element.off('.bootstrapSelect');
      });
    }
  };
}



function dropdownCloseDirective() {
  return {
    restrict: 'ACE',
    priority: 101,
    link: function (scope, element, attrs) {
      var hideFn = function (e) {
        var parent = e.target.tagName !== 'A' && angular.element(e.target).parents('.bootstrap-select');

        angular.element('.bootstrap-select.open', element)
          .not(parent)
          .removeClass('open');
      };

      angular.element(document).on('click.bootstrapSelect', hideFn);

      scope.$on('$destroy', function () {
        angular.element(document).off('.bootstrapSelect');
      });
    }
  };
}

/**
 * @ngdoc module
 * @name angular-bootstrap-select
 * @description
 * Angular bootstrap-select.
 */

angular.module('angular-bootstrap-select', [])
  .directive('selectpicker', ['$parse', '$timeout', selectpickerDirective]);


function selectpickerDirective($parse, $timeout) {
  return {
    restrict: 'A',
    priority: 1000,
    link: function (scope, element, attrs) {
      function refresh(newVal) {
        scope.$applyAsync(function () {
          if (attrs.ngOptions && /track by/.test(attrs.ngOptions)) element.val(newVal);
          element.selectpicker('refresh');
        });
      }

      attrs.$observe('spTheme', function (val) {
        $timeout(function () {
          element.data('selectpicker').$button.removeClass(function (i, c) {
            return (c.match(/(^|\s)?btn-\S+/g) || []).join(' ');
          });
          element.selectpicker('setStyle', val);
        });
      });

      $timeout(function () {
        element.selectpicker($parse(attrs.selectpicker)());
        element.selectpicker('refresh');
      });

      if (attrs.ngModel) {
        scope.$watch(attrs.ngModel, refresh, true);
      }

      if (attrs.ngDisabled) {
        scope.$watch(attrs.ngDisabled, refresh, true);
      }

      scope.$on('$destroy', function () {
        $timeout(function () {
          element.selectpicker('destroy');
        });
      });
    }
  };
}
