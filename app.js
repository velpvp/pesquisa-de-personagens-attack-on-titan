function pesquisar() {

    let section = document.getElementById('resultados-pesquisa')
    let campoPesquisa = document.getElementById('campo-pesquisa').value
    campoPesquisa = campoPesquisa.toLowerCase()
     let resultados = ''
    let titulo = ""
    let descricao = ""
    let tags = ""


    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <div class="item-resultado-imagem">
                        <img src="${dado.imagem}" alt="${dado.alt}">
                    </div>
                    <div class="item-resultado-infos">
                        <h2>${dado.titulo}</h2>
                        <p class="descricao-meta">
                            ${dado.descricao}
                        </p>
                        <a href="${dado.link}" target="_blank">Ver mais...</a>
                    </div>
                </div>
            `;
        }
       
        campoPesquisa = campoPesquisa.toLowerCase()
    }
    if (!campoPesquisa || !resultados) {
        section.innerHTML = `<p>Nada foi encontrado</p>`
        return;
    }
    section.innerHTML = resultados;
}
