document.addEventListener('DOMContentLoaded', () => {
    // sundew to kathe button me to antistoixo json file
    const buttonToJsonMap = {
        buttonPortraitsLink: { file: 'portraits.json', sectionId: 'PortraitLinks' },
        buttonPaintingsLink: { file: 'paintings.json', sectionId: 'PaintingLinks' },
        buttonDrawingsLink: { file: 'drawings.json', sectionId: 'DrawingLinks' }
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
        fetch(file) //kanei request sto analogo file 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                document.querySelectorAll('main > div').forEach(section => {
                    section.classList.add('hide');
                });

                const targetSection = document.getElementById(sectionId);
                targetSection.classList.remove('hide');

                const table = targetSection.querySelector('table');
                const tbody = table.querySelector('tbody');
                tbody.innerHTML = ''; //afairei ola ta stoixeia pou uparxoun mesa

                const items = file.includes('portraits')
                    ? data.portraits
                    : file.includes('paintings')
                        ? data.paintings
                        : data.drawings;

                items.forEach(item => {
                    const row = document.createElement('tr');

                    const titleCell = document.createElement('td');
                    titleCell.textContent = item.title;
                    row.appendChild(titleCell);

                    const yearCell = document.createElement('td');
                    yearCell.textContent = item.year;
                    row.appendChild(yearCell);

                    const linkCell = document.createElement('td');
                    const linkElement = document.createElement('a');
                    linkElement.href = item.link;
                    linkElement.textContent = 'View';
                    linkElement.target = '_blank';
                    linkCell.appendChild(linkElement);
                    row.appendChild(linkCell);

                    const imageCell = document.createElement('td');
                    if (item.image) {
                        const imageElement = document.createElement('img');
                        imageElement.src = item.image;
                        imageElement.alt = item.title;
                        imageElement.style.width = '100px';
                        imageElement.style.height = 'auto';
                        imageCell.appendChild(imageElement);
                    } else {
                        imageCell.textContent = 'No image available';
                    }
                    row.appendChild(imageCell);

                    tbody.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching JSON:', error));
    }
});
