document.addEventListener('DOMContentLoaded', () => {
    const buttonToJsonMap = {
        buttonPastExh: { file: 'pastExh.json', sectionId: 'past' },
        buttonCurrentExh: { file: 'currentExh.json', sectionId: 'current' },
        buttonUpcomingExh: { file: 'upcomingExh.json', sectionId: 'upcoming' }
    };

    Object.keys(buttonToJsonMap).forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', () => {
                const { file, sectionId } = buttonToJsonMap[buttonId];
                fetchDataAndDisplay(file, sectionId);
            });
        }
    });

    function fetchDataAndDisplay(file, sectionId) {
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                document.querySelectorAll('main > div').forEach(section => {
                    section.classList.add('hide');
                });

                const targetSection = document.getElementById(sectionId);
                if (!targetSection) {
                    console.error(`Section with ID "${sectionId}" not found.`);
                    return;
                }
                targetSection.classList.remove('hide');

                const tbody = targetSection.querySelector('tbody');
                tbody.innerHTML = ''; 

                const items = file.includes('past')
                    ? data.past
                    : file.includes('current')
                        ? data.current
                        : data.upcoming;

                items.forEach(item => {
                    const row = document.createElement('tr');

                    const imageCell = document.createElement('td');
                    const image = document.createElement('img');
                    image.src = item.image;
                    image.alt = item.name;
                    image.style.width = '100px';
                    imageCell.appendChild(image);
                    row.appendChild(imageCell);

                    const nameCell = document.createElement('td');
                    nameCell.textContent = item.name;
                    row.appendChild(nameCell);

                    const dateCell = document.createElement('td');
                    dateCell.textContent = item.date;
                    row.appendChild(dateCell);

                    const locationCell = document.createElement('td');
                    locationCell.textContent = item.location;
                    row.appendChild(locationCell);

                    const descriptionCell = document.createElement('td');
                    descriptionCell.textContent = item.description;
                    row.appendChild(descriptionCell);

                    tbody.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }
});
