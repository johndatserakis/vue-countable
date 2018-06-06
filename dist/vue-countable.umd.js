(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('countable')) :
    typeof define === 'function' && define.amd ? define(['exports', 'countable'], factory) :
    (factory((global.VueCountable = {}),global.countable));
}(this, (function (exports,countable) { 'use strict';

    countable = countable && countable.hasOwnProperty('default') ? countable['default'] : countable;

    //

    var script = {
        name: 'VueCountable',
        props: {
            text: {
                type: String,
                required: true
            },
            id: {
                type: String,
                required: true
            },
            hardReturns: {
                type: Boolean,
                required: false,
                default: false
            },
            stripTags: {
                type: Boolean,
                required: false,
                default: false
            },
            ignore: {
                type: Array,
                required: false,
                default: function () { return []; }
            }
        },
        data: function data () {
            return {
                countable: null
            }
        },
        computed: {
            options: function options () {
                return {
                    hardReturns: this.hardReturns,
                    stripTags: this.stripTags,
                    ignore: this.ignore
                }
            }
        },
        watch: {
            text: {
                handler: function (value) {
                    var this$1 = this;

                    var area = document.getElementById(this.id);
                    if (!area) {
                        return
                    }

                    this.$nextTick(function () {
                        this$1.countable.count(area, function (counter) {
                            this$1.$emit('change', counter);
                        }, this$1.options);
                    });
                }
            }
        },
        methods: {
            // The init function is important because we want to provide counts not
            // only during changes, but also on initialization.
            init: function init () {
                var this$1 = this;

                // Set our countable instance
                this.countable = countable;

                var area = document.getElementById(this.id);
                if (!area) {
                    return
                }

                this.$nextTick(function () {
                    this$1.countable.count(area, function (counter) {
                        this$1.$emit('change', counter);
                    }, this$1.options);
                });
            }
        },
        mounted: function mounted () {
            this.init();
        }
    }

    var __vue_script__ = script;
                
    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "countable-div", attrs: { id: _vm.id } }, [
        _vm._v(_vm._s(_vm.text))
      ])
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

    var __vue_template__ = typeof __vue_render__ !== 'undefined'
      ? { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }
      : {};
    /* style */
    var __vue_inject_styles__ = function (inject) {
      if (!inject) { return }
      inject("data-v-4fdcdc5e_0", { source: "\n.countable-div[data-v-4fdcdc5e] {\n  display: none;\n}\n\n/*# sourceMappingURL=vue-countable.vue.map */", map: undefined, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__ = "data-v-4fdcdc5e";
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      {
        component.__file = "/Users/johndatserakis/Documents/Code/vue-countable/src/vue-countable.vue";
      }

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */


    var component = __vue_normalize__(
      __vue_template__,
      __vue_inject_styles__,
      typeof __vue_script__ === 'undefined' ? {} : __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      typeof __vue_create_injector__ !== 'undefined' ? __vue_create_injector__ : function () {},
      typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {}
    )

    // Import vue component

    // install function executed by Vue.use()
    function install(Vue) {
    	if (install.installed) { return; }
    	install.installed = true;
    	Vue.component('VueCountable', component);
    }

    // Create module definition for Vue.use()
    var plugin = {
    	install: install,
    };

    // To auto-install when vue is found
    var GlobalVue = null;
    if (typeof window !== 'undefined') {
    	GlobalVue = window.Vue;
    } else if (typeof global !== 'undefined') {
    	GlobalVue = global.Vue;
    }
    if (GlobalVue) {
    	GlobalVue.use(plugin);
    }

    // It's possible to expose named exports when writing components that can
    // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
    // export const RollupDemoDirective = component;

    exports.install = install;
    exports.default = component;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
