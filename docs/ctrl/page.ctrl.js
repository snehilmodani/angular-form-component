(function() {
  angular
    .module('formComponentExample')
    .controller('PageController', controller);

  controller.$inject = [
    '$scope', '$q', '$filter', '$timeout'
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
  function controller($scope, $q, $filter, $timeout) {  
    var ViewModel = $scope;
    var formModel = {
    	name: 'Snehil',
      autocomplete: 'one',
      // radio1: 'option1'
    };

    var searchResults = [{
    	name: 'One One',
    	code: 'one'
    }, {
    	name: 'Two Two',
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
        required: true,
        hideLabel: true
      }, {
        name: 'Number',
        code: 'number',
        type: 'number',
        min: 0,
        max: 100
      }, {
        name: 'Options',
        code: 'option',
        type: 'select',
        selectConfig: {
          options: ['Option1', 'Option2'],
          multiple: true
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
          valueKey: 'code',
          minLength: 1
        }
      }, {
        name: 'Date',
        code: 'datepicker1',
        type: 'date',
        dateConfig: {
          maxDate: 1501612200000,
          minDate: 1501612200000
        }
      }, {
        name: 'Date',
        code: 'datepicker2',
        type: 'date',
        dateConfig: {
          maxDate: 1501612200000
        }
      }, {
        name: 'Radio 1',
        code: 'radio1',
        type: 'radio',
        required: true,
        // readonly: true,
        // disabled: true,
        changeFn: changeFn,
        radioConfig: {
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
      }];

      $timeout(function() {
        ViewModel.formComponentForm.radio1.$setDirty();
      }, 100);
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