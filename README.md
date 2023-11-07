# Extensão de Votação Digital para o Google Chrome

Esta extensão do Google Chrome permite que os usuários participem de votações digitais configuradas pelo Núcleo/DAV. 
É uma solução flexível que suporta várias eleições e configurações.

## Como Adicionar ao Google Chrome

Siga estas etapas simples para adicionar a extensão de Votação Digital ao seu navegador Google Chrome:
- Clone ou faça o download deste repositório para o seu computador.
- Abra o navegador Google Chrome.
- Na barra de endereços, digite `chrome://extensions/` e pressione Enter.
- Certifique-se de que a opção "Modo do desenvolvedor" (Developer Mode) esteja ativada no canto superior direito da página.
- Clique no botão "Carregar sem compactação" (Load unpacked) que agora deve estar visível.
- Navegue até o diretório onde você clonou ou baixou este repositório e selecione a pasta raiz.
- Clique no botão "Selecionar Pasta" (Select Folder) para carregar a extensão no navegador.

A extensão de Votação Digital agora deve estar instalada e ativa no seu Google Chrome. Você verá seu ícone na barra de ferramentas do navegador.

Lembre-se de configurar os parâmetros necessários conforme descrito na seção de "Configuração" deste README antes de usar a extensão.

**Observação**: Certifique-se de estar usando a versão mais recente do Google Chrome para garantir a compatibilidade com a extensão.

Agora você está pronto para começar a usar a extensão para realizar votações digitais de forma eficiente e transparente.


## Configuração

Antes de usar a extensão, é necessário configurá-la com os seguintes parâmetros:

- **Núcleo**: O núcleo ou grupo para o qual a votação está sendo realizada.
- **Turno**: O turno da votação, que pode ser 1º Turno ou 2º Turno.
- **Link 1º Turno**: O link para o formulário de votação do primeiro turno.
- **Link 2º Turno**: O link para o formulário de votação do segundo turno (se aplicável).
- **Iniciar Votação**: Um valor que determina se a votação está ativada
- **Eleição**: O tipo de eleição, como 'Diretoria', 'Representação', 'Conselho Fiscal', etc.

Certifique-se de configurar esses parâmetros corretamente antes de usar a extensão.

## Uso

Após a configuração, a extensão funcionará automaticamente de acordo com as condições definidas:

- Se o turno atual corresponder ao turno configurado e a URL atual corresponder ao link do formulário de votação, um pop-up será exibida com a Logo do Centro, Nome do Núcleo e Turno, indicando o início da votação.
- Ao clicar em VOTAR é aberto o forms de votação
- 10 após segundos o sócio votar o forms volta a página inicial da votação.

Para um melhor funcionamento, a extensão deve ser instalada em um "Perfil" do Chrome novo, sem estar logado em nenhuma conta do Google.

![alt text](https://github.com/lucassmacedo/cebudv-chrome-votacao/blob/master/images/popup.png?raw=true)


## Contribuição

Contribuições são bem-vindas! Se você deseja melhorar esta extensão ou relatar problemas, fique à vontade para abrir problemas (issues) ou enviar solicitações de pull (pull requests) neste repositório.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para obter detalhes.

---

Esperamos que esta extensão seja útil para realizar votações digitais de forma eficiente e transparente. Se você tiver alguma dúvida ou precisar de assistência adicional, não hesite em entrar em contato.
