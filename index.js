/*
<table class="table mt-5 p-5" id="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>

*/

const urlAPI = 'https://jsonplaceholder.typicode.com/users';
const inputSearch = document.getElementById('inputSearch');
const inputSelect = document.getElementById('inputSelect');
const buttonSearch = document.getElementById('buttonSearch');
const table = document.getElementById('table');
let userList;

window.onload = async () =>{

    let res = await fetch(urlAPI);
    userList = await res.json();

    // console.log(userList)

    let resTable = userList.map((element) => createItemTable(element) );

    table.append(...resTable)

}

// Creazione della singola riga di Tabella
function createItemTable(item){
// console.log(item)
    // Creao i Nodi
    let riga = document.createElement('tr');
    let indice = document.createElement('th');
    let name = document.createElement('td');
    let userName = document.createElement('td');
    let email = document.createElement('td');


    indice.scope = 'row';

    indice.innerText = item.id;
    userName.innerText = item.username;
    email.innerText = item.email;
    name.innerText = item.name;

    riga.append(indice,name,email,userName);
    return riga;

}

// Creazione Tabella dei risultati
function updateTable(param = '', selected){
    resetTable();
    let resTable = userList.filter((data) => {
        
        return data[selected].toLowerCase().includes(param.toLowerCase())});
        console.log(resTable)
    let resUpdate = resTable.map((element) => createItemTable(element) );

    table.append(...resUpdate);
    // console.log(resUpdate)

}

function resetTable(){
    console.log('test');
    let tableRow = document.querySelectorAll('tbody > tr');
    for (const data of tableRow) {
        console.log(data)
        data.remove();
    }
}

buttonSearch.addEventListener('click',()=>{
    // console.log(inputSelect.value);

    updateTable(inputSearch.value,inputSelect.value)
})