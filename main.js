// CASO FOR UTILIZAR ALTERAR ESTES DADOS PARA O USUÁRIO
const LinksSocialMedia = {
    github: 'rafabcanedo',
    youtube: 'rafael canedo',
    facebook: 'rafael canedo',
    instagram: 'canedopriv',
    twitter: 'canedopriv'
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

function getGitHubProfileinfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        UserImage.src = data.avatar_url
        canedopriv.textContent = data.login
    })
}

getGitHubProfileinfos()


/*
// ARROW FUNCTIONS
function nomedafuncao(argumento, argumento2){
    //code
}

// Function anonioma(arrow)
(argumento, argumento2) => {

}

// Caso a function não receba nada 
function nomedafuncao(){
    //code
}

() => {

}
*/