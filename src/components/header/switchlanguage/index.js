import React from "react"
import { navigate } from "gatsby"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl"

const languageName = {
  fr: "Français",
  en: "English",
}

const Switchlanguage = ({translation}) => {
  const handleLanguageChange = (language) => {
    // Force change locale
    changeLocale(language)
    
    // Conditional navigation based on language
    if (language === 'en') {
      navigate(`/${language}/home/`)
    } else if (language === 'fr') {
      navigate(`/${language}/`)
    }
  }

  return (
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              role="button"
              index={0}
              href={language === 'en' ? `/${language}/home/` : `/${language}/`}
              key={language}
              onClick={(e) => {
                e.preventDefault()
                handleLanguageChange(language)
              }}
              style={{
                color: currentLocale === language ? `` : `#a63117`,
                margin: 10,
                textDecoration: `underline`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
  )
}

export default Switchlanguage
