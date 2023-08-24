import React from "react";
import open from './open.png'
import favorito from './favorito.png'
import { AiFillCloseCircle, AiFillHeart} from 'react-icons/ai';

export default function Cards({itens, styles,aoFavoritar}) {

  function favoritar() {
    {itens.Cards ? <AiFillHeart/> : <AiFillCloseCircle/>}
  }

  const propsfavorito ={
    onclick:favoritar,
    color:'#ff0000'
  }
  return (
    <ul className={styles.galeria__cards}>
      {itens.map((item) => {
        return (
          <li key={item.id} className={styles.galeria__card}>
            <img
              className={styles.galeria__imagem}
              src={item.imagem}
              alt={item.titulo}
            />
            <p className={styles.galeria__descricao}>{item.titulo}</p>
            <div>
              <p>{item.creditos}</p>
              <span>
                <img src={favorito} onClick={favoritar} />
                <img src={open} alt="ícone de abrir modal" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
