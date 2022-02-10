import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | fruits-ui/pagination', function (hooks) {
  setupRenderingTest(hooks);

  test('it shows the first page', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.page = 1;
    this.totalPages = 100;
    await render(
      hbs`<FruitsUi::Pagination @page={{this.page}} @totalPages={{this.totalPages}} route="application" />`
    );

    assert.dom(this.element).hasText('1 2 3 4 5 ... 100 »');
  });
});
