const RequestHelper = require('../helpers/request_helper.js');

const PubSub = require('../helpers/pub_sub.js');

class Countries {

  constructor() {
    this.data = [];
  }


  getData() {
    // get the countries data
    const url = 'https://restcountries.eu/rest/v2/all'

    const requestHelper = new RequestHelper(url);

    requestHelper.get()

    .then((data) => {
      this.data = data;
      PubSub.publish('Countries:data-loaded', data)

    })

    .catch(message => {
      console.error(message);
    })

    // publish the data - 'Countries:data-loaded'

  }

};

module.exports = Countries;
