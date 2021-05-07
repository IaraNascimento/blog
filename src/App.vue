
<template>
    <main id="app">
        <router-view></router-view>
    </main>
</template>

<script>

import { LoremIpsum } from 'lorem-ipsum';
import Post from './domain/Post';

export default {

    name: 'App',

    created() {

        this.$store.replaceState({ ...this.$store.state, posts: [
            new Post(
                'Game Of Thrones',
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFRgVFhYYGBUYGBoYGBocFRgaGRoVGhoZGRgYGRocIS4lHB4rHxgaJjgmKy8xNTY1GiQ7QDszQC40NTEBDAwMEA8QGBERGDEhGB0xNDE0MTQxMTExMTQ0PzQxNDE0NDQ0MT80ND8xNDE/ND8xND8xPzQxMTExNDQxNDE0Mf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EAD8QAAICAQMDAwIDBQQHCQAAAAECABEDBBIhBTFBIlFhBoETMnEUQpGhsVJi0fAVJDNjkqLBI3KTsrPC0uHx/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABcRAQEBAQAAAAAAAAAAAAAAAAARASH/2gAMAwEAAhEDEQA/APxmIiAiIgIiICJ6VbntU5gcokv8GxODYiIHOJJwaNn7CczjIO0ijLByn2p6ZaNGGkHkCfdsk6fT7hdgc1+s+OoXsRXn/P3gRqip2ZQPN/pPKqT259+Cf6QOU+1PRSufmp0RCR8QOESQ+mYCyJHgIiewsDxPoE7LjMlJpTtupYIG2Nkt9N0t2G7bxPGbp7DxEFVU+7DLfD0+fcmkoRBTVPkszozUhZsJWQcYiICIiAiIgIiICIiAiIgWGBRxJTaWxYldo25qTk1RRq8TUR902mYmpNw6ABhZH6f5/UTurKV3r38iSsbBgJRP0nTlNUAK+P6SF9Q9NRRu4D+B5b9BPGLVOjFd3Nix4Kk/I71Lfp66djvYG6ZSSzGlHDKLHgXXnjiB+f6lCQCVINdq8e8i3NP1YjeVZAoBsVyXBJF3xxQ7dxM7qFW7W9vzAk6POt03bxVj2sWOQa8z7lKHhd5AoLdX8g1+kh4b3ChZsV+viWyaIhwGSqskqWbnwCy/lN0fHfuJFQMOL1bV5Y8DjvfFV72ZP/0U5f1nb2B+TXAWh9r8SQjJu9QYhvS4Kg81Z55O4cm/ibPpXSx+Ahd1CIpK2tBG/MzPuHq48iqqSDMr0JfzbXI5oBQCdvBVjff2oC6MkN0BiaAbiiAUJtTXceav3ua7omDG2MBGZ+Ls7u1kg8jt7e8tsKBFLMqoNwAJP5vcmhxwPMqPz3qXRwiEG7r+X9Zl8mi+JtvqzV1kKkDgcfIMywyBjR7dpcxN1XabSWfiTTowfEnabRluFUgfJ/6yR+xMLC9xxySfnn+MQqt02isgH7zQ6PpDuwCpYBF+PT5P2nfQ6VF22LYEH7/5M3GhxBMZcLGqql6UqrQAAEpeqaRL2AgMQSB5IFWf5j+MtNf1M8gSr5Y7iZIVV6jRbFJJAHuZH0+kJ7y0y5Vc7a4PfiQ+pa0J6VEsHjNhVRUousBaod5ZHPalj3lBrHLGIIETqcLe08FTJCvMSTg0jP2E6ZNCV/NEKhROjJOcypET7UD5PQFyz0ej3jtcnJ0wAXXbxLEcul9HXIvPeOpdEONbrkS20edUK/Mu+qMHxWBZEuYPzvBh/jPTo3ciTmABl/ptAubGCKscGaGewaripa6fLaHbw3+eZH6v0xcY4/MOZW4MxWvcQystTkY0DV/5upddPQ7KQKz3+Yst4+OHKknee3f5Mq8LpmAShutfHNFgDVfEv9d0/BgG9C3oBDHGobazBSyux4HYV57ya0z31Jo33hQoYtzuG57IajT+1/eUbJS1zZNEc0pU8g33mwx5yUvM6IpUNjyEM7lshA3LR9BtbY/1jqCafd+HiJy5iadjncYzkWgWAcHeCG5F8bVo0ZBl9NpkYc2K5NDuv5eeDXq+e1+alx07pgBDrkJDbgdrXYFgEg/bj+k86bp7I207tpY8AsLr1bQ1AeAefeaRcCDCHQAMGIrbtNdyW739uDGYKb/R5ZhdhasbVABB/eBA5J/WbXoPTlOmbE/5CjIy7uSKoEEdj/jI+uxqUTZQAWvSoBsdr44E7dG6gqY3DctsIv5CmUTvobQKuAn1EnYpLNdKmNFCj2AO7j5l1+Nibclq221ZTRo+QQZTfQeQHTup8ZGHI8bUsSs+odU+LKyk3u/I1CwCT6QQL7UK57fMzncxd5us39cgNnLKQeO3sO38OJlsC24E1uuwq69+a+8h6boD7d/v2nRnWz+m+gI+FTmCN8AemvHB8zl1TQ4y7IiL6gASp9RHPBrtPfSuo7MaYyfUBRl50MY95dwPiZVmtJ0Z0YWpodpsdSqpiVCQGYGge5Nc17y4YISvp3WTyKpaBNt8cV+pEpervucL7Hj4ij836zk2PV8zjhzE9+0v/qTp+NHDkGqsnirHjvMXreoWfTwJR21esUNxKzU5S7T7pk3uA3YzT4uhCrSrri+1+L+IZZtMZ7HiNB078TJt8S36oVD7RXHBqWX0zjH4gNfJgS8H0km3c4oVMv1HoyK5Cji5+l9W6ooG37SmbSrkYCh7mStMgmMIu1Ftj8SNk6W7m24E/RMPSFHIX7yq6qgFiBh9Zo0QUBzKV05mq1+mIBJmY1H5jM6qJPY548zxPSqT2kFh07VMjC5qsmdWxl171Mvpc4HDrYmg0WpUL6KI8iaRSYtQHbZdHwfmW+k1zp6H7SDrOlbiXxHnvt/wkf8AHc+l15Eoum6auWyjAHvXzHSMr6d6cEL/ACM+9Kwbl3bqlxrup4/wTjZQT+6fNyjr1XCmbEdtFu/wBzXfuf8AGZLHpdy7CKYeTwft7zuuuZF4PFzrm1QdQQBvB7/EMqrTaV1yAUe/NEDjtNYHK42RsTMptWJdAr2u4NZB55rgH5mf1hsAlb+bPEkYtX6Al7wa242Vdo/vElTRs3cmtJ2bSONuBQznabCFfxMYFsnpY3tvwCOOwHmvTAUzKmU7lJB5YEqb7rtNhaAP2Em/6UZHKoiqyoqcM7Fk7kAittWSOa8SBrXwl9+Ndm71FCQRyb3Cjx7V4kg2un0OF32XuDEFdodgqMObc8EEKPPBr3E0Ot+nsK4Vuxs5SiRxXAY36pn/AKa62m2nKlvHABA44/lLN+ou7bL9LHaosVZ7V58+ZRQNqyLueumIHGRvARufF0akrrP0zqbtUDKb5GRAD/xMDOeiwPhQrkKIp7+sMxHwEsmUevpXVsmnfyxckf8ACsr/AKm1ZfaebE2mm6VjbTrmxhESjag+bN9/PaZjXdPLObUkf90/4RmTE3brO6fG7mr49zNNptUNmwkDaOPahfP+faVuv034YUgEWtgUQa/Q/pKdtYysTKjxr85GQsDfsfg+00nQurk4aJ5B7zD6/IWO6+8kdLzsKAal8j/rcD9g6Jq323civqlfI7By1UhWqUMBZKkj1XuAJsj0/rKvQdUVMYqc9f1jjdcy0rPrZ2ZRVmj2Ey2j0P7z9vaWWv129vecnY2N35RKJXRNGr5bIpBL7rGvRFKJ3quJmH6lyAnAkvpWtVcu9xurtfa4HPQdJfIS7+kfPcy0w6lMAITk+8k6jOMpJB2zPah9jHzUCXqcrH/tHNDwPeWX0zrN7m+3k+wlEuny6ggflQeZoOn4seNCgAIYU1+R5EguurdXCLtWZbPmZvU3AkzWa7GDVW0zuv1RoAk0BVk8mvf5gcuqZywPtMtlbkyy1mssUJUO3MzqvE9IaInmJBcI6MKucnXaPQ1H2lbOiZiJrNRadM6iUJDS70+XE4O+uZk8moLeJK0xdhxQUGrLBRftbEWfgSi+1OHZ/sya8yvbVMTRklcj41DMVINgU6t2q+x47iQsuoVjY4gShj3C64kJyUPBlm27FaNYYorUf7LqGU/cMDKTNuIMoscesDoQQL9/5c+87aXFfIJvjg0OJXfgNicpkUqwAsGuzKGU8e4YH7yUyum0sCN6b0+ULMob9CVb+F+RA851cP6ib4uj7eD78T5lJ97+066PSZdRkXGg3O5pQWVbPsCxAv7yRm6O+NVYlCGv8uRMnarvYxruO8CHpcjBvSOTx25mn0OoycKwPyJSYEKNZHzLDT9SHPMCV1XqYAO/1E+/P8zI301lJOSuOMZHPvnxA/yJH3lNr3Ykk9iZZfTLqhysTwEx3+n4+In+kMtz13Usmmw1+8CD/H/6mF1GsNn3ms+qNUG0iMoNYnCOf77UwH8D/WYrSo+d1x4wGd+FXcq2e9AsQLr5lo9NrWr38fYcAThkLmdun6N8uRcSAM7EhRvQAkcmmYhT2PmdG213HeuCDf6EdxFFZmxErOWnYoe8tE6Xmdd6bNhfZbZsWMbyNwSncGyAT9pX9Q0mTG7I6MrqSrKRyCPEgs8fUfTVycj78Y5mX0mHJkbYilmomuAAoFlmJoKoHckgCXebpGqxY9zIpQIuRimXHk243/I7BGJCH+1VfMjTqMqJ4s+8rdbqy7UJwbMfeNTpcmMrvUqXRHW/3kcbkcHyCD/UdxAkafFfyZIbJt48zjgLJtZ6p13KQ6ta7it+kmvUrDmuxnREORgqUWNkAsq2FBY8sQOwJ+0UStPnduxMs8C41onk15lJ+0lAB6fULBV0ce3dSQP0kZ87M3HgX3AAHuSeAIGhfqioCBK/Fq2LEk0DKTUahlamr34YEEH5EPrjUC+fKi83cqNfqw0rsurYyI2QmTR6zOSZxgmJlSIiAiIgSMOVR3UGWWoI/CwuB6NrIf7uUOzEH2JUqf0HxKWSNPq3SwrEBvzDurfqp4P3lqRNzgLiR9zHeziqFApt5u+b3D+E89NxK+RAx9HLP8Y0BZ6+dqmvmpDzahmoE8C6AACi+9AcC4wahlDBTW9drcDlbsiz2HAlpGk67nGfCmoVyzozYsp27SFctkw8WeKORQf7gEo1ylqQC2b0j9TwJy0+sdFdFYhcgAdaBDBTa2D7HmcsGZkYMpplIYGgaI5Bo8RSN713TDWu2W9rabO+DUsPGlVnbDm449Kq6fqqDzKz6m1u9NJqK2hsOTGqjsq4tRlGNeP7KMq/aZl9XkJcljeT8/jd6g/qA7+oA/qJ6ya7I2NcTNeNCxRSB6SxBajViyBfPiKRpvorU3rtL85UueRrcbqAiOgF7t7h77VRCLXnij+szfT9fkwZFyY2KOptWABIPaxfmd9T1bLkrewNEmgiILarJCKLJocmKRptFiXI6Yy1b3VAe9bmA4Hk89pz1GLAcYdMbo4wLn5csGH7U2nZGB7NW0grXIbjkVnF1Z4o0fcGiCOxB8GStX1fPmpXcv2FbVF+pmG7aAWO53PN8sT3MUiX9SbEzvjQLtR3X0szGldlG/cOGpea45nLSajaHH9pVH8MiH/pOfXR/rOpPvnzf+o9TgnHfzX9RFG165qf9RzJ/a1OM/8ADjT/AOUovosn9v0vkfij/wArSZ1rIDpnH++/9mKZfS658Th8bFHX8rCrU9rF9j8y7o1v0Xq8B1unVMDqxc0x1BcA7G7rsF/xlGjUAT7SFpOpZMTjLjbZkBJVgq2CRRIFUOCfHmcH1BJJPn2AA+wHAkpGr07Ym0LDI7In7bjG9MQyUDhybiVLLwBZ4vt2kD6ubKuryHJXr2sjK25HwbQuLIjfvqUVefcHt2lMvUMgxnCG/wCyL7yu1fz1tDXV3Vi77Eydg6wj6f8AZtQrMuO20+RaL4iTbJTEbsbd9tijyPMUid0hA+k1u3nIowOQPzfs6u/4tDuQHOJm+AD4l7pdRs1Wjdv9mOmp+N7HB+BlDhvgkqP1K/EwWj1j4nGTGzI6n0sp2kePHgjgjsZL6h17UZwFyZCyhVWgqINqWVUhVFqCSQDwIpEAZCAL9psH6pjybdJqW2oMWn/AzEWdPkbT4rDf2sLH8y+D6hMWTOmq1LO25zbUBdAcKAqjgDsAB9opFv8AUOmyYGw4sg2smIggGwQc+dlZT5Uggg+QRPP03lH7QgPIC5Sf/BySoy6h3272J2qEWze1ASQo+BZ4n3Sat8bB0bawsAgCwCKNX8EiKR1fKnBQMoqjuYMb+CFXiq4qSun6wKSzruQrtdbq0JB4P7rWAQfcSBqNUz1uI4ugFVQL78KAL4HPxPmDUul7TwwpgQGBF3yGBHcSUiZ1HEqvSsWQqrISKbawsBh7jt9pDfL4njJlLEkmyf8A8/pOUVXpmueYiQIiICIiAiIgIiICIiAiIgIiICIiB9DTqHnGIEhMkkHKJX3OoeUaHqWe8Lj/AHt/8uOZ/dJ2pzWjD+/f/Kn+ErDGjqGnzdOdxcD2zT4WniJB6DT5c+RA+3PkRAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREDs78EfN/yH+E4xEBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED/9k=',
                new LoremIpsum().generateSentences(3),
                'iara nascimento sztybe',
                new Date('05/01/2021'),
                1
            ),
            new Post(
                'Friends',
                'https://i.ibb.co/C6GmthN/viagensdatalita-friends-seriadofriends-FRIENDS-s-rie-netflix-seriado-warner-seriado-friends25anos.jpg',
                new LoremIpsum().generateSentences(3),
                'iara nascimento sztybe',
                new Date('05/02/2021'),
                2
            ),
            new Post(
                "RuPaul's Drag Race",
                'https://upload.wikimedia.org/wikipedia/pt/b/ba/RuPaulsDragRaceSeason11.jpg',
                new LoremIpsum().generateSentences(3),
                'iara nascimento sztybe',
                new Date('05/03/2021'),
                3
            ),
            new Post(
                'Scrubs',
                'https://mixdeseries.com.br/wp-content/uploads/2014/07/scrubs-03-1.png',
                new LoremIpsum().generateSentences(3),
                'iara nascimento sztybe',
                new Date('05/04/2021'),
                4
            )
        ]});
    }

}

</script>

<style lang="scss">
</style>
