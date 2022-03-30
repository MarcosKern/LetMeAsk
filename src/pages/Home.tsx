import { useNavigate } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

import googleIconImg from '../assets/images/google-icon.svg'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import { Button } from '../components/button'


import '../styles/auth.scss'


export function Home() {
    const navigate = useNavigate()
    const {user, signInWithGoogle} = useAuth()

    async function handleCreateRoom() {

        if (!user) {
            await signInWithGoogle()
        }

        navigate('/rooms/new')
    }

    return(
        <div id='page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo.</strong>
                <p>Tire as dúvidas da sua audiência em tempo real.</p>
            </aside>
            <main>
                
                <div className="main-content">
                    <img src={logoImg} alt="LetMeAsk" />
                    <button onClick={handleCreateRoom} className='createRoom'>
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className='separator'>ou entre em uma sala</div>
                    <form>
                        <input 
                            type="text"  
                            placeholder='Digite o código da sala'
                        />
                        <Button type='submit'>entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}