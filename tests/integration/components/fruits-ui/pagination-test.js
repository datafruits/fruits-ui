import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | fruits-ui/pagination', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<FruitsUi::Pagination />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <FruitsUi::Pagination>
        template block text
      </FruitsUi::Pagination>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
