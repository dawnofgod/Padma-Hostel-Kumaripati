import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-hsl(var(--home-gradient-start)) to-hsl(var(--home-gradient-end))">
      <Navigation />
      
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Welcome to Padma Hostel
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in">
            Your second home away from home.
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Providing safe, comfortable, and affordable student accommodation in the heart of Lalitpur. 
            Experience quality living with modern facilities and a supportive community environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => navigate('/boys-hostel')}
              className="w-full sm:w-auto px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white"
            >
              Boys Hostel
            </Button>
            
            <Button 
              size="lg"
              onClick={() => navigate('/girls-hostel')}
              className="w-full sm:w-auto px-8 py-4 text-lg bg-pink-600 hover:bg-pink-700 text-white"
            >
              Girls Hostel
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;