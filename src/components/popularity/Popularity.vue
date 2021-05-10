
<template>
    <div class="popularity">
        <span class="popularity-like" >
            <font-awesome-icon v-show="(post.liked <= 0)" :icon="{ prefix: 'far', iconName: 'heart' }" @click="post.liked++" />
            <font-awesome-icon class="popularity-like-liked" v-show="(post.liked > 0)" :icon="{ prefix: 'fas', iconName: 'heart' }" @click="post.liked--" />
            {{ post.liked }}
        </span>
        <span class="popularity-message">
            <font-awesome-icon v-show="(post.comments.length <= 0)" :icon="{ prefix: 'far', iconName: 'comments' }" />
            <font-awesome-icon v-show="(post.comments.length > 0)" :icon="{ prefix: 'fas', iconName: 'comments' }" />
            {{ post.comments.length }}
        </span>
        <div class="popularity-popularity">
            <ul class="popularity-popularity-list">
                <li class="popularity-popularity-item" v-for="(pop, index) in post.popularity" :key="index">
                    <img class="popularity-popularity-img" :src="pop.photo" />
                </li>
            </ul>
            <span class="popularity-popularity-more">+ 20 more</span>
        </div>
    </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as fasHeart, faComments as fasComments } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart, faComments as farComments } from '@fortawesome/free-regular-svg-icons';

library.add(fasHeart, farHeart, fasComments, farComments);

export default {

    name: 'PreviewPostPopularity',

    props: {
        post: {
            required: true,
            type: Object
        }
    },

}

</script>

<style scoped lang="scss">

$details: #FF0000;
$info-color: #ccc;

.popularity {

    position: relative;
    min-height: 24px;
    font-size: 12px;
    color: $info-color;

    &-like,
    &-message {
        display: inline-block;
        vertical-align: top;
        font-size: 13px;
        color: $info-color;
    }

    &-like {
        > * {
            cursor: pointer;
            transition: all .4s ease;
            &:hover {
                opacity: .8;
            }
        }
        &-liked {
            opacity: .6;
            color: $details;
        }
    }

    &-message {
        margin: 0 0 0 16px;
    }

    &-popularity {
        position: absolute;
        top: 0;
        right: 0;

        &-list {
            margin-top: -8px;
            margin-right: 20px;
            display: inline-block;
        }

        &-item {
            position: relative;
            display: inline-block;
            border-radius: 50%;
            overflow: hidden;
            width: 24px;
            height: 24px;
            margin-right: -14px;
            border: 2px solid $info-color;
        }

        &-img {
            position: absolute;
            display: inline-block;
            background-color: red;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            min-width: 100%;
            min-height: 100%;
            width: 100%;
            opacity: .8;
        }

        &-more {
            vertical-align: top;
        }

    }

}

</style>
