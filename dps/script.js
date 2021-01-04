(function(window, document, undefined) {

			  var factory = function($, DataTable) {

			    "use strict";


			    $('.search-toggle').click(function() {
			      if ($('.hiddensearch').css('display') == 'none')
			        $('.hiddensearch').slideDown();
			      else
			        $('.hiddensearch').slideUp();
			    });

			    /* Set the defaults for DataTables initialisation */
			    $.extend(true, DataTable.defaults, {
			      dom: "<'hiddensearch'f'>" +
			        "tr"+
			        "<'table-footer'Blip'>",
			      renderer: 'material'
			    });
			    /* Default class modification */
			    $.extend(DataTable.ext.classes, {
			      sWrapper: "dataTables_wrapper",
			      sFilterInput: "form-control input-sm",
			      sLengthSelect: "form-control input-sm"
			    });

			    

			      // IE9 throws an 'unknown error' if document.activeElement is used
			      // inside an iframe or frame.
			      var activeEl;

			      try {
			        // Because this approach is destroying and recreating the paging
			        // elements, focus is lost on the select button which is bad for
			        // accessibility. So we want to restore focus once the draw has
			        // completed
			        activeEl = $(document.activeElement).data('dt-idx');
			      } catch (e) {}

			      attach(
			        $(host).empty().html('<ul class="material-pagination"/>').children('ul'),
			        buttons
			      );

			      if (activeEl) {
			        $(host).find('[data-dt-idx=' + activeEl + ']').focus();
			      }
			    };

			    /*
			     * TableTools Bootstrap compatibility
			     * Required TableTools 2.1+
			     */
			    if (DataTable.TableTools) {
			      // Set the classes that TableTools uses to something suitable for Bootstrap
			      $.extend(true, DataTable.TableTools.classes, {
			        "container": "DTTT btn-group",
			        "buttons": {
			          "normal": "btn btn-default",
			          "disabled": "disabled"
			        },
			        "collection": {
			          "container": "DTTT_dropdown dropdown-menu",
			          "buttons": {
			            "normal": "",
			            "disabled": "disabled"
			          }
			        },
			        "print": {
			          "info": "DTTT_print_info"
			        },
			        "select": {
			          "row": "active"
			        }
			      });

			      // Have the collection use a material compatible drop down
			      $.extend(true, DataTable.TableTools.DEFAULTS.oTags, {
			        "collection": {
			          "container": "ul",
			          "button": "li",
			          "liner": "a"
			        }
			      });
			    }

			  }; // /factory

			  // Define as an AMD module if possible
				  if (typeof define === 'function' && define.amd) {
				    define(['jquery', 'datatables'], factory);
				  } else if (typeof exports === 'object') {
				    // Node/CommonJS
				    factory(require('jquery'), require('datatables'));
				  } else if (jQuery) {
				    // Otherwise simply initialise as normal, stopping multiple evaluation
				    factory(jQuery, jQuery.fn.dataTable);
				  }

			})(window, document);



			$(document).ready(function() {
			  $('#datatable').dataTable({
			    "oLanguage": {
			      "sSearch": "",
			      "sSearchPlaceholder": "검색",
			      "sInfo": "_START_ -_END_ of _TOTAL_",
			      "sLengthMenu": '<select class="browser-default">' +
			        '<option value="10">10</option>' +
			        '<option value="20">20</option>' +
			        '<option value="30">30</option>' +
			        '<option value="40">40</option>' +
			        '<option value="50">50</option>' +
			        '<option value="-1">All</option>' +
			        '</select></div>'
			    },
			    bAutoWidth: false,

					buttons: [
						
				 ]
				});
			});