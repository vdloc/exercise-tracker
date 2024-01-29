function getLocaleDateString(date) {
  return new Date()
    .toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    })
    .replaceAll(',', '');
}

module.exports = { getLocaleDateString };
