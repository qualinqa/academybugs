// создание пользователя (регистрация)
import { faker } from '@faker-js/faker';

export class DataUserBuilder {
    addFirstName() {
        this.firstName = faker.person.firstName();
        return this;
    }

    addLastName() {
        this.lastName = faker.person.lastName();
        return this;
    }

    addEmail() {
        this.email = faker.internet.email();
        return this;
    }

    addPassword() {
        this.password = faker.internet.password();
        return this;
    }

    generateDataUser() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password
        };
    }
}