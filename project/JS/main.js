// My social media users (Object)
const socialMedias = {
  github: 'celoutzz',
  youtube: 'channel/UCuP1C-Dg0zre09bMt9qsW-Q',
  instagram: 'celo__019',
  facebook: 'MarceloJunior',
  twitter: 'celo_019'
}



// Function is a way to group actions that Javascript will do
function changeSocialMediaLinks() {

  // Laços de repetição

  // Declaramos a variável LI para armazenar as li's do HTML dentro dela, 'socialLinks' foi o ID dado à ul, quando usamos o .children, estamos querendo pegar os filhos de ul e armazenar na var LI

  for (let li of socialLinks.children) {
   const social = li.getAttribute('class')
    // Pegando classes dos atributos atribuídos nas li's

    li.children[0].href = `https://${social}.com/${socialMedias[social]}`

  }

}

changeSocialMediaLinks()


/** Ir no Github e pegar as informações para nós */
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMedias.github}`

  // Arrow Function = Contrair a forma de uma função, utilizando somente o argumento a ser passado e => na frente, continuando então a função. (Função anônima)


  // Comando que vai até a URL, pega os dados e retorna, sem saber se é um JSON ou não (fetch())

  // Se tudo deu certo e o fetch conseguiu pegar o retorno, então entramos na promessa, o resto do trabalho ficará com o .then() que recebe uma resposta (response é a variável que vai receber e armazenar os códigos do resto da função).

  // Tudo que está dentro do data agora é o arquivo JSON e usaremos o data.algumaCoisa para chamar os atributos do JSON.

  fetch(url)
    .then(response => response.json())
    .then(data => {

      // Jeito maior e menos simplificado:
      //const userName = document.getElementById('userName').textContent = data.name


      // Jeito menor e mais rápido:
      userName.textContent = data.name
      userBio.textContent = data.bio
      userProfileLink.href = data.html_url
      userProfileImage.src = data.avatar_url
      userProfileLogin.textContent = data.login
    })




  // Promise = Utilizado para podermos pegar a resposta de algo. (.then())

  // Data será utilizado para acessarmos os atributos no nosso arquivo JSON

}

getGitHubProfileInfos()