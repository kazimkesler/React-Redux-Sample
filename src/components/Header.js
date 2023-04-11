import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme, setLanguage } from '../slices/siteSlice'
export function Header() {
    const {darkMode, language} = useSelector(state => state.site)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>
                theme: {darkMode ? "dark": "light"}
            </h1>
            <h1>
                language: {language}
            </h1>
            <button onClick={() => dispatch(toggleTheme())}>
                toggleTheme
            </button>
            <button onClick={() => dispatch(setLanguage(language === "tr" ? "en" : "tr"))}>
                changeLanguage
            </button>
        </div>
    )
}
export default Header