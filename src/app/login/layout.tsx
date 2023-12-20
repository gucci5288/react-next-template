import {ReactNode} from "react";

export default function LoginLayout({children}: { children: ReactNode }) {
    return (
        <section>
            <nav>Login layout</nav>
            <div className='p-4 bg-blue-300'>
                {children}
            </div>
        </section>
    )
}
