import Contacts from './Contacts.vue';

describe('Contacts', () => {
  it('should be a Contacts', () => {
    expect(Contacts.name).toEqual('Contacts');
  });

  it('should have some contacts', () => {
    expect(Contacts.data().contacts).toEqual(jasmine.any(Array));
  });
});
