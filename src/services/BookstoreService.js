
export default class BookstoreService {

    data = [
        {
            id: 1, title: 'Унесенные ветром',
            author: 'Маргарет Митчелл',
            price: 669,
            coverImage: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/8133200f-b8b6-446d-be8c-129456bde1de/600x900'
        },
        {
            id: 2, title: 'Отцы и дети',
            author: 'Иван Тургенев',
            price: 696,
            coverImage: 'https://img4.labirint.ru/rc/12e492c58c5a6705c373c19f1d5f4026/220x340/books49/484898/cover.jpg?1566212356'
        }
    ]

    getBooks() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    rej(new Error('Oops'))
                } else {
                    res(this.data)
                }
            }, 700)
        })
    }
}
