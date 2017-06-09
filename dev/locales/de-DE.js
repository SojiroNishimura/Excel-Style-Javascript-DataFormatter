'use strict';

module.exports = {
  name: 'de-DE',
  months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  monthsShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  days: ['Sontag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  daysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  thousandSeparator: '.',
  decimalSeparator: ',',
  formats: {
    'General Number': '#.#',
    'Currency': '$ #,##0.00;[Red]$ -#,##0.00',
    'Fixed': '0.00',
    'Standard': '#,##0.00',
    'Percent': '0.00%',
    'Scientific': '0.00E+00',
    'Yes/No': '"Ja";"Ja";"Nein"',
    'True/False': '"True";"True";"False"',
    'On/Off': '"On";"On";"Off"',
    'Short Date': 'dd.mm.yyyy',
    'Long Date': 'dd mmmm yyyy',
    'General Date': 'dd.mm.yyyy h:mm',
    'Medium Date': 'dd.mmm.yy',
    'Long Time': 'hh:mm:ss AM/PM',
    'Short Time': 'h:mm',
    'Medium Time': 'hh:mm AM/PM'
  }
};