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
      expect(component.find('h6.card-subtitle a')[0].text()).toEqual('a@b.com');
      expect(component.find('.card-text')[0].text()).toEqual('about one');
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

  describe('edit', () => {
    it('should trigger edit event', () => {
      const component = componentBuilder({
        info: {id: 123}
      });
      const editModal = jasmine.createSpy('edit');
      component.vm.$on('edit', editModal);
      component.find('button.edit_button')[0].simulate('click');

      expect(editModal).toHaveBeenCalled();
    });
  });
});
