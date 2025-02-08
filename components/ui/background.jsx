import { motion } from "framer-motion";

const BackgroundPaths = () => {
  const paths = [
    { id: 1, d: "M10 10C50 50, 100 100, 150 50", width: 2 },
    { id: 2, d: "M20 50C70 100, 150 150, 200 100", width: 1.5 },
    { id: 3, d: "M30 100C90 150, 200 200, 250 150", width: 2 },
    // Add more paths as needed
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-slate-950 dark:text-white" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default BackgroundPaths;
