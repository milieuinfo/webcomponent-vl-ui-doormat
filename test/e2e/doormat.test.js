const {assert, getDriver} = require('vl-ui-core').Test.Setup;
const VlDoormatPage = require('./pages/vl-doormat.page');

describe('vl-doormat', async () => {
  let vlDoormatPage;

  before(() => {
    vlDoormatPage = new VlDoormatPage(getDriver());
    return vlDoormatPage.load();
  });

  it('WCAG', async () => {
    await assert.eventually.isFalse(vlDoormatPage.hasWcagIssues());
  });

  it('als gebruiker kan ik de titel van een doormat bekijken', async () => {
    const doormat = await vlDoormatPage.getDoormat();
    await assert.eventually.equal(doormat.getTitle(), 'Bouwen, wonen en energie');
  });

  it('als gebruiker kan ik de tekst van een doormat bekijken', async () => {
    const doormat = await vlDoormatPage.getDoormat();
    await assert.eventually.equal(doormat.getText(), 'De overheid zet zich in om betaalbaar en kwaliteitsvol wonen voor iedereen beschikbaar te maken. Ze biedt sociale woningen aan, geeft premies aan wie zijn woning verbouwt en energiezuinig maakt en zoekt oplossingen om de stijging van de vastgoedprijzen onder controle te houden.');
  });

  it('als gebruiker kan ik de afbeelding van een doormat bekijken', async () => {
    const doormat = await vlDoormatPage.getDoormat();
    const imageDoormat = await vlDoormatPage.getImageDoormat();
    await assert.eventually.isFalse(doormat.hasImage());
    await assert.eventually.isTrue(imageDoormat.hasImage());
  });

  it('als gebruiker kan ik het verschil zien tussen een alt en gewone doormat', async () => {
    const doormat = await vlDoormatPage.getDoormat();
    const altDoormat = await vlDoormatPage.getAltDoormat();
    await assert.eventually.isFalse(doormat.isAlt());
    await assert.eventually.isTrue(altDoormat.isAlt());
  });

  it('als gebruiker kan ik het verschil zien tussen een graphic en gewone doormat', async () => {
    const doormat = await vlDoormatPage.getDoormat();
    const graphicDoormat = await vlDoormatPage.getGraphicDoormat();
    await assert.eventually.isFalse(doormat.isGraphic());
    await assert.eventually.isTrue(graphicDoormat.isGraphic());
  });
});
