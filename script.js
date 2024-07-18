
    document.getElementById('climaform').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const cidade = document.getElementById('climaInput').value;
    const apiKey = 'd7a8d944e376f6e9e6fd3af2bb39f6d9'; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`)
        
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                document.getElementById('resultado').textContent = 'Cidade não encontrada.';
            } else {
                document.getElementById('resultado').innerHTML =  `<p>A temperatura na cidade de ${cidade} é de ${data.main.temp}°C.</p> <p>O clima está ${data.weather[0].description}.</p>`;
            }
        })
        .catch(error => {
            
            document.getElementById('resultado').textContent = 'Falha ao buscar a cidade.';
          
        });
}); 

