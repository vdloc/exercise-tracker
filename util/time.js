function getLocaleDateString(date) {
  return new Date(date)
    .toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    })
    .replaceAll(',', '');
}

function isValidDate(dateString = '') {
  return dateString && new Date(dateString) !== 'Invalid Date';
}

module.exports = { getLocaleDateString, isValidDate };
