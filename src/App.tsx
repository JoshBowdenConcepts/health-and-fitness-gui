import { ClickCounter } from './ClickCounter'
import { Layout } from './components/Layout'

// Styles
import './styles.scss'

export const App = () => {
    return (
        <>
            <Layout
                content={
                    <>
                        <h1>React Typescript Application</h1>
                        {/* It might be good to have a banner for this on development so that I don't make any mistakes on the platforms */}
                        <p>Current Environment: {process.env.name}</p>
                        <ClickCounter />
                    </>
                }
            />
        </>
    )
}
