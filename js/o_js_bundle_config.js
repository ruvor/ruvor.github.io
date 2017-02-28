(function() {
try {
var MODULE_PATH = '/o/product-navigation-taglib';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				controlmenu: {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-product-navigation-control-menu': {
							path: 'control_menu/js/product_navigation_control_menu.js',
							requires: [
								'aui-node',
								'event-touch'
							]
						},
						'liferay-product-navigation-control-menu-add-application': {
							path: 'control_menu/js/product_navigation_control_menu_add_application.js',
							requires: [
								'aui-io-request',
								'event-key',
								'event-mouseenter',
								'liferay-panel-search',
								'liferay-portlet-base',
								'liferay-product-navigation-control-menu',
								'liferay-product-navigation-control-menu-add-base',
								'liferay-toggler-interaction'
							]
						},
						'liferay-product-navigation-control-menu-add-base': {
							path: 'control_menu/js/product_navigation_control_menu_add_base.js',
							requires: [
								'anim',
								'aui-base',
								'liferay-layout',
								'liferay-layout-column',
								'liferay-notification',
								'liferay-product-navigation-control-menu',
								'transition'
							]
						},
						'liferay-product-navigation-control-menu-add-content': {
							path: 'control_menu/js/product_navigation_control_menu_add_content.js',
							requires: [
								'aui-io-request',
								'aui-parse-content',
								'event-mouseenter',
								'liferay-portlet-base',
								'liferay-product-navigation-control-menu',
								'liferay-product-navigation-control-menu-add-content-search'
							]
						},
						'liferay-product-navigation-control-menu-add-content-drag-drop': {
							path: 'control_menu/js/product_navigation_control_menu_add_content_drag_drop.js',
							requires: [
								'aui-base',
								'dd',
								'liferay-layout',
								'liferay-layout-column',
								'liferay-portlet-base',
								'liferay-product-navigation-control-menu'
							]
						},
						'liferay-product-navigation-control-menu-add-content-search': {
							path: 'control_menu/js/product_navigation_control_menu_add_content_search.js',
							requires: [
								'aui-base',
								'liferay-product-navigation-control-menu',
								'liferay-search-filter'
							]
						},
						'liferay-product-navigation-control-menu-portlet-dd': {
							condition: {
								name: 'liferay-product-navigation-control-menu-portlet-dd',
								test: function(A) {
									return !A.UA.mobile;
								},
								trigger: ['liferay-product-navigation-control-menu-add-application', 'liferay-product-navigation-control-menu-add-content']
							},
							path: 'control_menu/js/product_navigation_control_menu_portlet_dd.js',
							requires: [
								'aui-base',
								'dd',
								'liferay-layout',
								'liferay-layout-column',
								'liferay-portlet-base',
								'liferay-product-navigation-control-menu'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/product-navigation-simulation-device';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				'navigation-simulation-device': {
					base: MODULE_PATH + '/js/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-product-navigation-simulation-device': {
							path: 'product_navigation_simulation_device.js',
							requires: [
								'aui-dialog-iframe-deprecated',
								'aui-event-input',
								'aui-modal',
								'liferay-portlet-base',
								'liferay-product-navigation-control-menu',
								'liferay-util-window',
								'liferay-widget-size-animation-plugin'
							]
						}
					},
					root: MODULE_PATH + '/js/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/layout-taglib';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				'layout-taglib': {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-layouts-tree': {
							path: 'layouts_tree/js/layouts_tree.js',
							requires: [
								'aui-tree-view'
							]
						},
						'liferay-layouts-tree-check-content-display-page': {
							path: 'layouts_tree/js/layouts_tree_check_content_display_page.js',
							requires: [
								'aui-component',
								'plugin'
							]
						},
						'liferay-layouts-tree-node-radio': {
							path: 'layouts_tree/js/layouts_tree_node_radio.js',
							requires: [
								'aui-tree-node'
							]
						},
						'liferay-layouts-tree-node-task': {
							path: 'layouts_tree/js/layouts_tree_node_task.js',
							requires: [
								'aui-tree-node'
							]
						},
						'liferay-layouts-tree-radio': {
							path: 'layouts_tree/js/layouts_tree_radio.js',
							requires: [
								'aui-tree-node',
								'liferay-layouts-tree-node-radio'
							]
						},
						'liferay-layouts-tree-selectable': {
							path: 'layouts_tree/js/layouts_tree_selectable.js',
							requires: [
								'liferay-layouts-tree-node-task'
							]
						},
						'liferay-layouts-tree-state': {
							path: 'layouts_tree/js/layouts_tree_state.js',
							requires: [
								'aui-base',
								'aui-io-request',
								'liferay-store'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/map-openstreetmap';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				mapopenstreet: {
					base: MODULE_PATH + '/js/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-map-openstreetmap': {
							path: 'map.js',
							requires: [
								'jsonp',
								'liferay-map-common',
								'timers'
							]
						}
					},
					root: MODULE_PATH + '/js/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/map-google-maps';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				mapgoogle: {
					base: MODULE_PATH + '/js/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-map-google-maps': {
							path: 'map.js',
							requires: [
								'liferay-map-common'
							]
						}
					},
					root: MODULE_PATH + '/js/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/map-common';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				mapbase: {
					base: MODULE_PATH + '/js/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-map-common': {
							path: 'map.js',
							requires: [
								'aui-base'
							]
						}
					},
					root: MODULE_PATH + '/js/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/frontend-taglib';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				'frontend-taglib': {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-diff-version-comparator': {
							path: 'diff_version_comparator/js/diff_version_comparator.js',
							requires: [
								'aui-io-request',
								'autocomplete-base',
								'autocomplete-filters',
								'liferay-portlet-base'
							]
						},
						'liferay-management-bar': {
							path: 'management_bar/js/management_bar.js',
							requires: [
								'aui-component',
								'liferay-portlet-base'
							]
						},
						'liferay-sidebar-panel': {
							path: 'sidebar_panel/js/sidebar_panel.js',
							requires: [
								'aui-base',
								'aui-io-request',
								'aui-parse-content',
								'liferay-portlet-base'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/frontend-js-soyutils-web';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				'soyutils': {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'soyutils': {
							path: 'soyutils.js'
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);

	Loader.addModule(
		{
			dependencies: [],
			exports: 'soy',
			name: 'soyutils',
			path: MODULE_PATH + '/soyutils.js'
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/frontend-js-polyfill-babel-web';
Loader.addModule(
	{
		dependencies: [],
		exports: '_babelPolyfill',
		name: 'polyfill-babel',
		path: MODULE_PATH + 'browser-polyfill.min.js'
	}
);} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/frontend-editor-alloyeditor-web';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				alloyeditor: {
					base: MODULE_PATH + '/js/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-alloy-editor': {
							path: 'alloyeditor.js',
							requires: [
								'aui-component',
								'liferay-portlet-base'
							]
						},
						'liferay-alloy-editor-source': {
							path: 'alloyeditor_source.js',
							requires: [
								'aui-debounce',
								'liferay-fullscreen-source-editor',
								'liferay-source-editor',
								'plugin'
							]
						}
					},
					root: MODULE_PATH + '/js/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/dynamic-data-mapping-type-validation';
;(function() {
	var LiferayAUI = Liferay.AUI;

	AUI().applyConfig(
		{
			groups: {
				'field-validation': {
					base: MODULE_PATH + '/',
					filter: LiferayAUI.getFilterConfig(),
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-ddm-form-field-validation': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'validation_field.js',
							requires: [
								'liferay-ddm-form-renderer-field'
							]
						},
						'liferay-ddm-form-field-validation-template': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'validation.soy.js',
							requires: [
								'soyutils'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/dynamic-data-mapping-type-text';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				'field-text': {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					filter: Liferay.AUI.getFilterConfig(),
					modules: {
						'liferay-ddm-form-field-text': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'text_field.js',
							requires: [
								'aui-autosize-deprecated',
								'aui-tooltip',
								'liferay-ddm-form-renderer-field'
							]
						},
						'liferay-ddm-form-field-text-template': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'text.soy.js',
							requires: [
								'soyutils'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/dynamic-data-mapping-type-select';
;(function() {
	var LiferayAUI = Liferay.AUI;

	AUI().applyConfig(
		{
			groups: {
				'field-select': {
					base: MODULE_PATH + '/',
					filter: LiferayAUI.getFilterConfig(),
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-ddm-form-field-select': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'select_field.js',
							requires: [
								'liferay-ddm-form-renderer-field'
							]
						},
						'liferay-ddm-form-field-select-template': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'select.soy.js',
							requires: [
								'soyutils'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/dynamic-data-mapping-type-radio';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				'field-radio': {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-ddm-form-field-radio': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'radio_field.js',
							requires: [
								'liferay-ddm-form-renderer-field'
							]
						},
						'liferay-ddm-form-field-radio-template': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'radio.soy.js',
							requires: [
								'soyutils'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/dynamic-data-mapping-type-options';
;(function() {
	var LiferayAUI = Liferay.AUI;

	AUI().applyConfig(
		{
			groups: {
				'field-options': {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					filter: LiferayAUI.getFilterConfig(),
					modules: {
						'liferay-ddm-form-field-options': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'options_field.js',
							requires: [
								'aui-sortable-list',
								'liferay-ddm-form-field-key-value',
								'liferay-ddm-form-renderer-field'
							]
						},
						'liferay-ddm-form-field-options-template': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'options.soy.js',
							requires: [
								'soyutils'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/dynamic-data-mapping-type-key-value';
;(function() {
	var LiferayAUI = Liferay.AUI;

	AUI().applyConfig(
		{
			groups: {
				'field-key-value': {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					filter: LiferayAUI.getFilterConfig(),
					modules: {
						'liferay-ddm-form-field-key-value': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'key_value_field.js',
							requires: [
								'aui-text-unicode',
								'liferay-ddm-form-field-text',
								'liferay-ddm-form-renderer-field'
							]
						},
						'liferay-ddm-form-field-key-value-template': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'key_value.soy.js',
							requires: [
								'soyutils'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/dynamic-data-mapping-type-editor';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				'field-editor': {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					filter: Liferay.AUI.getFilterConfig(),
					modules: {
						'liferay-ddm-form-field-editor': {
							path: 'editor_field.js',
							requires: [
								'liferay-alloy-editor',
								'liferay-ddm-form-field-text',
								'liferay-ddm-form-renderer-field'
							]
						},
						'liferay-ddm-form-field-editor-template': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'editor.soy.js',
							requires: [
								'soyutils'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/dynamic-data-mapping-type-date';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				'field-date': {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-ddm-form-field-date': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'date_field.js',
							requires: [
								'aui-datepicker',
								'liferay-ddm-form-renderer-field'
							]
						},
						'liferay-ddm-form-field-date-template': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'date.soy.js',
							requires: [
								'soyutils'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/dynamic-data-mapping-type-checkbox';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				'field-checkbox': {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-ddm-form-field-checkbox': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'checkbox_field.js',
							requires: [
								'liferay-ddm-form-renderer-field'
							]
						},
						'liferay-ddm-form-field-checkbox-template': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'checkbox.soy.js',
							requires: [
								'soyutils'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/dynamic-data-mapping-type-captcha';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				'field-captcha': {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-ddm-form-field-captcha': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'captcha_field.js',
							requires: [
								'liferay-ddm-form-renderer-field'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/dynamic-data-mapping-form-renderer';
;(function() {
	var LiferayAUI = Liferay.AUI;

	AUI().applyConfig(
		{
			groups: {
				'form': {
					base: MODULE_PATH + '/js/',
					combine: Liferay.AUI.getCombine(),
					filter: LiferayAUI.getFilterConfig(),
					modules: {
						'liferay-ddm-form-renderer': {
							path: 'form.js',
							requires: [
								'aui-component',
								'aui-tabview',
								'liferay-ddm-form-renderer-definition',
								'liferay-ddm-form-renderer-feedback',
								'liferay-ddm-form-renderer-nested-fields',
								'liferay-ddm-form-renderer-pagination',
								'liferay-ddm-form-renderer-tabs',
								'liferay-ddm-form-renderer-template',
								'liferay-ddm-form-renderer-type',
								'liferay-ddm-form-renderer-types',
								'liferay-ddm-form-renderer-util',
								'liferay-ddm-form-renderer-validation',
								'liferay-ddm-form-soy'
							]
						},
						'liferay-ddm-form-renderer-definition': {
							path: 'form_definition_support.js',
							requires: [
								'liferay-ddm-form-renderer-types',
								'liferay-ddm-form-renderer-util'
							]
						},
						'liferay-ddm-form-renderer-expressions-evaluator': {
							path: 'expressions_evaluator.js',
							requires: [
								'aui-component',
								'aui-io-request'
							]
						},
						'liferay-ddm-form-renderer-feedback': {
							path: 'form_feedback_support.js',
							requires: [
								'aui-alert'
							]
						},
						'liferay-ddm-form-renderer-field': {
							path: 'field.js',
							requires: [
								'aui-datatype',
								'aui-node',
								'liferay-ddm-form-renderer',
								'liferay-ddm-form-renderer-field-events',
								'liferay-ddm-form-renderer-field-feedback',
								'liferay-ddm-form-renderer-field-repetition',
								'liferay-ddm-form-renderer-field-validation',
								'liferay-ddm-form-renderer-nested-fields',
								'liferay-ddm-form-renderer-types',
								'liferay-ddm-form-renderer-util'
							]
						},
						'liferay-ddm-form-renderer-field-events': {
							path: 'field_events_support.js',
							requires: []
						},
						'liferay-ddm-form-renderer-field-feedback': {
							path: 'field_feedback_support.js',
							requires: [
								'aui-node'
							]
						},
						'liferay-ddm-form-renderer-field-repetition': {
							path: 'field_repetition_support.js',
							requires: [
								'aui-datatype',
								'liferay-ddm-form-renderer-types',
								'liferay-ddm-form-renderer-util'
							]
						},
						'liferay-ddm-form-renderer-field-validation': {
							path: 'field_validation_support.js',
							requires: [
								'liferay-ddm-form-renderer-expressions-evaluator'
							]
						},
						'liferay-ddm-form-renderer-field-visibility': {
							path: 'field_visibility_support.js',
							requires: [
								'liferay-ddm-form-renderer-expressions-evaluator',
								'liferay-ddm-form-renderer-util'
							]
						},
						'liferay-ddm-form-renderer-nested-fields': {
							path: 'nested_fields_support.js',
							requires: [
								'array-invoke',
								'liferay-ddm-form-renderer-types',
								'liferay-ddm-form-renderer-util'
							]
						},
						'liferay-ddm-form-renderer-pagination': {
							path: 'form_pagination_support.js',
							requires: [
								'aui-pagination',
								'liferay-ddm-form-renderer-wizard'
							]
						},
						'liferay-ddm-form-renderer-tabs': {
							path: 'form_tabs_support.js',
							requires: [
								'aui-tabview'
							]
						},
						'liferay-ddm-form-renderer-template': {
							path: 'form_template_support.js',
							requires: [
								'aui-base'
							]
						},
						'liferay-ddm-form-renderer-type': {
							path: 'type.js',
							requires: [
								'aui-form-builder-field-type'
							]
						},
						'liferay-ddm-form-renderer-types': {
							path: 'types.js',
							requires: [
								'array-extras',
								'aui-form-builder-field-type',
								'liferay-ddm-form-renderer-util'
							]
						},
						'liferay-ddm-form-renderer-util': {
							path: 'util.js',
							requires: [
								'liferay-ddm-form-renderer-types',
								'queue'
							]
						},
						'liferay-ddm-form-renderer-validation': {
							path: 'form_validation_support.js',
							requires: [
								'aui-alert',
								'liferay-ddm-form-renderer-expressions-evaluator'
							]
						},
						'liferay-ddm-form-renderer-wizard': {
							path: 'wizard.js',
							requires: [
								'aui-component',
								'aui-node',
								'widget'
							]
						}
					},
					root: MODULE_PATH + '/js/'
				},
				'templates': {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-ddm-form-soy': {
							path: 'form.soy.js',
							requires: [
								'soyutils'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/ddm-type-paragraph';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				'field-paragraph': {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-ddm-form-field-paragraph': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'paragraph_field.js',
							requires: [
								'liferay-ddm-form-renderer-field'
							]
						},
						'liferay-ddm-form-field-paragraph-template': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'paragraph.soy.js',
							requires: [
								'soyutils'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/item-selector-taglib';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				'item-selector-taglib': {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-image-selector': {
							path: 'image_selector/js/image_selector.js',
							requires: [
								'aui-base',
								'liferay-item-selector-dialog',
								'liferay-portlet-base',
								'uploader'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/journal-web';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				journal: {
					base: MODULE_PATH + '/js/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-journal-content': {
							path: 'content.js',
							requires: [
								'aui-base',
								'liferay-portlet-base'
							]
						},
						'liferay-journal-navigation': {
							path: 'navigation.js',
							requires: [
								'aui-component',
								'liferay-portlet-base',
								'liferay-search-container'
							]
						},
						'liferay-portlet-journal': {
							path: 'main.js',
							requires: [
								'aui-base',
								'aui-dialog-iframe-deprecated',
								'aui-tooltip',
								'liferay-portlet-base',
								'liferay-util-window'
							]
						}
					},
					root: MODULE_PATH + '/js/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/dynamic-data-mapping-web';
;(function() {
	var LiferayAUI = Liferay.AUI;

	AUI().applyConfig(
		{
			groups: {
				ddm: {
					base: MODULE_PATH + '/js/',
					combine: Liferay.AUI.getCombine(),
					filter: LiferayAUI.getFilterConfig(),
					modules: {
						'liferay-ddm-form': {
							path: 'ddm_form.js',
							requires: [
								'aui-base',
								'aui-datatable',
								'aui-datatype',
								'aui-image-viewer',
								'aui-io-request',
								'aui-parse-content',
								'aui-set',
								'aui-sortable-list',
								'json',
								'liferay-form',
								'liferay-item-selector-dialog',
								'liferay-layouts-tree',
								'liferay-layouts-tree-radio',
								'liferay-layouts-tree-selectable',
								'liferay-map-base',
								'liferay-notice',
								'liferay-portlet-url',
								'liferay-translation-manager'
							]
						},
						'liferay-portlet-dynamic-data-mapping': {
							condition: {
								trigger: 'liferay-document-library'
							},
							path: 'main.js',
							requires: [
								'arraysort',
								'aui-form-builder-deprecated',
								'aui-form-validator',
								'aui-map', 'aui-text-unicode',
								'json',
								'liferay-menu',
								'liferay-translation-manager',
								'liferay-util-window',
								'text'
							]
						},
						'liferay-portlet-dynamic-data-mapping-custom-fields': {
							condition: {
								trigger: 'liferay-document-library'
							},
							path: 'custom_fields.js',
							requires: [
								'liferay-portlet-dynamic-data-mapping'
							]
						}
					},
					root: MODULE_PATH + '/js/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/dynamic-data-lists-form-web';
;(function() {
	var LiferayAUI = Liferay.AUI;

	AUI().applyConfig(
		{
			groups: {
				ddl: {
					base: MODULE_PATH + '/admin/js/',
					combine: Liferay.AUI.getCombine(),
					filter: LiferayAUI.getFilterConfig(),
					modules: {
						'liferay-ddl-form-builder': {
							path: 'form_builder.js',
							requires: [
								'aui-form-builder',
								'aui-form-builder-pages',
								'liferay-ddl-form-builder-field-list',
								'liferay-ddl-form-builder-field-settings-modal',
								'liferay-ddl-form-builder-field-support',
								'liferay-ddl-form-builder-field-toolbar',
								'liferay-ddl-form-builder-field-types-modal',
								'liferay-ddl-form-builder-layout-builder-support',
								'liferay-ddl-form-builder-layout-deserializer',
								'liferay-ddl-form-builder-layout-visitor',
								'liferay-ddl-form-builder-pages-manager',
								'liferay-ddl-form-builder-util',
								'liferay-ddm-form-field-types',
								'liferay-ddm-form-renderer'
							]
						},
						'liferay-ddl-form-builder-definition-serializer': {
							path: 'form_definition_serializer.js',
							requires: [
								'json',
								'liferay-ddl-form-builder-layout-visitor'
							]
						},
						'liferay-ddl-form-builder-field-list': {
							path: 'form_builder_field_list.js',
							requires: [
								'aui-form-builder-field-list'
							]
						},
						'liferay-ddl-form-builder-field-settings-modal': {
							path: 'form_builder_field_settings_modal.js',
							requires: [
								'form-builder-settings-modal',
								'liferay-ddl-form-builder-modal'
							]
						},
						'liferay-ddl-form-builder-field-toolbar': {
							path: 'form_builder_field_toolbar.js',
							requires: [
								'aui-form-builder-field-toolbar'
							]
						},
						'liferay-ddl-form-builder-field-types-modal': {
							path: 'form_builder_field_types_modal.js',
							requires: [
								'aui-form-builder-field-types-modal',
								'liferay-ddl-form-builder-modal-support'
							]
						},
						'liferay-ddl-form-builder-layout-builder-support': {
							path: 'form_builder_layout_builder_support.js',
							requires: []
						},
						'liferay-ddl-form-builder-layout-deserializer': {
							path: 'form_layout_deserializer.js',
							requires: [
								'aui-form-builder-field-list',
								'aui-layout',
								'liferay-ddl-form-builder-field-support',
								'liferay-ddm-form-field-types'
							]
						},
						'liferay-ddl-form-builder-layout-serializer': {
							path: 'form_layout_serializer.js',
							requires: [
								'json',
								'liferay-ddl-form-builder-layout-visitor'
							]
						},
						'liferay-ddl-form-builder-layout-visitor': {
							path: 'form_layout_visitor.js',
							requires: [
								'aui-form-builder-field-list',
								'aui-layout'
							]
						},
						'liferay-ddl-form-builder-modal': {
							path: 'form_builder_modal.js',
							requires: [
								'liferay-ddl-form-builder-modal-support'
							]
						},
						'liferay-ddl-form-builder-modal-support': {
							path: 'form_builder_modal_support.js',
							requires: [
								'aui-modal'
							]
						},
						'liferay-ddl-form-builder-pages-manager': {
							path: 'form_builder_pages_manager.js',
							requires: [
								'aui-form-builder-page-manager',
								'liferay-ddm-form-renderer-wizard'
							]
						},
						'liferay-ddl-form-builder-settings-form': {
							path: 'form_builder_settings_form.js',
							requires: [
								'liferay-ddm-form-renderer',
								'liferay-form'
							]
						},
						'liferay-ddl-form-builder-settings-support': {
							path: 'form_builder_settings_support.js',
							requires: [
								'liferay-ddl-form-builder-settings-form'
							]
						},
						'liferay-ddl-form-builder-util': {
							path: 'form_builder_util.js',
							requires: [
								'liferay-ddl-form-builder-field-support',
								'liferay-ddm-form-renderer-util'
							]
						},
						'liferay-ddl-portlet': {
							path: 'form_portlet.js',
							requires: [
								'liferay-ddl-form-builder',
								'liferay-ddl-form-builder-definition-serializer',
								'liferay-ddl-form-builder-layout-serializer',
								'liferay-portlet-base',
								'liferay-util-window'
							]
						}
					},
					root: MODULE_PATH + '/admin/js/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/layout-admin-web';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				layoutcustomizationsettings: {
					base: MODULE_PATH + '/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-layout-customization-settings': {
							path: 'js/layout_customization_settings.js',
							requires: [
								'aui-base',
								'aui-io-request',
								'aui-overlay-mask-deprecated',
								'liferay-portlet-base'
							]
						},
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/calendar-web';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				calendar: {
					base: MODULE_PATH + '/js/',
					combine: Liferay.AUI.getCombine(),
					filter: Liferay.AUI.getFilterConfig(),
					modules: {
						'liferay-calendar-interval-selector': {
							path: 'interval_selector.js',
							requires: [
								'aui-base',
								'liferay-portlet-base'
							]
						},
						'liferay-calendar-interval-selector-scheduler-event-link': {
							path: 'interval_selector_scheduler_event_link.js',
							requires: [
								'aui-base',
								'liferay-portlet-base'
							]
						},
						'liferay-calendar-list': {
							path: 'calendar_list.js',
							requires: [
								'aui-template-deprecated',
								'liferay-scheduler'
							]
						},
						'liferay-calendar-message-util': {
							path: 'message_util.js',
							requires: [
								'aui-alert',
								'liferay-util-window'
							]
						},
						'liferay-calendar-recurrence-converter': {
							path: 'recurrence_converter.js',
							requires: []
						},
						'liferay-calendar-recurrence-dialog': {
							path: 'recurrence.js',
							requires: [
								'aui-base',
								'liferay-calendar-recurrence-util'
							]
						},
						'liferay-calendar-recurrence-util': {
							path: 'recurrence_util.js',
							requires: [
								'aui-base',
								'liferay-util-window'
							]
						},
						'liferay-calendar-reminders': {
							path: 'calendar_reminders.js',
							requires: [
								'aui-base'
							]
						},
						'liferay-calendar-session-listener': {
							path: 'session_listener.js',
							requires: [
								'aui-base',
								'liferay-scheduler'
							]
						},
						'liferay-calendar-simple-color-picker': {
							path: 'simple_color_picker.js',
							requires: [
								'aui-base',
								'aui-template-deprecated'
							]
						},
						'liferay-calendar-simple-menu': {
							path: 'simple_menu.js',
							requires: [
								'aui-base',
								'aui-template-deprecated',
								'event-outside',
								'event-touch',
								'widget-modality',
								'widget-position',
								'widget-position-align',
								'widget-position-constrain',
								'widget-stack',
								'widget-stdmod'
							]
						},
						'liferay-calendar-util': {
							path: 'calendar_util.js',
							requires: [
								'aui-datatype',
								'aui-io',
								'aui-scheduler',
								'aui-toolbar',
								'autocomplete',
								'autocomplete-highlighters',
								'liferay-portlet-url'
							]
						},
						'liferay-scheduler': {
							path: 'scheduler.js',
							requires: [
								'async-queue',
								'aui-datatype',
								'aui-scheduler',
								'dd-plugin',
								'liferay-calendar-message-util',
								'liferay-calendar-recurrence-converter',
								'liferay-calendar-recurrence-util',
								'liferay-calendar-util',
								'liferay-node',
								'liferay-store',
								'promise',
								'resize-plugin'
							]
						}
					},
					root: MODULE_PATH + '/js/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/invitation-invite-members-web';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				'invite-members': {
					base: MODULE_PATH + '/invite_members/js/',
					combine: Liferay.AUI.getCombine(),
					filter: Liferay.AUI.getFilterConfig(),
					modules: {
						'liferay-portlet-invite-members': {
							path: 'main.js',
							requires: [
								'aui-base',
								'autocomplete-base',
								'datasource-io',
								'datatype-number',
								'liferay-portlet-base',
								'liferay-util-window',
								'node-core'
							]
						}
					},
					root: MODULE_PATH + '/invite_members/js/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/blogs-web';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				blogs: {
					base: MODULE_PATH + '/blogs/js/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-blogs': {
							path: 'blogs.js',
							requires: [
								'aui-base',
								'aui-io-request',
								'liferay-portlet-base'
							]
						}
					},
					root: MODULE_PATH + '/blogs/js/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/document-library-web';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				dl: {
					base: MODULE_PATH + '/document_library/js/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'document-library-checkin': {
							path: 'checkin.js',
							requires: [
								'liferay-document-library',
								'liferay-util-window'
							]
						},
						'document-library-upload': {
							path: 'upload.js',
							requires: [
								'aui-component',
								'aui-data-set-deprecated',
								'aui-overlay-manager-deprecated',
								'aui-overlay-mask-deprecated',
								'aui-parse-content',
								'aui-progressbar',
								'aui-template-deprecated',
								'aui-tooltip',
								'liferay-history-manager',
								'liferay-search-container',
								'liferay-storage-formatter',
								'querystring-parse-simple',
								'uploader'
							]
						},
						'liferay-document-library': {
							path: 'main.js',
							requires: [
								'document-library-upload',
								'liferay-message',
								'liferay-portlet-base'
							]
						}
					},
					root: MODULE_PATH + '/document_library/js/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
try {
var MODULE_PATH = '/o/bookmarks-web';
;(function() {
	AUI().applyConfig(
		{
			groups: {
				bookmarks: {
					base: MODULE_PATH + '/bookmarks/js/',
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-bookmarks': {
							path: 'main.js',
							requires: [
								'liferay-portlet-base'
							]
						}
					},
					root: MODULE_PATH + '/bookmarks/js/'
				}
			}
		}
	);
})();} catch (error) {
console.error(error);
}
}());
