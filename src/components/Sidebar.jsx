import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css'

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://images5.alphacoders.com/946/946961.png" 
            />
            
            <div className={styles.profile}>
                <Avatar src='https://github.com/MatheusFilg.png' />
                <strong> Matheus Filgueiras </strong>
                <span>Desenvolvedor Web</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar Seu perfil
                </a>
            </footer>
        </aside>
    );
}