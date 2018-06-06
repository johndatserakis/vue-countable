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
        }
    },
    data () {
        return {
            countable: null
        }
    },
    computed: {
    },
    watch: {
        text: {
            handler: function (value) {
                let vm = this
                let area = document.getElementById(this.id)
                if (!area) {
                    return
                }

                countable.on(area, function (counter) {
                    vm.$emit('change', counter)
                })
            }
        }
    },
    methods: {
        // The init function is important because we want to provide counts not
        // only during changes, but also on initialization. In init() we use
        // countable.count instead of countable.on, as countable.count is for
        // one time use.
        init () {
            this.countable = countable
            let vm = this
            let area = document.getElementById(this.id)
            if (!area) {
                return
            }

            countable.count(area, function (counter) {
                vm.$emit('change', counter)
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