import React from "react";
import '../style/Content.css'
import Eventcard from "./Eventcard";
import Eventlist from "./Eventlist";

const Content = () => {
    return (
        <div>
            <body>
                <main>
                    <section id="home">
                        <h2>Welcome to PYPRO Community!</h2>
                        <p>Join us to connect with fellow developers, discover events, collaborate on projects, and get your questions answered.</p>
                    </section>

                    <section id="events">
                        <h2>Upcoming Events</h2>
                        <ul id="event-list">
                            <Eventlist/>
                        </ul>
                    </section>

                    {/* <section id="projects">
                        <h2>Open Projects</h2>
                        <ul id="project-list">
                        </ul>
                    </section> */}

                </main>
                <script src="script.js"></script>
            </body>

        </div >
    )

}

export default Content;

// import React from "react";
// import '../style/Header.css'

// const Content = ()=>{
//     return (
//         <div>

//         </div>
//     )

// }

// export default Content;