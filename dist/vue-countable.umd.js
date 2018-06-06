(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('countable')) :
    typeof define === 'function' && define.amd ? define(['exports', 'countable'], factory) :
    (factory((global.VueCountable = {}),global.countable));
}(this, (function (exports,countable) { 'use strict';

    countable = countable && countable.hasOwnProperty('default') ? countable['default'] : countable;

    (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=".countable-div[data-v-0516af59] { display: none; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

    var component = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"countable-div",attrs:{"id":_vm.id}},[_vm._v(_vm._s(_vm.text))])},staticRenderFns: [],_scopeId: 'data-v-0516af59',
        name: 'VueCountable',
        props: {
            text: {
                type: String,
                required: true
            },
            id: {
                type: String,
                required: true
            }
        },
        data: function data () {
            return {
                countable: null
            }
        },
        computed: {
        },
        watch: {
            text: {
                handler: function (value) {
                    var vm = this;
                    var area = document.getElementById(this.id);
                    if (!area) {
                        return
                    }

                    countable.on(area, function (counter) {
                        vm.$emit('change', counter);
                    });
                }
            }
        },
        methods: {
            // The init function is important because we want to provide counts not
            // only during changes, but also on initialization. In init() we use
            // countable.count instead of countable.on, as countable.count is for
            // one time use.
            init: function init () {
                this.countable = countable;
                var vm = this;
                var area = document.getElementById(this.id);
                if (!area) {
                    return
                }

                countable.count(area, function (counter) {
                    vm.$emit('change', counter);
                });
            }
        },
        mounted: function mounted () {
            this.init();
        }
    }

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
