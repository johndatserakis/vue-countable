<template>
    <div id="app">

        <a href="https://github.com/johndatserakis/vue-countable" target="_blank" class="github-corner" aria-label="View source on Github">
            <svg width="80" height="80" viewBox="0 0 250 250" style="fill:#FF5722; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
                <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body">
                </path>
            </svg>
        </a>

        <div class="container py-4">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <h3><strong>vue-countable</strong></h3>
                </div>
            </div>
        </div>

        <div class="container pt-3 pb-4">
            <div class="row justify-content-center mb-4">
                <div class="col-lg-6">
                    <span class="badge badge-primary mb-1">install</span>
                    <div class="code-text">npm i vue-countable</div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="list-group">
                      <a href="https://github.com/johndatserakis/vue-countable" class="list-group-item list-group-item-action" target="_blank">View on GitHub</a>
                      <a href="https://www.npmjs.com/package/vue-countable" class="list-group-item list-group-item-action" target="_blank">View on NPM</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="container py-2">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <hr>
                </div>
            </div>
        </div>

        <div class="container py-3">
            <div class="row justify-content-center">
                <div class="col-lg-6 mb-4 mb-lg-0">
                    <div class="form-group">
                        <label>Single Line</label>
                        <input type="text" v-model="firstText" class="form-control"/>
                    </div>
                    <div v-if="firstCounts" class="bg-primary text-white rounded pt-2 pb-1">
                        <ul>
                            <li>Paragraphs: {{firstCounts.paragraphs}}</li>
                            <li>Sentences: {{firstCounts.sentences}}</li>
                            <li>Words: {{firstCounts.words}}</li>
                            <li>Characters: {{firstCounts.characters}}</li>
                            <li>All: {{firstCounts.all}}</li>
                        </ul>
                    </div>
                </div>


                <div class="col-lg-6">
                    <div class="form-group">
                        <label>Longer Text</label>
                        <textarea type="text" v-model="secondText" class="form-control"></textarea>
                    </div>
                   <div v-if="secondCounts" class="bg-primary text-white rounded pt-2 pb-1">
                       <ul>
                           <li>Paragraphs: {{secondCounts.paragraphs}}</li>
                           <li>Sentences: {{secondCounts.sentences}}</li>
                           <li>Words: {{secondCounts.words}}</li>
                           <li>Characters: {{secondCounts.characters}}</li>
                           <li>All: {{secondCounts.all}}</li>
                       </ul>
                   </div>
                </div>
            </div>
        </div>

        <vue-countable
            :text="firstText"
            :elementId="'first-div'"
            @change="changeFirst"
        ></vue-countable>

        <vue-countable
            :text="secondText"
            :elementId="'second-div'"
            @change="changeSecond"
        ></vue-countable>

    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                firstCounts: null,
                secondCounts: null,
                firstText: 'We\'re like \'Friends\'. I am Chandler and Joey and, uh, Pam is Rachel. And Dwight is Kramer.',
                secondText: 'Yes, I was the first one out. And, yes, I\'ve heard women and children first. But, we do not employ children. We are not a sweat shop. Thankfully. And, women are equal in the workplace by law. So, I let them out first, I have a lawsuit on my hands.'
            }
        },
        methods: {
            changeFirst (event) {
                console.log(event)
                this.firstCounts = Object.assign({}, this.firstCounts, event)
            },
            changeSecond (event) {
                console.log(event)
                this.secondCounts = Object.assign({}, this.secondCounts, event)
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Muli:400,700');

    html {
        width: 100%;
        font-size: 18px;
        color: #333;
    }

    body {
        margin: 0;
        height: 100%;
        height: 100vh;
        width: 100%;
        font-family: 'Muli', sans-serif;
    }

    #app {
        height: 100%;
        height: 100vh;
        width: 100%;
        line-height: 1.5;
    }

    .code-text {
        background: #eee;
        border: 1px solid #ddd;
        padding: 10px 20px;
        border-radius: 4px;
        margin-bottom: 20px;
        text-align: center;
    }

    @media (min-width: 992px) {
        .code-text {
            margin-bottom: 0;
        }
    }

    .btn {
        text-transform: uppercase;
        font-weight: bold;
    }

    textarea {
        min-height: 175px;
    }

    .github-corner:hover .octo-arm {
        animation:octocat-wave 560ms ease-in-out
    }

    @keyframes octocat-wave {
        0%,100% {transform:rotate(0)}
        20%,60% {transform:rotate(-25deg)}
        40%,80% {transform:rotate(10deg)}
    }

    @media (max-width:500px) {
        .github-corner:hover .octo-arm {animation:none}
        .github-corner .octo-arm {animation:octocat-wave 560ms ease-in-out}
    }
</style>