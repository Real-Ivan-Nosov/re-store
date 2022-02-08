
export default class BookstoreService {

    getBooks() {
        return [
            {id: 1, title: 'Унесенные ветром',
            author: 'Маргарет Митчелл',
            price: '669 bucks',
            coverImage: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/8133200f-b8b6-446d-be8c-129456bde1de/600x900'},
            {id: 2, title: 'Отцы и дети',
            author: 'Иван Тургенев',
            price: '696 bucks',
            coverImage: 'https://img4.labirint.ru/rc/12e492c58c5a6705c373c19f1d5f4026/220x340/books49/484898/cover.jpg?1566212356'}
        ];
    }
}
