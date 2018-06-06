<template>
    <div :id="id" class="countable-div">{{text}}</div>
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
                let area = document.getElementById(this.id)
                if (!area) {
                    return
                }

                this.$nextTick(() => {
                    this.countable.count(area, counter => {
                        this.$emit('change', counter)
                    }, this.options)
                })
            }
        }
    },
    methods: {
        // The init function is important because we want to provide counts not
        // only during changes, but also on initialization.
        init () {
            // Set our countable instance
            this.countable = countable

            let area = document.getElementById(this.id)
            if (!area) {
                return
            }

            this.$nextTick(() => {
                this.countable.count(area, counter => {
                    this.$emit('change', counter)
                }, this.options)
            })
        }
    },
    mounted () {
        this.init()
    }
}
</script>

<style lang="scss" scoped>
    .countable-div {
        display: none;
    }
</style>