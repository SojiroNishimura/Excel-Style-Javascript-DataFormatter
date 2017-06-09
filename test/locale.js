import { assert, expect } from 'chai';
import DataFormatter from '../src';

describe('Locale', () => {
  let df;

  beforeEach(() => {
    df = new DataFormatter();
  });

  it('Set locale', () => {
    df.setLocale('ru-RU');
    assert.equal(df.format('1', 'Number', 'Yes/No').value, 'Да');

    df.setLocale('en-US');
    assert.equal(df.format('1', 'Number', 'Yes/No').value, 'Yes');

    df.setLocale('elven');
    assert.equal(df.format('1', 'Number', 'Yes/No').value, 'Yes');
  });

  it('Load locales automatically', () => {
    expect(df.locales['en-US']).is.not.null;
    expect(df.locales['de-DE']).is.not.null;
    expect(df.locales['ru-RU']).is.not.null;
  });

  it('Overwrite thousandSeparator', () => {
    df.setLocale('en-US');
    expect(df.locale.thousandSeparator).to.be.equal(',');
    df.setLocale('en-US', { thousandSeparator: '$'});
    expect(df.locale.thousandSeparator).to.be.equal('$');
  });

  it('Overwrite decimalSeparator', () => {
    df.setLocale('de-DE');
    expect(df.locale.decimalSeparator).to.be.equal(',');
    df.setLocale('de-DE', { decimalSeparator: '*'});
    expect(df.locale.decimalSeparator).to.be.equal('*');
  });

});
