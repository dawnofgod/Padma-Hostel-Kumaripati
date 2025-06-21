import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Facebook, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hostelPreference: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.hostelPreference || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    // Show popup message
    toast({
      title: "Redirecting to WhatsApp",
      description: "Padma Hostel will contact you shortly.",
      duration: 3000
    });

    // WhatsApp numbers for both hostels
    const whatsappNumbers = ["+9779851236346", "+9779824387836"];

    // Create WhatsApp message
    const message = `Message from Padma Hostel
    
Name: ${formData.name}
Email: ${formData.email}
Hostel Preference: ${formData.hostelPreference}
Message: ${formData.message}`;

    // Open WhatsApp for both numbers
    setTimeout(() => {
      whatsappNumbers.forEach((number, index) => {
        const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
        }, index * 500); // Stagger the opening by 500ms
      });
    }, 1000);

    // Reset form
    setFormData({
      name: "",
      email: "",
      hostelPreference: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-hsl(var(--contact-gradient-start)) to-hsl(var(--contact-gradient-end))">
      <Navigation />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Get in touch with us for bookings and inquiries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Get In Touch Section - Left Side */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Get In Touch</CardTitle>
                <p className="text-center text-muted-foreground mt-2">
                  We're here to help you find your perfect home away from home. Whether you have questions about our facilities, want to schedule a visit, or are ready to book your stay, don't hesitate to reach out.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1" />
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">Phone Number</h4>
                      <p className="text-muted-foreground">9851236346</p>
                      <p className="text-sm text-muted-foreground">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-1" />
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">Email Address</h4>
                      <p className="text-muted-foreground">boyshostellalitpur@gmail.com</p>
                      <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">Physical Address</h4>
                      <p className="text-muted-foreground">Manbhawan, Kumaripati</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">Office Hours</h4>
                      <p className="text-muted-foreground">Open every day from 9 AM to 6 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="font-semibold text-foreground mb-4 text-center">Follow Us</h4>
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="https://www.facebook.com/profile.php?id=61576040811346" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                      <span>Boys Hostel</span>
                    </a>
                    <a 
                      href="https://www.facebook.com/padmagirlshostel" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                      <span>Girls Hostel</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Form - Right Side */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Booking Inquiry Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="Enter your email address"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="hostel">Hostel Preference *</Label>
                    <Select
                      value={formData.hostelPreference}
                      onValueChange={(value) => handleInputChange("hostelPreference", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select hostel preference" />
                      </SelectTrigger>
                      <SelectContent className="z-50 bg-background border shadow-lg">
                        <SelectItem value="Boys Hostel">Boys Hostel</SelectItem>
                        <SelectItem value="Girls Hostel">Girls Hostel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your requirements, preferred move-in date, etc."
                      className="mt-1 min-h-[120px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg transition-colors"
                  >
                    Send Message via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;