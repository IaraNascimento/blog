
<template>
    <div class="container contact">
        <button class="contact-btn blog-button" @click="goBack()">back</button>
        <form class="blog-form" @submit.prevent="sendMessage(contact)">
            <label>Name</label>
            <input type="text" placeholder="name..." v-model.lazy="contact.name" />
            <label>E-mail</label>
            <input type="email" placeholder="email..." v-model.lazy="contact.email" />
            <label>Phone</label>
            <input type="phone" placeholder="phone..." v-model.lazy="contact.phone" />
            <label>Message</label>
            <textarea placeholder="message..." v-model.lazy="contact.message" />
            <vue-recaptcha class="contact-recaptcha" sitekey="6Le-V8saAAAAADbP91rACtDfa76ppLPP8BLP-_By" :loadRecaptchaScript="true"></vue-recaptcha>
            <div class="btn-wrap">
                <button class="blog-button blog-button-sm" type="submit">send</button>
            </div>
        </form>
    </div>
</template>

<script>

import VueRecaptcha from 'vue-recaptcha';
import Contact from './../../domain/Contact';

export default {

    name: 'Contact',

    components: {
        'vue-recaptcha': VueRecaptcha
    },

    data() {
        return {
            contact: new Contact()
        }
    },

    methods: {

        sendMessage(body) {
            console.log(body);
            this.contact = new Contact();
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

.contact {
    padding: 16px 16px 40px 16px;

    &-btn {
        margin-bottom: 24px;
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
