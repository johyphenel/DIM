import { module } from 'angular';

import recordBooksModule from '../record-books/record-books.module';
import activitiesModule from '../activities/activities.module';
import loadoutBuilderModule from '../loadout-builder/loadout-builder.module';
import vendorsModule from '../vendors/vendors.module';

export default module('destiny1Module',
  [
    recordBooksModule,
    activitiesModule,
    loadoutBuilderModule,
    vendorsModule
  ]);
