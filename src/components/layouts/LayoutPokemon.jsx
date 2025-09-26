import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const LayoutPokemon = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
            <Footer />
        </>
    )
}

export default LayoutPokemon;