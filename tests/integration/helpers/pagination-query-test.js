import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | pagination-query', function (hooks) {
  setupRenderingTest(hooks);

  // TODO: Replace this with your real tests.
  skip('it renders', async function (assert) {
    this.set('paramName', 'tracksPage');
    this.set('page', '3');

    await render(hbs`{{pagination-query this.paramName this.page}}`);

    assert.dom(this.element).hasText('');
  });
});
