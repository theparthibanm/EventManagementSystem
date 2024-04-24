document.addEventListener('DOMContentLoaded', function () {
    const eventForm = document.getElementById('event-form');
    const eventList = document.getElementById('event-list');
  
    eventForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const eventName = document.getElementById('eventName').value;
      const eventDate = document.getElementById('eventDate').value;
      const eventItem = document.createElement('li');
      eventItem.textContent = `${eventName} - ${eventDate}`;
      eventList.appendChild(eventItem);
      eventForm.reset();
    });
  });
  