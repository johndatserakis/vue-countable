import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const config = {
    input: 'src/index.js',
    output: {
        name: 'VueCountable',
        exports: 'named',
        globals: {
            'vue': 'Vue',
            'countable': 'countable'
        }
    },
    plugins: [
        commonjs(),
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        vue({
            css: true,
            compileTemplate: true,
        }),
        buble(),
    ],
    external: ['vue', 'countable']
};

// Only minify browser (iife) version
if (argv.format === 'iife') {
    config.plugins.push(terser());

    // Here we remove our `external` dependency that we have in this project
    // Be careful with the index here - it has to match any dependency that
    // you want to be built into to the iife output
    config.external.splice(1)
}

export default config;
