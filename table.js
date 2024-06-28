document.addEventListener('DOMContentLoaded', () => {
    const data = [
        { id: 1, name: "Amir", age: 25 },
        { id: 2, name: "Anand", age: 30 },
        { id: 3, name: "Anderson", age: 28 },
        { id: 4, name: "Boovaragan", age: 22 }, 
        { id: 5, name: "Deva", age: 20 },
        { id: 6, name: "Evzen", age: 26 },
        { id: 7, name: "jeelani", age: 31 },
        { id: 8, name: "kishore", age: 27 },
        // Add more data as needed
    ];

    let currentPage = 1;
    let pageSize = 2;
    let currentSortKey = '';
    let currentSortOrder = 'asc';

    const renderTable = (data) => {
        const tableBody = document.querySelector('#data-table tbody');
        tableBody.innerHTML = '';
        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${row.id}</td><td>${row.name}</td><td>${row.age}</td>`;
            tableBody.appendChild(tr);
        });
    };

    const sortData = (key, order) => {
        data.sort((a, b) => {
            if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
            return 0;
        });
    };

    const paginateData = (data, page, size) => {
        const start = (page - 1) * size;
        return data.slice(start, start + size);
    };

    const updateTable = () => {
        sortData(currentSortKey, currentSortOrder);
        const paginatedData = paginateData(data, currentPage, pageSize);
        renderTable(paginatedData);
        document.getElementById('page-info').innerText = `Page ${currentPage} of ${Math.ceil(data.length / pageSize)}`;
    };

    window.sortTable = (key) => {
        currentSortKey = key;
        currentSortOrder = currentSortOrder === 'asc' ? 'desc' : 'asc';
        updateTable();
    };

    window.prevPage = () => {
        if (currentPage > 1) {
            currentPage--;
            updateTable();
        }
    };

    window.nextPage = () => {
        if (currentPage < Math.ceil(data.length / pageSize)) {
            currentPage++;
            updateTable();
        }
    };

    updateTable();
});
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');

    let currentIndex = 0;

    const updateSliderPosition = () => {
        slider.style.transform = `translateX(${-currentIndex * 100}%)`;
    };

    const showNextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSliderPosition();
    };

    const showPrevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSliderPosition();
    };

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);
});
