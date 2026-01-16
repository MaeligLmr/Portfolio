const CV = ({color, language}) => {
    return (
        <a className = "w-full p-3 text-lg font-semibold text-center text-white rounded-xl cursor-pointer transition duration-300 ease-in-out hover:bg-indigo-600 active:bg-indigo-900" 
        href={language === "fr" ? "/Portfolio/docs/Maelig-LAMARRE-CV.pdf" : "/Portfolio/docs/International-cv-maelig-lamarre.pdf"}
        download="Maelig-LAMARRE-CV.pdf"
         style={{backgroundColor : color,                
            color : color === '#FFD900' ? 'black' : 'white'
         }}>{language === 'fr' ? 'Télécharger mon CV' : 'Download My CV'}</a>
    )
}
export default CV