import { useState } from 'react';

import Botao from './botao';

import styles from './index.module.css';

function Atividade03() {
    // O hook useState gerencia o valor do contador
    const [Text, setText] = useState("");

    const cadastro = () => setText("cadastro");
    const editar = () => setText("editar");
    const listar = () => setText("listar");
    const excluir = () => setText("excluir");
    const cancelar = () => setText("cancelar");

    return (
        <div className={styles.container}>
            <h1>Atividade 3 - Uso de componentes</h1>
            <h2>O valor atual é: {Text}</h2>

            {/* Passando funções e textos via Props para o componente Botao */}
            <div>
            <Botao texto="Cadastro" aoClicar={cadastro} acao={'-'} />
            <Botao texto="Editar" aoClicar={editar} acao={'+'} />
            <Botao texto="Listar" aoClicar={listar} acao={'a'} />
            <Botao texto="Excluir" aoClicar={excluir} acao={'b'} />
            <Botao texto="Cancelar" aoClicar={cancelar} acao={'c'} />
            </div>
        </div>
    );
}

export default Atividade03;