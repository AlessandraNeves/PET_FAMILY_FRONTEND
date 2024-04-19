
import * as React from 'react';

import "./App.css"
import banner from "./assets/img/banner_pets_family.png"
import { LoginContext } from "./App"
import { useContext } from "react"

export default function Navbar() {

    const { isLoggedIn } = useContext(LoginContext)

    return (
        <nav className="nav">
            <header>
                { isLoggedIn === true && 
                    <div className="user">
                        <span>Usuário</span>
                    </div>
                } 
            </header>
            <a href="/">
                <img className="banner" src={banner} alt="Banner"/>
            </a>
            { isLoggedIn !== false?
                <ul>
                    <li>
                        <a href="/Tutor">Tutor</a>
                    </li>
                    <li>
                        <a href="/Pets">Pets</a>
                    </li>
                    <li>
                        <a href="/Medicines">Medicamentos</a>
                    </li>
                    <li>
                        <a href="/Vaccines">Vacinas</a>
                    </li>
                    <li>
                        <a href="/Schedules">Calendário</a>
                    </li>
                    <li>
                        <a href="/About">Ajuda</a>
                    </li>
                </ul>:
                <ul>
                    <li>
                        <a href="/About">Cuidados Pet Family</a>
                    </li>
                    <li>
                        <a href="/About">Sobre adoção</a>
                    </li>
                    <li>
                        <a href="/About">Nossos Planos</a>
                    </li>
                    <li>
                        <a href="/Auth">Entrar</a>
                    </li>
                </ul>
            }
        </nav>
    )
}

