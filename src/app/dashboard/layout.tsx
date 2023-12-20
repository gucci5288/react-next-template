import {ReactNode} from "react";

export default function DashboardLayout({children}: { children: ReactNode }) {
    return (
        <section>
            <nav>This layout</nav>
            {children}
        </section>
    )
}
