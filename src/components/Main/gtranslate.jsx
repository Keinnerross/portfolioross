import React, { useEffect } from "react";
import "../../stylesheet/main/gtranslate.css";

const GTranslate = () => {


    useEffect(() => {
        // Configuración de GTranslate
        window.gtranslateSettings = {
            "default_language": "es",
            "native_language_names": true,
            "detect_browser_language": true,
            "languages": ["es", "en", "pt"],
            "wrapper_selector": ".gtranslate_wrapper",
            "alt_flags": {
                "en": "usa",
                "pt": "brazil"
            }
        };

        // Cargar el script de GTranslate
        const script = document.createElement('script');
        script.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
        script.defer = true;
        document.body.appendChild(script);

        // Limpiar el script cuando el componente se desmonte
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="">
            <div className="gtranslate_wrapper "></div>
        </div>
    )
}

export default GTranslate;

