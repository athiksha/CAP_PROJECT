import cds from '@sap/cds';

export default class CatalogService extends cds.ApplicationService {
  async init() {

    this.before('CREATE', 'Products', req => {
      if (req.data.price < 0) {
        req.error(400, 'Price must be 0 or greater.', 'price');
      }
    });

    await super.init();
  }
}