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

    inputValue.value ="";
    inputValue.focus();
});