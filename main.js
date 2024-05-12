<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Botão Clicável</title>
    <style>
        /* Estilo opcional para o botão */
        #meuBotao {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <button id="meuBotao">Clique em mim!</button>

    <script>
        // Adicionando um evento de clique ao botão
        document.getElementById("meuBotao").addEventListener("click", function() {
            alert("Você clicou no botão!");
        });
    </script>
</body>
</html>
