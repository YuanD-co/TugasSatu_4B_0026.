const inputValue = document.getElementById("inputTask");
const btnTambah = document.getElementById("btnTambahTodo");
const daftarTugas = document.getElementById("listTugas");
const inputTanggal = document.getElementById("inputTanggal");

console.log("Input tanggal berhasil diambil");
console.log(inputTanggal);

btnTambah.addEventListener("click", function(){

    if(inputValue.value === ""){
        alert("Input tidak boleh kosong");
        return;
    }

    if(inputTanggal.value === ""){

    alert("Tanggal tugas wajib diisi");

    return;
}

    const listbaru = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = inputValue.value;
    
    listbaru.appendChild(span);
    daftarTugas.appendChild(listbaru);
    const tanggal = document.createElement("p");
    tanggal.innerHTML = 
        "Tanggal : " + inputTanggal.value;
    tanggal.style.fontWeight = "bold";

    listbaru.appendChild(tanggal);
    const garis = document.createElement("hr");
    listbaru.appendChild(garis);

    const btnEdit = document.createElement("button");
    btnEdit.innerText = "Edit";
    btnEdit.style.backgroundColor = "yellow";
    btnEdit.style.color = "black";

    btnEdit.addEventListener("click", function(){
        alert("Mode edit aktif");
        console.log("Tombol edit ditekan");

        const editTugas = prompt(
            "Masukkan tugas baru"
        );
        console.log(editTugas);
        alert("Silakan edit tugas");
        
    inputValue.value ="";
    inputValue.focus();
});