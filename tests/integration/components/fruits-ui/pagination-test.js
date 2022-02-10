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

  test('it shows the last page', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.page = 100;
    this.totalPages = 100;
    await render(
      hbs`<FruitsUi::Pagination @page={{this.page}} @totalPages={{this.totalPages}} route="application" />`
    );

    assert.dom(this.element).hasText('« 1 2 ... 96 97 98 99 100 »');
  });

  test('it shows a page in the middle', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.page = 66;
    this.totalPages = 100;
    await render(
      hbs`<FruitsUi::Pagination @page={{this.page}} @totalPages={{this.totalPages}} route="application" />`
    );

    assert.dom(this.element).hasText('« 1 2 ... 64 65 66 67 68... 99 100 »');
  });
});
