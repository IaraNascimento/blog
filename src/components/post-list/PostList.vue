
<template>
    <ul class="list">
        <li class="list-item" v-for="(post, index) in getLimitedItems(postsShuffled, limitItens)" @click="goToPost(post)" :key="index">
            <preview size="medium" :post="post" />
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

    props: {
        limitItens: {
            required: true,
            type: Number
        }
    },

    data() {
        return {
            postsShuffled: []
        }
    },

    computed: {
        posts() {
            return this.$store.state.posts;
        }
    },

    created() {
        this.postsShuffled = this.randomizeList(this.posts);
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

        getLimitedItems(list, quantity) {
            if(quantity > this.posts.length) {
                this.$emit('hideShowMoreBtn');
            }
            return list.slice(0, quantity);
        },

        goToPost(post) {
            this.$router.push( '/post/' + post.id );
        }

    }

}

</script>

<style scoped lang="scss">

$border-color: #eaeaea;
$shadow-color: rgba(0, 0, 0, 0.2);

.list {
    display: flex;
    flex-wrap: wrap;
    place-content: space-between;
    align-items: flex-start;
    &-item {
        display: inline-block;
        margin-bottom: 16px;
        margin-top: 16px;
        padding: 24px 16px;
        border-bottom: 1px solid $border-color;
        cursor: pointer;
        transition: all .4s ease;
        border-top: 1px solid transparent;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
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
        // max-height: 1680px;
        &-item {
            max-width: 400px;
            width: calc(50% - 24px);
        }
    }

}

</style>
