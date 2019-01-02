<template>
</template>

<script>
import countable from 'countable'

export default {
    name: 'VueCountable',
    props: {
        text: {
            type: String,
            required: true
        },
        elementId: {
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
            default: () => []
        }
    },
    data () {
        return {
            countable: null
        }
    },
    computed: {
        options () {
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
                // Everytime this.text changes we'll update our live count
                this.init()
            }
        }
    },
    methods: {
        init () {
            // Set our countable instance
            this.countable = countable

            this.$nextTick(() => {
                this.countable.count(this.text, counter => {
                    this.$emit('change', counter)
                }, this.options)
            })
        }
    },
    mounted () {
        // The init function is important because we want to provide counts not
        // only during changes, but also on initialization.
        this.init()
    }
}
</script>

<style lang="scss" scoped>
</style>