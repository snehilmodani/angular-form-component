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
    var defaultDate = new Date();
    var defaultMinDate = new Date(defaultDate.getFullYear(), defaultDate.getMonth() - 1, defaultDate.getDate());
    var defaultMaxDate = new Date(defaultDate.getFullYear(), defaultDate.getMonth() + 1, defaultDate.getDate());

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
        placeholder: 'Enter Name',
        changeFn: changeFn,
        required: true,
        hideLabel: true
      }, {
        name: 'Number',
        code: 'number',
        placeholder: '99',
        type: 'number',
        min: 0,
        max: 100,
      }, {
        name: 'Textarea',
        code: 'textarea',
        type: 'textarea',
        placeholder: 'Enter Comments',
        className: 'maxHeight',
        textareaConfig: {
          rows: 4
        }
      },{
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
        placeholder: 'Select',
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
          minDate: defaultMinDate,
          maxDate: defaultMaxDate
        },
        changeFn: changeDateFn
      }, {
        name: 'Date',
        code: 'datepicker2',
        type: 'date',
        dateConfig: {
          maxDate: new Date()
        }
        }, {
          name: 'Radio 1',
          code: 'radio1',
          type: 'radio',
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
        }, {
        name: 'Payment Details Shared',
        code: 'paymentDetailsShared',
        type: 'checkbox',
        changeFn: selectedAutocompleteFn,
        initFn: selectedAutocompleteFn
      }, {
        name: 'Payment Document Shared',
        code: 'paymentDocsCheck',
        type: 'checkboxWithInput',
        changeFn: selectedAutocompleteFn,
        initFn: selectedAutocompleteFn,
        inputBox: {
          name: 'Name',
          code: 'paymentDocsCheckInput',
          type: 'text',
          changeFn: changeFn,
          required: true,
        }
      }, {
        name: 'Payment Document Shared',
        code: 'paymentDocsCheck2',
        type: 'checkboxWithDropdown',
        changeFn: selectedAutocompleteFn,
        initFn: selectedAutocompleteFn,
        dropdownBox: {
          name: 'Name',
          code: 'paymentDocsCheckDropdown',
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
          },
          changeFn: changeFn,
          required: true,
        }
      }, {
        name: 'Select (with Object options)',
        code: 'objectSelect',
        type: 'select',
        selectConfig: {
          optionType: 'OBJECT',
          options: {
            OPTION1: 'Option 1',
            OPTION2: 'Option 2',
            OPTION3: 'Option 3',
          },
        }
      }];
    }

    function selectedAutocompleteFn(selectedItem) {
    	console.log(selectedItem);
    }

    function changeDateFn(selectedItem){
      var date2Config = ViewModel.formComponentConfig[7];
      date2Config.dateConfig.minDate = new Date(selectedItem);
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