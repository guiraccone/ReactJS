import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css"
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>

            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
                alt="banner do usuário"
            />

            <div className={styles.profile}>
                <Avatar
                    src="https://pbs.twimg.com/profile_images/1653872644993830913/Xx3xV4zc_400x400.jpg"
                    alt="Avatar do usuário"

                />
                <strong>Guilherme</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>

    )
}