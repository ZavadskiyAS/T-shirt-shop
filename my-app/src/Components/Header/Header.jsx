import React from "react";
import css from "./Header.module.css";

const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.header__logo}></div>
            <div className={css.header__basket}></div>
            <div className={css.header__btn}>
                <button className={css.header__btn_language_ua}></button>
                <button className={css.header__btn_language_ru}></button>
                <button className={css.header__btn_language_en}></button>
            </div>
        </header>
    )

}

export default Header;