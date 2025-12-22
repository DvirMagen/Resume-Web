export const CORE_PROJECTS = {
    cr: {
        title: "Cosmic Race",
        description: "A competitive multiplayer racing game where players race to the finish line while navigating obstacles and defending against competitors.",
        achievements: [
            "Developed a robust game server using Java, handling common gaming challenges such as timeouts, lags, and interruptions",
            "Built game client using Unity and C# for cross-platform compatibility",
            "Implemented Azure cloud storage for game data and server infrastructure",
            "Created web server using Node.js with efficient database operations",
            "Implemented two communication protocols, including Socket-based online mode for real-time multiplayer interaction"
        ],
        stack: ["C#", "Unity", "Java", "Node.js", "Sockets", "Azure"],
        url: 'https://github.com/DvirMagen/CosmicRace'
    },
    abs: {
        title: "Alternative Banking System",
        description: "A client/server banking application system for lenders and borrowers with separate admin and client interfaces.",
        achievements: [
            "Developed JavaFX applications for both admin and client interfaces",
            "Implemented HTTP-based communication between clients and server",
            "Designed and implemented multi-threading architecture including thread pool management with internal blocking queues",
            "Ensured thread synchronization for concurrent operations"
        ],
        stack: ["Java", "JavaFX", "HTTP", "Multi-threading"],
        url: 'https://github.com/DvirMagen/ABS-Project'
    },
    nlp: {
        title: "NLP Clustering Project",
        description: "Natural language processing system that identifies and clusters unhandled user requests using intent classifier uncertainty.",
        achievements: [
            "Implemented intent classification with confidence thresholding to identify unrecognized requests",
            "Developed clustering algorithms to surface topical clusters in unhandled requests",
            "Created cluster representative extraction and automated labeling system",
            "Improved system's ability to handle ambiguous queries (e.g., 'How does quarantine work')"
        ],
        stack: ["Python", "NLP", "Machine Learning", "Clustering"],
        url: 'https://github.com/DvirMagen/NLP_final_project'
    },
    weetbis: {
        title: "Weet&Bis - Restaurant Management System",
        description: "Backend service for a restaurant management system handling restaurants, ratings, dishes, and orders through RESTful APIs.",
        achievements: [
            "Developed RESTful APIs for restaurant, rating, dish, and order management",
            "Implemented PostgreSQL database for scalable data storage",
            "Built application using Java Spring Boot framework",
            "Designed stateless API architecture following REST principles for efficient client-server communication"
        ],
        stack: ["Java", "Spring Boot", "PostgreSQL", "RESTful APIs"],
        url: 'https://github.com/DvirMagen/weetbis'
    }
};
