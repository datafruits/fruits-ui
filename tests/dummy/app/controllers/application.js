import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  queryParams = ['page'];
  @service router;
  totalPages = 800;
}
