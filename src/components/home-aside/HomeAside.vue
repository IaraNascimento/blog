
<template>
    <div class="home-aside">
        <h3 class="home-aside-title">Categories</h3>
        <ul class="home-aside-categories">
            <li class="home-aside-categories-item" v-for="(categ, index) in categorys" :key="index" @click="setCategory(categ)">
                <input type="radio" :id="categ" name="category" :value="categ" v-model="category">
                <label :for="categ">{{ categ }}</label>
            </li>
        </ul>
        <h3 class="home-aside-title">Popular Posts</h3>
        <ul class="home-aside-list">
            <li class="home-aside-list-item" v-for="(post, index) in popularList(posts)" @click="goToPost(post.id)" :key="index">
                <preview size="small" :post="post" />
            </li>
        </ul>
        <h3 class="home-aside-title">Recent Posts</h3>
        <ul class="home-aside-list">
            <li class="home-aside-list-item" v-for="(post, index) in latestList(posts)" @click="goToPost(post.id)" :key="index">
                <preview size="small" :post="post" />
            </li>
        </ul>
    </div>
</template>

<script>

import PreviewPost from './../preview-post/PreviewPost.vue';
import { categorys } from './../../domain/CategoryList';

export default {

    name: 'HomeAside',

    components: {
        'preview': PreviewPost
    },

    data() {
        return {
            categorys
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

    methods: {

        latestList(list) {
            let newList = JSON.parse(JSON.stringify(list)).sort((a,b) => new Date(b.date) - new Date(a.date));
            return newList.slice(0, 3);
        },

        popularList(list) {
            let newList = JSON.parse(JSON.stringify(list)).sort((a,b) => b.popular - a.popular);
            return newList.slice(0, 5);
        },

        goToPost(id) {
            this.$router.push( '/post/' + id );
        },

        setCategory(category) {
            this.$store.replaceState({ ...this.$store.state, category });
        }

    }

}

</script>

<style scoped lang="scss">

$aside-background: white;
$border-color: #eaeaea;
$shadow-color: rgba(0, 0, 0, 0.2);

.home-aside {
    
    background-color: $aside-background;
    padding: 16px;
    border: 1px solid $border-color;
    box-shadow: 0 1px 1px 0 $shadow-color;
    
    &-title {
        border-bottom: 1px solid $border-color;
        margin: 4px 0 8px 0;
        padding: 8px 0 16px 0;
        font-weight: bold;
        font-size: 14px;
    }

    &-categories {
        margin-top: 24px;
        margin-bottom: 56px;

        &-item {
            font-size: 14px;
            margin-bottom: 24px;
            opacity: .8;
            transition: all .4s ease;
            cursor: pointer;
            &:hover {
                opacity: 1;
            }
            input,
            label {
                cursor: pointer;
                vertical-align: top;
            }
            input {
                margin: 0;
            }
            label {
                margin-left: 16px;
            }
        }
    }

    &-list {
        margin-top: 16px;
        margin-bottom: 40px;
        display: flex;
        flex-direction: column;
        &-item {
            display: inline-block;
            margin: 8px 0;
            padding: 8px 0;
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
}

@media (min-width: 960px) {

}

</style>
