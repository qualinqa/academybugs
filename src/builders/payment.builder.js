// добавление платежной информации
import { faker } from '@faker-js/faker';

export class PaymentBuilder {
    addFirstName() {
        this.firstName = faker.person.firstName();
        return this;        
    }

    addLastName() {
        this.lastName = faker.person.lastName();
        return this;
    }

    addAddress() {
        this.address = faker.location.streetAddress();
        return this;
    }

    addCity() {
        this.city = faker.location.city();
        return this;
    }

    addZipCode() {
        this.zipCode = faker.location.zipCode();
        return this;
    }

    addPhone() {
        this.phone = faker.phone.number();
        return this;
    }

    generatePayment() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            address: this.address,
            city: this.city,
            zipCode: this.zipCode,
            phone: this.phone,
        }
    }
}