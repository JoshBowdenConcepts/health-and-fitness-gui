import { ClickCounter } from './ClickCounter'
import './styles.css'

export const App = () => {
    return (
        <>
            <h1>React Typescript Application</h1>
            {/* It might be good to have a banner for this on development so that I don't make any mistakes on the platforms */}
            <p>Current Environment: {process.env.name}</p>
            <ClickCounter />
        </>
    )
}
