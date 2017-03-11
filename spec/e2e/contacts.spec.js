import {url} from '../../conf/env.conf';
import { Selector, ClientFunction } from 'testcafe';

fixture `Contacts page`
  .page `${url.app}`;


test('should be root', async t => {
  const getWindowLocation = ClientFunction(() => window.location);
  const location = await getWindowLocation();

  await t
    .expect(location.pathname).eql('/')
});

test('should be able to create', async t => {
  const modal = Selector('#contact_modal');
  const list = Selector('.contacts_list').find('li');
  await t
    .click('.create_button')
    .typeText(modal.find('.field_first_name'), 'nhoJ')
    .typeText(modal.find('.field_last_name'), 'htimS')
    .typeText(modal.find('.field_email'), 'tset@gmail.com')
    .typeText(modal.find('.field_description'), 'em tuoba')
    .click('.save_button');
  await t
    .expect(list.nth(-1).textContent).contains('nhoJ htimS tset@gmail.com Edit em tuoba')
});
