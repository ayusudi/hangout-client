export default function formatTime(timeString) {
  const [hours, minutes] = timeString.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  return `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;
}