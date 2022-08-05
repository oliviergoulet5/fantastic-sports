import NavigationBar from "../components/NavigationBar";
import NavigationLayout from "../layouts/NavigationLayout";

function Home() {

    const navbar = 
        <NavigationBar type="centered" logo="/generic-logo.svg">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Community</a>
            <a href="#">Donate</a>
        </NavigationBar>

    return (
        <NavigationLayout navigationBar={navbar}>
            <main>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, quisquam ea vitae veniam id hic nobis delectus aspernatur deserunt nemo dignissimos autem ad exercitationem pariatur non dolor facere, ex ab.</p>
            </main>
        </NavigationLayout>
    )
}

export default Home;