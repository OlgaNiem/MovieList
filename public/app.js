const table = document.querySelector('table');
const tbody = document.createElement('tbody');

fetchMovies();



function updateMovies(data){
 
    tbody.innerHTML = '';
    table.append(tbody);
    
    data.forEach(item => {
        const tr = document.createElement('tr');
        
        const td1 = document.createElement('td');
        td1.append(item.title);

        const td2 = document.createElement('td');
        td2.append(item.releaseDate);

        const td3 = document.createElement('td');
        td3.append(item.age);

        const td4 = document.createElement('td');
        item.genres.map(e => td4.append(e + ' '));
           
        const td5 = document.createElement('td');
        td5.append(item.rating);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tbody.append(tr);
    })
}
async function filterByRating() {
    const response = await fetch('/api/movies');
    const data = await response.json();

    const input = document.querySelector('.filter')
    const input2 = document.querySelector('.filter2')

    const filter = data.filter(item => {
       return item.rating < input.value && item.rating > input2.value;
    })
    console.log(filter)
    updateMovies(filter);
}


async function fetchMovies() {
    const response = await fetch('/api/movies');
    const data = await response.json();
        
    
    table.append(tbody);
    
    data.forEach(item => {
        const tr = document.createElement('tr');
        
        const td1 = document.createElement('td');
        td1.append(item.title);

        const td2 = document.createElement('td');
        td2.append(item.releaseDate);

        const td3 = document.createElement('td');
        td3.append(item.age);

        const td4 = document.createElement('td');
        item.genres.map(e =>  td4.append(e + ' '));
           
        const td5 = document.createElement('td');
        td5.append(item.rating);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tbody.append(tr);
    });
} 

