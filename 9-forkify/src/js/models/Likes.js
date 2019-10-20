import uniqid from 'uniqid';

export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(recipe) {
        const like = {
            id: recipe.id,
            img: recipe.img,
            title: recipe.title,
            author: recipe.author
        };
        this.likes.push(like);
        this.persistData();
        return like;
    }

    removeLike(id) {
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1);
        this.persistData();
    }

    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getNumLikes() {
        return this.likes.length;
    }

    persistData() {
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }

    readStorage() {
        const storage = localStorage.getItem('likes');
        if (storage) {
            this.likes = JSON.parse(storage);
        }
    }
}