import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter options={{
            strings: ["Software Developer", "Front-End Developer"
                , "React - Angular Developer",], autoStart: true, loop: true, deleteSpeed: 80,
        }} />
    );
}

export default Type;