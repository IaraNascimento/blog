
export default class Post {

    constructor (
        title = '',
        image = '',
        text = '',
        author = '',
        date = new Date()
    ) {
        this.title = title;
        this.image = image;
        this.text = text;
        this.author = author;
        this.date = date;
    }

}
