const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');





const instrumentFamilyData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');

document.addEventListener('DOMContentLoaded', () => {
  const instrumentDropdown = new SelectView();
  instrumentDropdown.bindEvents();

  const instrumentInfoDisplay = new InstrumentInfoView();
  instrumentInfoDisplay.bindEvents();

  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilies.bindEvents();
});
