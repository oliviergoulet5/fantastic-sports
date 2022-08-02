import React from "react";
import NavigationBar from "../components/NavigationBar";

function Home() {

    return (
        <div>
            <NavigationBar>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Community</a>
                <a href="#">Donate</a>
            </NavigationBar>
            <main>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quisquam ea vitae veniam id hic nobis delectus aspernatur deserunt nemo dignissimos autem ad exercitationem pariatur non dolor facere, ex ab.</p>
            </main>
        </div>
    )
}

export default Home;