const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

class Dogs {
  constructor(){
    this.data = [];
  }

  getData(){
    const url = 'https://dog.ceo/api/breed/pug/images';
    const request = new RequestHelper(url);

    request.get()

    .then((data) => {
      this.data = data.message;
      console.log(data.message);

      PubSub.publish('Dogs:dog-data-loaded', this.data);

    })
    .catch((message) => {
      console.error(message);
    });


  }


};

module.exports = Dogs;
