export default function formatDate(dateString) {
  const date = new Date(dateString);
  const optionsDay = { weekday: 'long' };
  const day = date.toLocaleDateString('en-US', optionsDay);
  const dayOfMonth = date.getDate();
  const optionsMonth = { month: 'short' };
  const month = date.toLocaleDateString('en-US', optionsMonth).toUpperCase();
  const year = date.getFullYear();
  return `${day}, ${dayOfMonth} ${month} ${year}`;
}
