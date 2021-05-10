
<template>
    <article class="about-wrap">
        <h1 class="about-title">Iara Nascimento Sztybe</h1>
        <div class="container">
            <aside class="about-aside">
                <img class="about-image" src="./../../assets/images/iara.jpg" alt="foto da iara"/>
                <blockquote class="about-quote">Queria mesmo era ser mestre pokémon, mas mal consegui treinar os pombos do parque.</blockquote>
            </aside>
            <div class="about-content">
                <h2><font-awesome-icon :icon="{ prefix: 'fas', iconName: 'laptop' }" /> Profissional</h2>
                <p>Líder e Desenvolvedora especializada em front-end com 6 anos de experiência. Entusiasta de metodologias ágeis, automação, testes e códigos elegantes.</p>
                <p>Possuo inteligência emocional, empatia, ética, postura de liderança, e flexibilidade. No que se diz respeito a habilidades técnicas, possuo expertise com:</p>
                <ul>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Angular JS e Angular 2+</li>
                    <li>React</li>
                    <li>Vue</li>
                    <li>Node</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SASS</li>
                    <li>LESS</li>
                    <li>Bootstrap</li>
                    <li>Materialize</li>
                    <li>GoogleCharts</li>
                    <li>FontAwesome</li>
                    <li>REST</li>
                    <li>MongoDB</li>
                    <li>Git</li>
                    <li>Programação Funcional</li>
                    <li>Programação Reativa</li>
                    <li>Metodologias Ágeis</li>
                </ul>
                <p>Meu ambiente de trabalho ideal é transparente, descentralizado, descontraído, colaborativo, flexível e receptivo à inovação.</p>
                <h2><font-awesome-icon :icon="{ prefix: 'fas', iconName: 'user-graduate' }" /> Formação</h2>
                <p>Iniciei duas faculdades mas tranquiei ambas. A primeira foi Ciências Atmosféricas na USP e a segunda foi Análise e Desenvolvimento de Sistemas na FATEC.</p>
                <p>Pretendo fazer uma EAD de Tecnólogo em Análise e Desenvolvimento de Sistemas na Impacta.</p>
                <h2><font-awesome-icon :icon="{ prefix: 'fas', iconName: 'coffee' }" /> Pessoal</h2>
                <p>Toda vida em São Paulo. Dois irmãos por parte de mãe e dois irmãos por parte de pai. Medicada e com terapia em dia.</p>
                <p>Fã de GOT, Scrubs, Drag Race e Friends. Também gosto de livros de ficção e de animes. Assisto as mesmas coisas inúmeras vezes! Gosto de tocar violão e de jogar TCG de Pokémon e Magic. Meu rolê preferido é sair para comer e conversar com amigos.</p>
            </div>
        </div>
    </article>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserGraduate, faLaptop, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(faUserGraduate, faLaptop, faCoffee);

export default {

    name: 'About'

}

</script>

<style scoped lang="scss">

@import './../../assets/styles/geral.css';

$aside-width: 280px;

.container {
    position: relative
}

.about {
    &-wrap {
        position: relative;
    }
    &-title {
        font-size: 24px;
        padding: 160px 8px;
        margin-bottom: 140px;
        font-weight: bold;
        background-image: url('./../../assets/images/background.jpg');
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
    }
    &-aside {
        position: absolute;
        top: -200px;
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
        margin-bottom: 32px;
        h2 {
            font-size: 22px;
            margin-bottom: 16px;
        }
        p {
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 16px;
            text-align: justify;
            &:first-letter {
                margin-left: 36px;
            }
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 16px;
            li {
                margin: 0 16px 8px 0;
            }
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
            margin: 0 0 48px 0;
        }
        &-aside {
            width: $aside-width;
            display: block;
            text-align: center;
            background-color: transparent;
            top: -120px;
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
