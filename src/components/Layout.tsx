import { useState } from 'react'

import './layout.scss'

interface LayoutProps {
    navigation?: JSX.Element
    menu?: JSX.Element
    content?: JSX.Element
}

export const Layout = ({ navigation, menu, content }: LayoutProps) => {
    const [menuExpanded, setMenuExpanded] = useState(false)

    return (
        <div
            className={`layout desktop_layout${
                menuExpanded ? ' menu_expanded' : ''
            }`}
        >
            <div
                className={'navigation'}
                onMouseEnter={() => setMenuExpanded(true)}
                onMouseLeave={() => setMenuExpanded(false)}
            >
                {navigation}
            </div>
            <div className={'menu'}>{menu}</div>
            <div className={'content'}>{content}</div>
        </div>
    )
}
