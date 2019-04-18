const PubSub = require('../helpers/pub_sub.js');

class SelectView{

  constructor(){
    this.element = document.querySelector('select#instrument-families');
    }

bindEvents(){
  PubSub.subscribe('InstrumentFamilies:all-instruments-ready', (event) => {
    const allInstruments = event.detail;
    this.populate(allInstruments);

  });

  this.element.addEventListener('change', (event) => {
    const selectIndex = event.target.value;
    PubSub.publish('SelectView:change', selectIndex);
  });
};


populate(instrumentData){
  instrumentData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option);
  })
}

}


module.exports = SelectView;
