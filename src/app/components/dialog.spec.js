import {mount} from 'avoriaz';
import Dialog from './Dialog.vue';

describe('Dialog', () => {
  let componentBuilder;
  beforeEach(() => {
    componentBuilder = propsData => mount(Dialog, {propsData});
  });

  it('should be Dialog', () => {
    expect(Dialog.name).toEqual('Dialog');
  });

  describe('props', () => {
    it('should have id', () => {
      const component = componentBuilder();
      expect(component.hasAttribute('id', 'modal_id')).toBeTruthy();
    });

    it('should not be display', () => {
      const component = componentBuilder();
      expect(component.hasClass('show')).toBeFalsy();
      expect(component.hasStyle('display', 'none')).toBeTruthy();
    });

    it('should have title', () => {
      const component = componentBuilder();
      expect(component.find('h5.modal-title')[0].text()).toEqual('Modal');
    });
  });

  describe('method', () => {
    let handlers;
    beforeEach(() => {
      handlers = jasmine.createSpyObj('handlers', ['closeHandler', 'actionHandler']);
    });

    describe('close', () => {
      it('should be closed on clicking icon at right top corner', () => {
        const component = componentBuilder(handlers);

        component.find('button.close')[0].simulate('click');

        expect(handlers.closeHandler).toHaveBeenCalled();
      });

      it('should be closed on clicking close button', () => {
        const component = componentBuilder(handlers);

        component.find('button.close_button')[0].simulate('click');

        expect(handlers.closeHandler).toHaveBeenCalled();
      });
    });

    describe('action', () => {
      it('should be do action on clicking main button', () => {
        const component = componentBuilder(handlers);

        component.find('button.do_button')[0].simulate('click');

        expect(handlers.actionHandler).toHaveBeenCalled();
      });
    });
  });
});
