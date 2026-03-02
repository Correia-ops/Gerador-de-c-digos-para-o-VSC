let botao = document.querySelector(".botao-gerar")
let chave = "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"
let endereco = "https://api.groq.com/openai/v1/chat/completions"
async function gerarCodigo() {
    let textoUsuario = document.querySelector(".caixa-texto").value
    let blocoCodigo= document.querySelector(".bloco-codigo")
    let resultadoCodigo= document.querySelector(".resultado-codigo")
    let resposta = await fetch(endereco, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer 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"
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [{
                role: "system",
                content: "Você é um gerador de código HTML e CSS. Responda SOMENTE com código puro. Nunca use crases, markdown ou explicações. Formato: primerio<style> com o CSS,depois o HTML. Siga EXATAMENTO o que o usuário pedir. Se pedir algo quicando, use o translateY no @keyframes. Se pedir algo girando,use rotate."
            },
            {
                role: "user",
                content: textoUsuario
            }
            ]
        })
  })
  let dados = await resposta.json()
  let resultados=dados.choices[0].message.content

blocoCodigo.textContent = resultados
resultadoCodigo.srcdoc = resultados
}

botao.addEventListener("click", gerarCodigo)
