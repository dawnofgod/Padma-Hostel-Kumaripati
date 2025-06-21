import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { MapPin, Wifi, Utensils, Shield, Car, Bed, Clock, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const BoysHostel = () => {
  const navigate = useNavigate();

  const facilities = [
    { icon: Wifi, title: "High-Speed WiFi", description: "24/7 internet connectivity" },
    { icon: Utensils, title: "Nutritious Dining", description: "Healthy meals three times a day" },
    { icon: Shield, title: "24/7 Security", description: "CCTV monitoring and security guards" },
    { icon: Car, title: "Parking Space", description: "Secure parking for vehicles" },
    { icon: Bed, title: "Comfortable Rooms", description: "Well-furnished single and shared rooms" },
    { icon: Clock, title: "Study Hours", description: "Dedicated quiet hours for studies" },
    { icon: Users, title: "Common Areas", description: "Recreation and social spaces" },
  ];

  const handleMapClick = () => {
    window.open("https://g.co/kgs/vQfnrVb", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Padma Boys Hostel
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">
            Discipline, Comfort, and Care for Every Student.
          </p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <facility.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                  <CardTitle className="text-lg">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery title="Boys Hostel Gallery" />

      {/* Location and Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Visit Us
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              onClick={handleMapClick}
              className="w-full sm:w-auto px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white"
            >
              <MapPin className="w-5 h-5 mr-2" />
              View Boys Hostel on Map
            </Button>
            
            <Button 
              size="lg"
              onClick={() => navigate('/contact')}
              className="w-full sm:w-auto px-8 py-4 text-lg"
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BoysHostel;