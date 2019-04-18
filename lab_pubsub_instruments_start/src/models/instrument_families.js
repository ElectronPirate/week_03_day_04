PubSub = require('../helpers/pub_sub.js');

class InstrumentFamilies {

  constructor(data) {
    this.data = data;
  }

  bindEvents(){
    PubSub.publish('InstrumentFamilies:all-instruments-ready', this.data);

    PubSub.subscribe('SelectView:change', (event) => {
      const selectedIndex = event.detail;
      this.publishInstrumentDetail(selectedIndex);
    });
  };

  publishInstrumentDetail(instrumentIndex){
    const selectedInstrument = this.data[instrumentIndex];
    PubSub.publish('InstrumentFamilies:selected-instrument-ready', selectedInstrument);

  };

};

module.exports = InstrumentFamilies;
