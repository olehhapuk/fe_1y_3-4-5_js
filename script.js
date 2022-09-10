class NotificationWidget {
  constructor(togglerSelector, popupSelector) {
    this.toggler = document.querySelector(togglerSelector);
    this.popup = document.querySelector(popupSelector);

    this.notifications = [];

    this.toggler.addEventListener('click', this.togglePopup.bind(this));
  }

  togglePopup() {
    this.popup.style.display =
      this.popup.style.display === 'none' ? 'block' : 'none';
  }

  addNotification(name, title, createdAt) {
    const html = `
      <li class="notification">
        <div class="avatar"></div>
        <p class="text"><b>${name}</b> написав про <b>${title}</b></p>
        <p class="time">${createdAt.toTimeString()}</p>
      </li>`;

    const newNotification = {
      id: new Date().getTime(),
      name,
      title,
      createdAt,
    };

    this.popup.innerHTML += html;
    this.notifications.push(newNotification);
  }

  clearNotifications() {
    this.notifications = [];
    this.popup.innerHTML = '';
  }
}

const notifications = new NotificationWidget(
  '#notificationsToggler',
  '#notificationsPopup'
);

notifications.addNotification('John Doe', 'NodeJS Perfomance', new Date());
