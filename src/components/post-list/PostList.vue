
<template>
    <ul class="list">
        <li class="list-item" v-for="(post, index) in randomizeList(posts)" @click="goToPost(post)" :key="index">
            <preview :post="post" />
        </li>
    </ul>
</template>

<script>

import PreviewPost from './../preview-post/PreviewPost.vue';

export default {

    name: 'PostList',

    components: {
        'preview': PreviewPost
    },

    data() {
        return {
            wrapHeight: ''
        }
    },

    computed: {
        posts() {
            return this.$store.state.posts;
        }
    },

    methods: {

        randomizeList(list) {
            let shuffleArray = [];
            let listCopy = JSON.parse(JSON.stringify(list));
            list.forEach(() => {
                const randomItem = listCopy[Math.floor(Math.random() * listCopy.length)];
                shuffleArray.push(randomItem);
                listCopy.splice(listCopy.indexOf(randomItem), 1);
            });
            return shuffleArray;
        },

        goToPost(post) {
            this.$router.push( '/post/' + post.id );
        }

    }

}

</script>

<style scoped lang="scss">

$border-color: #eee;
$shadow-color: rgba(0, 0, 0, 0.2);

.list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    &-item {
        display: inline-block;
        max-width: 400px;
        width: calc(100% - 24px);
        margin-bottom: 24px;
        padding: 24px 16px;
        border-bottom: 1px solid $border-color;
        cursor: pointer;
        transition: all .4s ease;
        border: 1px solid transparent;
        box-shadow: 0 3px 6px 0 transparent;
        box-sizing: border-box;
        &:hover {
            border: 1px solid $border-color;
            box-shadow: 0 3px 6px 0 $shadow-color;
        }
    }
}

@media (min-width: 960px) {

    .list {
        max-height: 1200px;
    }

}

</style>
