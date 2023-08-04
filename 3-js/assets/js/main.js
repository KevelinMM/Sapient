// jQuery
// $(document).ready(function() {
// code
// });

// Vanilla JS

window.onload = function () {
  const url =
    "http://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Alber%20Einstein";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Acessar o conteúdo desejado
      const extract = data.query.pages[736].extract;

      // Exibir no console o conteúdo
      console.log(extract);
    })
    .catch((error) => {
      console.error("Erro ao carregar conteúdo da Wikipedia:", error);
    });
};

document.addEventListener("DOMContentLoaded", window.onload);

// No meu console aparece a mensagem de erro e também assim: from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled. Confesso que estudei bastante o erro de CORS mas por não ser tão rotineiro não consegui encontrar uma solução a tempo.
