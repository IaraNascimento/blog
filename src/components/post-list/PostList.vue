
<template>
    <div>
        <ul class="list">
            <li class="list-item" v-for="(post, index) in getLimitedItems(postsShuffled, limitItens, category)" :key="index">
                <preview size="medium" :post="post" />
            </li>
        </ul>
        <p v-show="getLimitedItems(postsShuffled, limitItens, category).length === 0" class="list-empty">Not Found =/</p>
    </div>
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
        },
        category() {
            return this.$store.state.category;
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

        getLimitedItems(list, quantity, category) {
            let filterList = [];
            if (category) {
                filterList = list.filter(item => item.category == category).slice(0, quantity);
            } else {
                filterList = list.slice(0, quantity);
            }
            if(quantity > filterList.length) {
                this.$emit('hideShowMoreBtn', true);
            } else {
                this.$emit('hideShowMoreBtn', false);
            }
            return filterList;
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
    justify-content: center;
    align-items: flex-start;
    &-item {
        display: inline-block;
        margin-bottom: 16px;
        margin-top: 16px;
        padding: 24px 16px;
        border-bottom: 1px solid $border-color;
        box-sizing: border-box;
    }
    &-empty {
        margin: 16px 0;
        width: 100%;
        text-align: center;
    }
}

@media (min-width: 960px) {

    .list {
        justify-content: space-between;
        &-item {
            max-width: 480px;
            width: calc(52% - 24px);
        }
        &-empty {
            margin: 56px 0;
            font-weight: bold;
            font-size: 24px;
        }
    }

}

</style>
