
<template>
    <article class="container about-wrap">
        <h1 class="about-title">Iara Nascimento Sztybe</h1>
        <aside class="about-aside">
            <img class="about-image" src="./../../assets/images/iara.jpg" alt="foto da iara"/>
            <blockquote class="about-quote">Queria mesmo era ser mestre pokémon, mas mal consegui treinar os pombos do parque.</blockquote>
        </aside>
        <div class="about-content">
            <p>Líder e Desenvolvedora especializada em front-end com 6 anos de experiência. Entusiasta de metodologias ágeis, automação, testes e códigos elegantes. Meu ambiente de trabalho ideal é transparente, descentralizado, descontraído, colaborativo, flexível e receptivo à inovação.</p>
            <p>Fã de GOT, Scrubs, Drag Race e Friends. Também gosto de livros de ficção e de animes. Assisto as mesmas coisas inúmeras vezes! Gosto de tocar violão e de jogar TCG de Pokémon e Magic. Meu rolê preferido é sair para comer e conversar com amigos.</p>
        </div>
    </article>
</template>

<script>

export default {

    name: 'About'

}

</script>

<style scoped lang="scss">

@import './../../assets/styles/geral.css';

$aside-width: 280px;

.about {
    &-wrap {
        position: relative;
    }
    &-title {
        font-size: 24px;
        padding: 160px 8px;
        background-image: url('./../../assets/images/background.jpg');
        margin-bottom: 140px;
        background-repeat: no-repeat;
        background-size: cover;
        font-weight: bold;
    }
    &-aside {
        position: absolute;
        top: 280px;
        left: 0;
        width: calc(100% - 24px);
        display: flex;
        justify-items: center;
        align-items: center;
        padding: 12px;
        background-color: rgba(255, 255, 255, .8);
    }
    &-image {
        width: 160px;
        border-radius: 80px;
        margin-left: 8px;
    }
    &-quote {
        display: inline-block;
        margin: 0 0 12px 12px;
        line-height: 18px;
        font-size: 16px;
        &:before, &:after {
            content: ' " ';
        }
    }
    &-content {
        p {
            line-height: 20px;
            margin-bottom: 8px;
        }
    }
}

@media (min-width: 960px) {
    .about {
        &-wrap {
            padding-bottom: 80px;
        }
        &-title {
            text-align: center;
            font-size: 32px;
            margin: 0 0 32px 0;
        }
        &-aside {
            width: $aside-width;
            display: block;
            text-align: center;
            background-color: transparent;
        }
        &-image {
            margin-bottom: 20px;
        }
        &-quote {
            font-size: 24px;
            line-height: 32px;
        }
        &-content {
            padding-left: calc(#{$aside-width} + 48px);
            width: calc(100% - #{$aside-width} - 48px);
            p {
                font-size: 18px;
                line-height: 24px;
                margin-bottom: 24px;
            }
        }
    }
}

</style>
