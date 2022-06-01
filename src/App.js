import { motion } from "framer-motion/dist/framer-motion";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);

  return (
    <div className="App">
      <motion.div
        className="card"
        onClick={() => setIsOpen(!isOpen)}
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <motion.h2 layout="position">Web Developer 🚀</motion.h2>
        {isOpen && (
          <motion.div
            className="expand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis sint odit ipsum? Blanditiis laudantium illo temporibus
              molestiae natus consequatur, tenetur illum fuga ut doloribus
              aliquam error odio sed fugit! Natus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              inventore sint deserunt magni sit nisi nihil ipsam cupiditate cum
              quaerat!
            </p>
            <button>Ok 👌</button>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="card"
        onClick={() => setIsOpenTwo(!isOpenTwo)}
        layout
        transition={{ layout: { duration: 1, type: "spring" } }}
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <motion.h2 layout="position">Mfgh.ir 😉</motion.h2>
        {isOpenTwo && (
          <motion.div
            className="expand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>I'm Fateme Ghafari and hope enjoy my work 🎉</p>
            <button>Got it 🎈</button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
