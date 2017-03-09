import {mount} from 'avoriaz';
import Contact from './Contact.vue';

describe('Contact', () => {
  let componentBuilder;
  let store;
  beforeEach(() => {
    store = jasmine.createSpyObj('store', ['dispatch']);
    componentBuilder = propsData => mount(Contact, {
      propsData,
      store
    });
  });

  it('should be a contact', () => {
    expect(Contact.name).toEqual('Contact');
  });

  describe('props', () => {
    it('should be default value', () => {
      const component = componentBuilder();

      const data = component.data();
      expect(data.id).toBeUndefined();
      expect(data.email).toBeUndefined();
      expect(data.description).toBeUndefined();
      expect(data.fullname).toBeUndefined();
    });

    it('should be special value', () => {
      const component = componentBuilder({
        info: {
          id: 123,
          email: 'a@b.com',
          description: 'about one'
        }
      });

      const data = component.data();
      expect(data.id).toEqual(123);
      expect(data.email).toEqual('a@b.com');
      expect(data.description).toEqual('about one');
    });

    it('should build a full name', () => {
      const info = {};
      const keyWithUnderline = ['first_name', 'last_name'];
      info[keyWithUnderline[0]] = 'First';
      info[keyWithUnderline[1]] = 'Last';
      const component = componentBuilder({info});

      const fullname = component.find('.card-title')[0].text();
      expect(fullname).toEqual('First Last');
    });
  });

  describe('delete', () => {
    it('should be able to be removed', () => {
      const component = componentBuilder({
        info: {id: 123}
      });
      component.find('button.close')[0].simulate('click');

      expect(store.dispatch).toHaveBeenCalledWith('deleteContact', 123);
    });
  });
});
