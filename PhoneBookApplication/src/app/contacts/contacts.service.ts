import { Contact } from './contact';
import { stringify } from '@angular/compiler/src/util';

export class ContactsService {
    contacts: Contact[];
    searchedContacts: Contact[];
    constructor() {
        this.contacts =[];
        this.contacts.push(new Contact('Kartik', 'Chawla', '9582225801'));
        this.contacts.push(new Contact('Ganesh', 'Dhingra', '9999999999'));
        this.contacts.push(new Contact('Jai', 'Kharayat', '1555555556'));
        this.contacts.push(new Contact('Khyati', 'Dhingra', '987654321'));
        this.contacts.push(new Contact('Test', '1', '0123456789'));
        this.contacts.push(new Contact('Test', '2', '2341234568'));
    }
    getContacts(): Contact[] {
        return this.contacts;
    }
    getSearchedContacts(name?: string): Contact[] {
        this.searchedContacts = [];
        if (name === undefined)
            return this.contacts;
        this.contacts.forEach(contact => {
            if ((contact.firstName + " " + contact.lastName + " " + contact.phoneNo).toLowerCase().includes(name))
                this.searchedContacts.push(contact)
        });
        return this.searchedContacts;
    }
    addContact(contact: Contact): void {
        this.contacts.push(contact);
    }
    sortContact(sortOn: number, sortType: number): void {
        this.contacts.sort((a, b) => {
            if (sortOn == 1) {
                if (sortType == 1)
                    return (a.firstName + " " + a.lastName).toLowerCase() > (b.firstName + " " + b.lastName).toLowerCase() ? 1 : -1;
                else
                    return (a.firstName + " " + a.lastName).toLowerCase() > (b.firstName + " " + b.lastName).toLowerCase() ? -1 : 1;
            }
            else {
                if (sortType == 1)
                    return a.phoneNo > b.phoneNo ? 1 : -1;
                else
                    return a.phoneNo > b.phoneNo ? -1 : 1;
            }
        });
    }
    updateContact(cont: Contact, updatedContact: Contact): void {
        this.contacts.forEach( (contact, index) => {
            if (contact === cont)
                this.contacts[index] = updatedContact;
        });
    }
    deleteContact(cont: Contact): void {
        this.contacts.forEach( (contact, index) => {
            if (contact === cont)
                this.contacts.splice(index, 1);
        });
    }  
}