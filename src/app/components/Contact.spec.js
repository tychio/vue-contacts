import Contact from './Contact.vue';

describe('Contact', () => {
  it('should be a contact', () => {
    expect(Contact.name).toEqual('Contact');
  });

  it('should has props info', () => {
    expect(Contact.props).toContain('info');
  });

  it('should has an instance of People with default value', function () {
    const data = Contact.data();

    expect(data.people.id).toEqual(0);
    expect(data.people.firstName).toEqual('');
    expect(data.people.lastName).toEqual('');
    expect(data.people.email).toEqual('');
    expect(data.people.description).toEqual('');
  });

  it('should has an instance of People with setting value which is passed by info', function () {
    Contact.info = {
        id: 1,
        first_name: 'John',
        last_name: 'Smith',
        email: 'js@gmail.com',
        description: 'co-worker'
    };
    const data = Contact.data();

    expect(data.people.id).toEqual(1);
    expect(data.people.firstName).toEqual('John');
    expect(data.people.lastName).toEqual('Smith');
    expect(data.people.email).toEqual('js@gmail.com');
    expect(data.people.description).toEqual('co-worker');
  });
});
