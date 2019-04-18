const PubSub = require('../helpers/pub_sub.js');

class InstrumentInfoView{

  constructor(){

    this.container = document.querySelector('div#instrument-info');
  }

  bindEvents(){

    PubSub.subscribe('InstrumentFamilies:selected-instrument-ready', (event) => {
      const data = event.detail;
      this.render(data);
    });
  }

  render(instrumentFamily){
    const infoName = document.createElement('h2');
    infoName.textContent = `${instrumentFamily.name}`;
    const infoParagraph = document.createElement('p');
    infoParagraph.textContent = `${instrumentFamily.description}`;
    const ul = document.createElement('ul');

    instrumentFamily.instruments.forEach((inst)=>{
      const infoInstruments = document.createElement('li');
      infoInstruments.textContent = `${inst}`;
      ul.appendChild(infoInstruments);

    })

    this.container.innerHTML = '';
    this.container.appendChild(infoName);
    this.container.appendChild(infoParagraph);
    this.container.appendChild(ul);

  }

  makeList(instrument){


  }

}

module.exports = InstrumentInfoView;
