function validarLogin(event) {
    event.preventDefault()

    const usuarioVlaido = "admin"
    const senhaValida = "123456"

    document.getElementById("usuario")

    const usuarioInput = document.getElementById("usuario")
    const senhaInput = document.getElementById("password")
    const mensagemErro = document.getElementById("mensagem-erro")

    const usuario = usuarioInput.value
    const senha = senhaInput.value
  
    console.log(usuario, senha);
    


    if (usuarioInput.value === usuarioVlaido && senhaInput.value === senhaValida){
             alert("login sucesso")
             console.log("login sucesso")
             window.location.href = 'logado.html'
            
    }
         else{
         alert("Usuário ou senha incorretos")
         mensagemErro.style.color = "red";
         usuarioInput.focus()
         console.log("Login falhou");
         usuarioInput.value = ""
         senhaInput.value = ""
     }
}
function salvarcadastro(event){
    //evitar o envio padrãod o formulario
    event.preventDefault()

    //COLETAR OS DADOS DO FROMULARIO 
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const datanasc = document.getElementById("datanasc").value
    const escolaridade = document.getElementById("escolaridade").value
    const genero = document.querySelector("input[name='genero']:checked")?.value
    const habilidadeSelecionadas = document.querySelectorAll("input[name='habilidade']:checked")

    const habilidade = Array.from(habilidadeSelecionadas).map(x => x.value)
    

    
    //criar o meu objeto 
    const usuario = {
        nome,
        email,
        datanasc,
        escolaridade,
        genero,
        habilidade
    
    }
    //armazenar em local storage os dados do cadastro 
    localStorage.setItem("usuariocadastrado", JSON.stringify(usuario))
    alert("cadastrto efetuado com sucesso!!")
    console.log(usuario);






}
