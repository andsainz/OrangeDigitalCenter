import React, { useEffect } from 'react';
import './GoogleTranslate.css';

const GoogleTranslate = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    window.googleTranslateElementInit = function () {
        new window.google.translate.TranslateElement(
            {
                includedLanguages: 'es,ca,eu,gl,en',
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
            },
            'google_translate_element'
        );
    };

    return <div id="google_translate_element" className="google"></div>;
};

export default GoogleTranslate;
