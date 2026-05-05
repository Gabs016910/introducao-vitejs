import { useState } from 'react';

import styles from './index.module.css';

export default function Atividade04() {
    // exemplo básico entrada de dados
    const [nome, setNome] = useState('');
    // exemplo uso real
    const [cadastros, setCadastros] = useState([]);
    const [numprod, setNumprod] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCadastros([...cadastros, [numprod, 'x ', nome]])
    };
    
    return (
        <div className={styles.container}>

            <h1>Atividade 4 - Lista de compra</h1>

            <form onSubmit={handleSubmit} className={styles.formulario}>
                <div className={styles.lul}>
                    <div className={styles.mar}>
                 <input
                    id="user"
                    type="number"
                    placeholder='Qnd'
                    value={numprod}
                    onChange={e => setNumprod(e.target.value)}
                />
                </div>
                <div className={styles.mar}>
                <input
                    id="user"
                    type="text"
                    placeholder='Produto...'
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                </div>
                <div className={styles.mar}>
                <button type="submit">Adicionar</button>
                </div>
                </div>
            </form>
            {
                cadastros.map(item => <p className={styles.a} key={item}>{item}</p>)
            }
        </div>
    );
}