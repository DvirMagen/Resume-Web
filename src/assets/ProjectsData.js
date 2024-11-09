export const CORE_PROJECTS = {
    cr: {
        title: "Cosmic Race",
        description: (
            <div>
                Creating a competitive racing game where the goal is to reach the finish line first,
                <br /> but it's not a straightforward journey. 
                <br /> Players must navigate obstacles and fend off attacks from competitors aiming to beat them to the finish. 
                <br /> Development of a robust game server using Java, adeptly handling common gaming obstacles such as timeouts, lags, and interruptions.
                <br /> Excel in game development utilizing Unity, a powerful cross-platform engine, with proficiency in coding with C#. 
                <br /> Worked with Azure to establish storage for game data in the database and set up servers. 
                <br /> Employed Node.js to create the web server, proficiently managing database operations. Proficiently implemented two communication protocols for the game. 
                <br /> Leveraged Sockets for online mode communication, ensuring seamless interaction with the game server.
            </div>
        ),
        url: 'https://github.com/DvirMagen/CosmicRace'
    },
    abs: {
        title: "Alternative Banking System",
        description: (
            <div>
                Implementation of a client/server window application system. 
                <br/> Developing an alternative banking system for lenders and borrowers Practicing with JavaFX apps for admin and client apps. <br />
                Using HTTP requests to develop communication between the them and the server.<br />
                The system facing a vast of multi-threading aspects on the server side, include: 
                <br />thread pool internal blocking queue management, and thread synchronization.
            </div>
        ),
        url: 'https://github.com/DvirMagen/ABS-Project'
    },
    nlp: {
        title: "NLP-clustering-project",
        description: (
            <div>
                Recognize the intent of natural language requests are identified by using intent classifier uncertainty – requests that are predicted to have a level of confidence below a certain threshold are reported as unrecognized (or unhandled).
                <br /> For example, “How does quarantine work” request classify as “quarantine work”. 
                <br />Our approach to accomplishing this mission is:<br />
                - Surfacing topical clusters in unhandled requests (clustering),<br />
                - Extraction of cluster representatives, and<br />
                - Cluster naming (labeling).
            </div>
        ),
        url: 'https://github.com/DvirMagen/NLP_final_project'
    },

    weetbis: {
        title: "Weet&Bis - Reastaurant Management System",
        description: (
            <div>
                Backend service of the Restaurant Management System that handles a variety of operations to manage restaurants, ratings, dishes, and orders. 
                <br />The system is designed with the flexibility to accommodate scalable data storage and interaction through RESTful APIs.
                <br />The provided system APIs include:
                <br />- <strong>Restaurant API</strong>: Manage restaurant data, including information such as restaurant name, contact details, kosher status, and ratings.
                <br />- <strong>Rating API</strong>: Handle rating data and the calculation of average ratings for restaurants based on user reviews.
                <br />- <strong>Dish API</strong>: Manage dish-related data, including dish names, categories, prices, and restaurant associations.
                <br />- <strong>Order API</strong>: Manage orders placed by customers, linking them to restaurants, dishes, and users.
                <br />
                Technical Details:
                <br />The application is developed using <strong>Java Spring Boot</strong>, 
                <br />utilizing its powerful framework for building RESTful APIs. 
                <br />The production data is stored in <strong>PostgreSQL</strong>, a scalable relational database solution. 
                <br />The APIs follow RESTful principles to ensure efficient, standardized, and stateless communication between the backend service and the clients.
            </div>
        ),
        url: 'https://github.com/DvirMagen/weetbis'
    }
};
