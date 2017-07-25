(function() {
  angular
    .module('formComponentExample')
    .controller('PageController', controller);

  controller.$inject = [
    '$scope', '$q', '$filter'
  ];

  /**
   * Date Range Modal Controller
   *
   * @memberof Controllers.DateRangeModalController
   *
   * @author snehilmodani
   *
   * @param    {!Object}           $scope           $scope
   * @param    {!Object}           $q           		$q
   * @param    {!Object}           $filter          $filter
   *
   */
  function controller($scope, $q, $filter) {
    var ViewModel = $scope;
    var formModel = {
    	name: 'Snehil'
    };

    var searchResults = [{
    	name: 'One',
    	code: 'one'
    }, {
    	name: 'Two',
    	code: 'two'
    }];

    var searchResults2 = ['One', 'Two'];

    var editMode = true;

    init();

    /*=============================================
    =            Implementation                  =
    =============================================*/

    /**
     * init function
     *
     * @public
     *
     * @function
     *
     * @author snehilmodani
     *
     */
    function init() {
    	ViewModel.formModel = formModel;
    	ViewModel.editMode = editMode;
    	ViewModel.formComponentConfig = [{
        name: 'Name',
        code: 'name',
        type: 'text',
        changeFn: changeFn,
        required: true
      }, {
        name: 'Number',
        code: 'number',
        type: 'number',
        min: 0,
        max: 100,
        warning: true
      }, {
        name: 'Options',
        code: 'option',
        type: 'select',
        selectConfig: {
          options: ['Option1', 'Option2']
        }
      }, {
        name: 'Options 2',
        code: 'option2',
        type: 'select',
        selectConfig: {
          options: [{
          	name: 'Option1',
          	code: 'option1'
          }, {
          	name: 'Option2',
          	code: 'option2'
          }],
          valueKey: 'code',
          textKey: 'name'
        }
      }, {
        name: 'Autocomplete',
        code: 'autocomplete',
        type: 'autocomplete',
        autocompleteConfig: {
          disabled: false,
          noCache: false,
          selectedItemChange: selectedAutocompleteFn,
          querySearch: autocompleteQueryFn,
          minLength: 1
        }
      }, {
        name: 'Autocomplete 2',
        code: 'autocomplete',
        type: 'autocomplete',
        autocompleteConfig: {
          disabled: false,
          noCache: false,
          selectedItemChange: selectedAutocompleteFn,
          querySearch: autocompleteQueryFn2,
          displayKey: 'name',
          minLength: 1
        }
      }, {
        name: 'Date',
        code: 'name',
        type: 'date',
        warning: true
      }];
    }

    function selectedAutocompleteFn(selectedItem) {
    	console.log(selectedItem);
    }

    function autocompleteQueryFn(searchKey) {
      var deferred = $q.defer();
      var arrayList = angular.copy(searchResults2);
      if(searchKey) {
        var results = $filter('filter')(arrayList, searchKey);
        deferred.resolve(results);
      } else {
        deferred.resolve(arrayList);
      }

      return deferred.promise;
    }

    function autocompleteQueryFn2(searchKey) {
      var deferred = $q.defer();
      var arrayList = angular.copy(searchResults);
      if(searchKey) {
        var results = $filter('filter')(arrayList, searchKey);
        deferred.resolve(results);
      } else {
        deferred.resolve(arrayList);
      }

      return deferred.promise;
    }

    /**
     * Change Function
     *
     * @public
     *
     * @function
     *
     * @param    {!String}           selectedTag      Selected tag Code
     * @param    {!Object}           fileItem         File item object
     *
     * @author snehilmodani
     *
     */
    function changeFn (selectedItem, model) {
    	console.log(selectedItem, model);
    }

  }
})();