var lista_filmes = ['https://br.web.img2.acsta.net/pictures/19/07/23/20/57/4907896.jpg',
                    'https://images-na.ssl-images-amazon.com/images/I/91382RVTr3L.jpg',
                    'https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg',
                    'https://images.justwatch.com/poster/8537318/s718',
                    'https://hbomax-images.warnermediacdn.com/2021-11/hp_03_0.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com&w=1902',
                    'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/32/20224832.jpg',
                    'https://br.web.img3.acsta.net/pictures/21/04/14/19/06/3385237.jpg',
                    'https://i.pinimg.com/originals/bb/61/11/bb61115970e57c1eaf31479f5b9441ff.jpg']

// for (let filmes = 0; filmes < lista_filmes.length; filmes++) {
//     document.write(`<img class="logo_filmes" src="${lista_filmes[filmes]}">`);
// }

for (let filmes of lista_filmes) {
    document.write(`<img class="logo_filmes" src="${filmes}">`);
}