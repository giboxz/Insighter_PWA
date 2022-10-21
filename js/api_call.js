// consuming an API:

function fetchData() {
    fetch("https://retoolapi.dev/2PlLEF/data").then(response => {
        if (!response.ok){
            throw Error("OOPS, SOMETHING WENT WRONG. FETCH FAILED. :(");
        }
        return response.json();        
    }).then(data => {
        console.log(data.data);
        const html = data.map(user => {
            return `
            <div class="user">
                <p>Name: ${user.machineName} </p>
                <p>Temperatura mínima: ${user.tempMin} | Temperatura máxima: ${user.tempMax}</p>
                <p>Ruído mínimo: ${user.noiseMin} | Ruído máximo: ${user.noiseMax}</p>
                <p>Vibração mínima: ${user.vibMin} | Vibração máxima: ${user.vibMax}</p>
            </div>
            `;
        }).join('');
        document.querySelector('#app').insertAdjacentHTML('afterbegin' , html);
    }).catch(error => {
        console.log(error);
    })
}

fetchData();

function postData() {
    fetch("https://retoolapi.dev/2PlLEF/data", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            machineName: "morpheus",
            tempMin: "20",
            tempMax: "95",
            noiseMin: "35",
            noiseMax: "112",
            vibMin: "23",
            vibMax: "55"
        })
    }).then(response => {
        if (!response.ok){
            throw Error("OOPS, SOMETHING WENT WRONG. POST FAILED. :(");
        }
        return response.json();        
    }).then(data => {
        console.log(data);
         const html = `
             <div class="user">
                <p>Name: ${data.machineName} </p>
                <p>Temperatura mínima: ${data.tempMin} | Temperatura máxima: ${data.tempMax}</p>
                <p>Ruído mínimo: ${data.noiseMin} | Ruído máximo: ${data.noiseMax}</p>
                <p>Vibração mínima: ${data.vibMin} | Vibração máxima: ${data.vibMax}</p>
             </div>
             `;
        document.querySelector('#app').insertAdjacentHTML('afterbegin' , html);
    }).catch(error => {
        console.log(error);
    })
}

//postData();

function deleteData(id) {
    fetch(`https://retoolapi.dev/2PlLEF/data/${id}`, {
        method: 'DELETE'
    }).then(message => {
        console.log('DELETE successful!');
    }).catch(message => {
        console.log('Could not DELETE');
    })
};

//deleteData()

function updateData(id) {
    fetch(`https://retoolapi.dev/2PlLEF/data/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            machineName: "NOME ATT"
        })
    }).then(response => {
        if (!response.ok){
            throw Error("OOPS, SOMETHING WENT WRONG. PATCH FAILED. :(");
        }
        return response.json();        
    }).then(data => {
        console.log(data);
         const html = `
                <div class="user">
                    <p>Name: ${data.machineName} </p>
                    <p>Temperatura mínima: ${data.tempMin} | Temperatura máxima: ${data.tempMax}</p>
                    <p>Ruído mínimo: ${data.noiseMin} | Ruído máximo: ${data.noiseMax}</p>
                    <p>Vibração mínima: ${data.vibMin} | Vibração máxima: ${data.vibMax}</p>
                </div>
             `;
        document.querySelector('#app').insertAdjacentHTML('afterbegin' , html);
    }).catch(error => {
        console.log(error);
    })
}
updateData(4);