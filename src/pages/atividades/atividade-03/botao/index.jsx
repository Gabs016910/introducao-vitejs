import styles from './index.module.css';

function Botao({ texto, aoClicar, acao }) {
    return (
        <button
            className={`${styles.botao} ${acao === '+' ? styles.mais : acao === '-' ? styles.menos : acao === 'a' ? styles.a : acao === 'b' ? styles.b : styles.c}`}
            onClick={aoClicar}
        >
            {texto}
        </button>
    );
}

export default Botao;