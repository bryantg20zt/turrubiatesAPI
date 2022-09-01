window.onload = () => {
    async function getData (name,lastName) {
        const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${name}&lastName=${lastName}`);
        const data = await response.json();
        let responseData = data.value.joke;
        return responseData;
    }

    document.querySelector('#btnForm').addEventListener('click', async function () {
       let Name =  document.querySelector('#input-Name').value;
       let LastName =  document.querySelector('#input-LastName').value;
       const responseData = await getData(Name,LastName);
       alert(responseData);
    })

    getData();
}