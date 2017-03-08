import Contacts from './Contacts.vue';

describe('Contacts', () => {
    it('should be a Contacts', function () {
        expect(Contacts.name).toEqual('Contacts');
    });

    it('should have some contacts', function () {
        expect(Contacts.data().contacts).toEqual(jasmine.any(Array));
    });
});