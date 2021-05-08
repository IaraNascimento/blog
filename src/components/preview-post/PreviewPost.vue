
<template>
    <div class="preview" :class="{'preview-s':(size=='small'), 'preview-m':(size=='medium'), 'preview-b':(size=='big')}">
        <div class="preview-information" v-show="(size == 'medium')">
            <span class="preview-information-category">{{ post.category }}</span><span class="preview-information-date"> - {{ formatDate(post.date) }}</span>
        </div>
        <h2 :class="{'preview-title-s':(size=='small'), 'preview-title-m':(size=='medium'), 'preview-title-b':(size=='big')}">
            <p class="preview-label" v-show="label">{{ label }}</p>
            <span class="preview-title-text" @click="goToPost(post.id, 'title', size)">{{ post.title }}</span>
            <button class="preview-title-btn blog-button" v-show="label" @click="goToPost(post.id)">Keep Reading</button>
        </h2>
        <img :class="{'preview-image-s':(size=='small'), 'preview-image-m':(size=='medium'), 'preview-image-b':(size=='big')}" :src="post.image"  @click="goToPost(post.id, 'image', size)" />
        <p v-show="(size == 'medium')" class="preview-text">{{ limitChars( post.text ) }}</p>
        <p v-show="(size == 'small')" class="preview-date">{{ countDays( post.date ) }}</p>
        <span class="preview-like" v-show="(size == 'medium')">
            <font-awesome-icon v-show="(post.liked <= 0)" :icon="{ prefix: 'far', iconName: 'heart' }" @click="post.liked++" />
            <font-awesome-icon class="preview-like-liked" v-show="(post.liked > 0)" :icon="{ prefix: 'fas', iconName: 'heart' }" @click="post.liked--" />
            {{ post.liked }}
        </span>
        <span class="preview-message" v-show="(size == 'medium')">
            <font-awesome-icon v-show="(post.comments.length <= 0)" :icon="{ prefix: 'far', iconName: 'comments' }" />
            <font-awesome-icon v-show="(post.comments.length > 0)" :icon="{ prefix: 'fas', iconName: 'comments' }" />
            {{ post.comments.length }}
        </span>
    </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart as fasHeart, faComments as fasComments } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart, faComments as farComments } from '@fortawesome/free-regular-svg-icons';

library.add(fasHeart, farHeart, fasComments, farComments);

export default {

    name: 'PreviewPost',

    props: {
        post: {
            required: true,
            type: Object
        },
        size: {
            required: true,
            type: String
        },
        label: {
            type: String
        }
    },

    methods: {

        limitChars(text) {
            if(text.length > 320) {
                return text.substring(0, 319) + '...';
            }
            return text;
        },

        countDays(date) {
            const oneDay = 24 * 60 * 60 * 1000;
            const diffDays = Math.round(Math.abs((new Date(date) - new Date()) / oneDay));
            if ( diffDays <= 0 ) {
                return 'today';
            } else if ( diffDays === 1 ) {
                return '1 day ago';
            } else {
                return JSON.stringify(diffDays) + ' days ago';
            }
        },

        goToPost(id, target, size) {
            if((target=='title' || target=='image') && size=='big') {
                return;
            }
            this.$router.push( '/post/' + id );
        },

        formatDate(date) {
            const newDate = new Date(date);
            const day = '' + newDate.getDate();
            const month = '' + this.getMonth( newDate.getMonth() + 1 );
            const year = '' + newDate.getFullYear();
            return month + ' ' + day + ',' + year;
        },

        getMonth(monthNumber) {
            switch (monthNumber) {
                case 1 : return 'Jan';
                case 2 : return 'Feb';
                case 3 : return 'Mar';
                case 4 : return 'Apr';
                case 5 : return 'May';
                case 6 : return 'Jun';
                case 7 : return 'Jul';
                case 8 : return 'Ago';
                case 9 : return 'Set';
                case 10 : return 'Oct';
                case 11 : return 'Nov';
                case 12 : return 'Dez';
            }

        }

    }

}

</script>

<style scoped lang="scss">

@import './../../assets/styles/button.css';

$preview-text-color: #999;
$title-m-padding: 48px;
$date-color: #999;
$details: #FF0000;
$info-color: #ccc;

@mixin position() {
    width: calc(100% - #{$title-m-padding});
    padding-left: calc(#{$title-m-padding} + 8px);
}

.preview {
    position: relative;
    overflow: hidden;
    
    &-s {
        min-height: 40px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    
    &-m {
        max-width: 480px;
    }
    
    &-b {
        height: 40vh;
        background-color: black;
    }

    &-information {
        font-size: 12px;
        text-align: center;
        margin-bottom: 12px;

        &-category,
        &-date {
            display: inline-block;
            vertical-align: top;
        }

        &-category {
            color: white;
            background-color: $details;
            padding: 4px 16px;
            border-radius: 4px;
        }

        &-date {
            margin-top: 4px;
            margin-left: 4px;
        }

    }
    
    &-title {
        
        &-s {
            @include position();
        }
        
        &-m {
            text-transform: uppercase;
            font-size: 18px;
            margin-bottom: 18px;
            font-weight: bold;
            width: 100%;
            text-align: center;
            transition: all .4s ease;
            cursor: pointer;
            &:hover {
                color: $details;
            }
        }
        
        &-b {
            position: absolute;
            top: 40%;
            left: 10%;
            color: white;
            font-size: 32px;
            z-index: 1;

            .preview-title-text {
                display: inline-block;
                margin-bottom: 16px;

                &:before, &:after {
                    content: ' " ';
                }
            }

        }

        &-btn {
            display: block;
        }

    }

    &-image {
        
        &-s {
            position: absolute;
            top: 0;
            left: 4px;
            object-fit: cover;
            width: 40px;
            height: 40px;
            border-radius: 20px;
        }
        
        &-m {
            display: block;
            max-width: 100%;
            max-height: 320px;
            margin: 0 auto 16px auto;
            transition: all .4s ease;
            cursor: pointer;
            &:hover {
                transform: scale(1.1);
            }
        }
        
        &-b {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            min-width: 100%;
            min-height: 100%;
            opacity: .5;
        }

    }
    
    &-text {
        font-size: 12px;
        line-height: 20px;
        color: $preview-text-color;
    }
    
    &-date {
        @include position();
        font-size: 12px;
        color: $date-color;
    }
    
    &-label {
        font-size: 14px;
        margin-bottom: 16px;
        vertical-align: top;
        &:before {
            display: inline-block;
            content: "";
            width: 0;
            height: 0;
            border-top: 6px solid transparent;
            border-bottom: 6px solid transparent;
            border-left: 6px solid $details;
            margin-top: 2px;
            margin-right: 12px;
        }
    }

    &-like,
    &-message {
        display: inline-block;
        vertical-align: top;
        font-size: 13px;
        color: $info-color;
    }

    &-like {
        margin: 24px 0 0 0;
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
        margin: 24px 0 0 16px;
    }

}

@media (min-width: 960px) {

    .preview {
        &-b {
            height: 90vh;
        }
        &-image {
            max-height: 240px;
        }
        &-title-m {
            font-size: 24px;
            margin-bottom: 24px;
        }
    }

}

</style>
