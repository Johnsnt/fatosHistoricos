let data = require('../data/fatos');

function buscarFatosPorAno(anoEscolhido) {
    
    const fatoEscohido = data.fatos.filter((data) => data.ano == anoEscolhido);
    return fatoEscohido[0];
}

exports.buscarFatosPorAno = buscarFatosPorAno;