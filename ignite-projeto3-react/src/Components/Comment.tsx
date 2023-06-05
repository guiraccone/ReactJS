import { ThumbsUp, TrashSimple } from "@phosphor-icons/react"
import { Avatar } from "./Avatar"
import styles from "./Comment.module.css"
import { useState } from "react"

interface CommentProps {
    content: string,
    onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);


    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar 
            hasBorder={false} 
            src="https://pbs.twimg.com/profile_images/1653872644993830913/Xx3xV4zc_400x400.jpg"
            alt="User Avatar"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Guilherme</strong>
                            <time
                                title="11 de Maio às 13:33h"
                                dateTime="2023-05-11 13:33:30">Cerca de 1 hora atrás
                            </time>
                        </div>

                        <button
                            onClick={handleDeleteComment}
                            title="Deletar comentário">
                            <TrashSimple size={25} />
                        </button>
                    </header>

                    <p>{content}</p>

                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}