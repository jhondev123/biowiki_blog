function mountHeader(path,file){
    let filePath = path + file;
    fetch(filePath)
    .then(response => response.text())
    .then(data => {
        const headerPlaceholder = document.getElementById('headerPlaceholder');
        headerPlaceholder.innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar o header:', error));
}

function mountFooter(path,file){
    let filePath = path + file;
    fetch(filePath)
    .then(response => response.text())
    .then(data => {
        const footerPlaceholder = document.getElementById('footerplaceholder');
        footerPlaceholder.innerHTML = data;
    })
    .catch(error => console.error('Erro ao carregar o footer:', error));
}
