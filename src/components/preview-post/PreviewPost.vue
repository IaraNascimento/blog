
<template>
    <div class="preview" :class="{'preview-s':(size=='small'), 'preview-m':(size=='medium'), 'preview-b':(size=='big')}">
        <div class="preview-information" v-show="(size == 'medium')">
            <span class="preview-information-category">{{ post.category }}</span><span class="preview-information-date"> - {{ formatDate(post.date) }}</span>
        </div>
        <h2 :class="{'preview-title-s':(size=='small'), 'preview-title-m':(size=='medium'), 'preview-title-b':(size=='big')}">
            <p class="preview-label" v-show="label">{{ label }}</p>
            <span class="preview-title-text" @click="goToPost(post.id, 'title', size)">{{ post.title }}</span>
            <button class="preview-title-btn blog-button" v-show="label" @click="goToPost(post.id)">Keep Reading</button>
            <div  class="preview-change" v-show="(size=='big')">
                <span @click="prev()">Prev</span> | <span @click="next()">Next</span>
            </div>
        </h2>
        <img :class="{'preview-image-s':(size=='small'), 'preview-image-m':(size=='medium'), 'preview-image-b':(size=='big')}" :src="post.image"  @click="goToPost(post.id, 'image', size)" />
        <p v-show="(size == 'medium')" class="preview-text">{{ limitChars( post.text ) }}</p>
        <p v-show="(size == 'small')" class="preview-date">{{ countDays( post.date ) }}</p>
        <popularity class="preview-popularity" v-show="(size == 'medium')" :post="post" ></popularity>
    </div>
</template>

<script>

import dateFormater from './../../services/DateFormater';
import Popularity from './../popularity/Popularity.vue';

export default {

    name: 'PreviewPost',

    components: {
        'popularity': Popularity
    },

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

    mixins: [
        dateFormater
    ],
    
    methods: {

        limitChars(text) {
            if(text.length > 320) {
                return text.substring(0, 319) + '...';
            }
            return text;
        },

        countDays(date) {
            return this.s_contDaysByDate(date);
        },

        goToPost(id, target, size) {
            if((target=='title' || target=='image') && size=='big') {
                return;
            }
            this.$router.push( '/post/' + id );
        },

        formatDate(date) {
            return this.s_formatDate(date);
        },

        prev() {
            this.$emit('prev');
        },

        next() {
            this.$emit('next');
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
        min-height: 40vh;
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
            line-height: 20px;
            font-size: 14px;
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
            position: relative;
            margin-top: 40%;
            left: 10%;
            color: white;
            font-size: 32px;
            z-index: 1;

            .preview-title-text {
                display: inline-block;
                margin-bottom: 32px;
                max-width: 600px;

                &:before, &:after {
                    content: ' " ';
                }
            }

        }

        &-btn {
            display: block;
            margin-bottom: 24px;
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
        margin-bottom: 4px;
        margin-top: 8px;
    }
    
    &-label {
        font-size: 13px;
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

    &-popularity {
        margin-top: 24px;
    }

    &-change {
        margin-bottom: 32px;
        font-size: 16px;
        opacity: .8;
        span {
            font-size: 13px;
            cursor: pointer;
            opacity: .8;
            transition: all .4s ease;
            padding: 4px;
            &:hover {
                opacity: 1;
            }
        }
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
        &-title {
            &-m {
                font-size: 24px;
                margin-bottom: 24px;
            }
            &-b {
                position: absolute;
                top: 40%;
                margin-top: 0;
            }

        }
    }

}

</style>
