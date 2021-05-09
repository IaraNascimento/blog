
<template>
    <div class="container contact">
        <button class="contact-btn blog-button" @click="goBack()">back</button>
        <form class="blog-form" @submit.prevent="sendMessage(contact)">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="name..." v-model.lazy="contact.name" />
            <label for="emal">E-mail</label>
            <input type="email" id="email" placeholder="email..." v-model.lazy="contact.email" />
            <label for="phone">Phone</label>
            <input type="phone" id="phone" placeholder="phone..." v-model.lazy="contact.phone" />
            <label for="message">Message</label>
            <textarea class="contact-message" id="message" placeholder="message..." v-model="contact.message" maxlength="280" />
            <p class="contact-message-counter">{{ 280 - contact.message.length }}</p>
            <vue-recaptcha class="contact-recaptcha" sitekey="6Le-V8saAAAAADbP91rACtDfa76ppLPP8BLP-_By" :loadRecaptchaScript="true"></vue-recaptcha>
            <div class="contact-errors" v-show="(errors.length > 0)">
                <font-awesome-icon class="contact-errors-icon" :icon="{ prefix: 'fas', iconName: 'exclamation-circle' }" />
                <span class="contact-errors-text">
                    <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
                </span>
            </div>
            <div class="btn-wrap">
                <button class="blog-button blog-button-sm" type="submit">send</button>
            </div>
        </form>
    </div>
</template>

<script>

import VueRecaptcha from 'vue-recaptcha';
import Contact from './../../domain/Contact';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faExclamationCircle);

export default {

    name: 'Contact',

    components: {
        'vue-recaptcha': VueRecaptcha
    },

    data() {
        return {
            contact: new Contact(),
            errors: []
        }
    },

    methods: {

        sendMessage(body) {
            this.errors = [];
            if (!body.name || body.name.length <= 1) {
                this.errors.push('Name must be at least two characters.');
            }
            if (!body.email || !this.validEmail(body.email)) {
                this.errors.push('E-mail must be valid.');
            }
            if (this.errors.length === 0) {
                this.contact = new Contact();
            }
        },

        validEmail(email) {
            const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regexEmail.test(email);
        },

        goBack() {
            this.$router.push('/');
        }

    }

}

</script>

<style scoped lang="scss">

@import './../../assets/styles/geral.css';
@import './../../assets/styles/form.css';
@import './../../assets/styles/button.css';

$alert: #FF0000;

.contact {
    padding: 16px 16px 40px 16px;

    &-btn {
        margin-bottom: 24px;
    }

    &-errors {
        font-size: 14px;
        margin-bottom: 24px;
        color: $alert;
        display: flex;
        &-icon {
            font-size: 24px;
        }
        &-text {
            margin: 6px 0 0 8px;
            p {
                margin-bottom: 8px;
            }
        }
    }

    &-message {
        margin: 0 0 8px 0;
        &-counter {
            margin: 0 0 16px 0;
        }
    }

    &-recaptcha {
        margin-bottom: 24px;
    }
}

.btn-wrap {
    display: inline-block;
    width: 100%;
    text-align: right;
}

</style>
