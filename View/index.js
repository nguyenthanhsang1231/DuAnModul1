let shop = new Store();
function main() {
    let sp1 = new Product(1, "l", "https://img2.thuthuatphanmem.vn/uploads/2019/02/22/anh-nen-tuong-lien-quan-tulen_120823816.jpg", 1);
    let sp2 = new Product(2, "can", 3000, 1);

    shop.addProduct(sp1);
    shop.addProduct(sp2);


//     let listProductInStore = shop.findAll();
//     for (let i = 0; i < listProductInStore.length; i++) {
//         console.log(listProductInStore[i]);
//     }
 }
main();

function showAll() {
    let listProductInStore = shop.findAll();
    let stringHtml = ``;
    for (let i = 0; i < listProductInStore.length; i++) {
        stringHtml += `
        <tr>
            <td style="color: chartreuse">${listProductInStore[i].id}</td>
            <td style="color: midnightblue">${listProductInStore[i].name}</td>
            <td style="color: chartreuse"><img src="${listProductInStore[i].img}" alt="#"> ${listProductInStore[i].price}</td>
            <td style="color: chartreuse">${listProductInStore[i].figure}</td>
            <td><button style="background-color: blueviolet; color: white; border-radius: 50px;" onclick="showFormEdit(${i})">edit</button></td>
            <td><button style="background-color: blueviolet; color: white" onclick="removeProduct(${i})">delete</button></td>
        </tr>
        `
    }
    document.getElementById('list-product').innerHTML = stringHtml;
}
showAll();

function showFormAdd() {
    document.getElementById('form-add').innerHTML = `
        <h3>Form Add</h3>
        <input type="number" id="id" placeholder="Id">
        <br>
        <input type="text" id="name" placeholder="Name">
        <br>
        <input type="number" id="price" placeholder="Price">
        <br>
        <input type="number" id="figure" placeholder="Figure">
        <br>
        <button onclick="save()">Save</button>
    `
}
function save() {
    let id = +document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let quantity = +document.getElementById('figure').value;

    let newProduct = new Product(id, name, price, quantity);
    shop.addProduct(newProduct);
    showAll();
    document.getElementById('form-add').innerHTML = '';
}

function removeProduct(index) {
    let checkRemove = confirm("are you oke ?");
    if (checkRemove) {
        shop.remove(index);
        showAll();
    }
}

function showFormEdit(index) {
    let listProductInStore = shop.findAll()
    let productEdit = listProductInStore[index];
    document.getElementById("form-edit").innerHTML = `
     <h3>Form Edit</h3>
        <input type="number" id="idEdit" placeholder="Id" value="${productEdit.id}">
        <br>
        <input type="text" id="nameEdit" placeholder="Name" value="${productEdit.name}">
        <br>
        <input type="number" id="priceEdit" placeholder="Price" value="${productEdit.price}">
        <br>
        <input type="number" id="figureEdit" placeholder="Figure" value="${productEdit.figure}">
        <br>
        <button onclick="saveEdit(${index})">Save</button>
     `
}

function saveEdit(index) {
    let idEdit = +document.getElementById('idEdit').value;
    let nameEdit = document.getElementById('nameEdit').value;
    let priceEdit = +document.getElementById('priceEdit').value;
    let figureEdit = +document.getElementById('figureEdit').value;
    let newProduct = new Product(idEdit, nameEdit, priceEdit, figureEdit);
    shop.edit(index, newProduct);
    showAll();
    document.getElementById('form-edit').innerHTML = '';
}
