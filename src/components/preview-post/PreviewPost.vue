
<template>
    <div class="preview" :class="{'preview-s':(size=='small'), 'preview-m':(size=='medium'), 'preview-b':(size=='big')}">
        <h2 :class="{'preview-title-s':(size=='small'), 'preview-title-m':(size=='medium'), 'preview-title-b':(size=='big')}">
            <p class="preview-label" v-show="label">{{ label }}</p>
            <span class="preview-title-text">{{ post.title }}</span>
            <button class="preview-title-btn blog-button" v-show="label" @click="goToPost(post.id)">Keep Reading</button>
        </h2>
        <img :class="{'preview-image-s':(size=='small'), 'preview-image-m':(size=='medium'), 'preview-image-b':(size=='big')}" :src="post.image" />
        <p v-show="(size == 'medium')" class="preview-text">{{ limitChars( post.text ) }}</p>
        <p v-show="(size == 'small')" class="preview-date">{{ countDays( post.date ) }}</p>
    </div>
</template>

<script>

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

        goToPost(id) {
            this.$router.push( '/post/' + id );
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
        height: 90vh;
        background-color: black;
    }
    
    &-title {
        
        &-s {
            @include position();
        }
        
        &-m {
            text-transform: uppercase;
            font-size: 24px;
            font-weight: bold;
            width: 100%;
            text-align: center;
            margin-bottom: 24px;
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

}

@media (min-width: 960px) {

    .preview {
        &-image {
            max-height: 240px;
        }
    }

}

</style>
