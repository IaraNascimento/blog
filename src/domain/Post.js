
export default class Post {

    constructor (
        title = '',
        image = '',
        text = '',
        author = '',
        date = new Date(),
        id = 0
    ) {
        this.title = title;
        this.image = image;
        this.text = text;
        this.author = author;
        this.date = date;
        this.id = id;
        this.popular = 0;
        this.liked = 0;
        this.comments = [];
    }

    addPopular() {
        this.popular ++;
    }

    addComment(comment) {
        this.comments.push( comment );
    }

}
