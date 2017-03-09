import {mount} from 'avoriaz';
import Contact from './Contact.vue';

describe('Contact', () => {
  it('should be a contact', () => {
    expect(Contact.name).toEqual('Contact');
  });

  it('should has props info', () => {
    expect(Contact.props).toContain('info');
  });

  it('should has an instance of People with default value', () => {
    const data = mount(Contact).data();

    expect(data.people.id).toEqual(0);
    expect(data.people.firstName).toEqual('');
    expect(data.people.lastName).toEqual('');
    expect(data.people.email).toEqual('');
    expect(data.people.description).toEqual('');
  });

  it('should has an instance of People with setting value which is passed by info', () => {
    const data = mount(Contact, {
      propsData: {
        info: {
          id: 1,
          firstName: 'John',
          lastName: 'Smith',
          email: 'test@gmail.com',
          description: 'about me'
        }
      }
    }).data();

    expect(data.people.id).toEqual(1);
    expect(data.people.firstName).toEqual('John');
    expect(data.people.lastName).toEqual('Smith');
    expect(data.people.email).toEqual('test@gmail.com');
    expect(data.people.description).toEqual('about me');
  });
});
