// добавление комментария к товару
import { faker } from '@faker-js/faker';

export class CommentBuilder {
    addCommentText() {
        this.commentText = faker.lorem.sentence(3);
        return this;        
    }

    addCommentName() {
        this.commentName = faker.person.fullName();
        return this;
    }

    addCommentEmail() {
        this.commentEmail = faker.internet.email();
        return this;
    }

    generateComment() {
        return {
            text: this.commentText,
            name: this.commentName,
            email: this.commentEmail,
        }
    }
}