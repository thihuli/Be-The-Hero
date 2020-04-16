import React, {useState} from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory} from 'react-router-dom'
import './style.css';
import api from '../../services/api'

import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const resṕonse = await api.post('session', {id})

            localStorage.setItem('ongId' ,id);
            localStorage.setItem('ongName' ,resṕonse.data.name);

            history.push('/profile')
        } catch (err) {
            alert('Falha no login, tente novamente.')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder='Sua ID' value={id} onChange={e => setId(e.target.value)} />
                    <button  className='button' type="submit">Entrar</button>

                    <Link className='back-link' to="/register">
                    <FiLogIn size={16} color='#e02041' />
                    Não tenho cadastro.                    
                    </Link>
                </form>
            </section>

            <img src={herosImg} alt="Heros"/>
        </div>
    );
}

/**Com a tag LINK fazemos carregar uma rota sem fazer recarregar
 * a página tem o efeito de SPA. Devemos importar o react-router-dom
 * para ter acesso ao LINK para sua útilização
 */