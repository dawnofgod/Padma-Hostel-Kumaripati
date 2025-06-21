import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

interface GalleryProps {
  title: string;
}

const Gallery = ({ title }: GalleryProps) => {
  const galleryData = {
    rooms: [
      { url: "/placeholder.svg", caption: "Single Room" },
      { url: "/placeholder.svg", caption: "Double Room" },
      { url: "/placeholder.svg", caption: "Triple Room" },
      { url: "/placeholder.svg", caption: "Study Area in Room" },
      { url: "/placeholder.svg", caption: "Room Balcony" },
      { url: "/placeholder.svg", caption: "Room Storage" },
    ],
    commonAreas: [
      { url: "/placeholder.svg", caption: "Recreation Room" },
      { url: "/placeholder.svg", caption: "Study Hall" },
      { url: "/placeholder.svg", caption: "Common Lounge" },
      { url: "/placeholder.svg", caption: "Reading Area" },
      { url: "/placeholder.svg", caption: "TV Room" },
      { url: "/placeholder.svg", caption: "Outdoor Area" },
    ],
    dining: [
      { url: "/placeholder.svg", caption: "Dining Hall" },
      { url: "/placeholder.svg", caption: "Kitchen Area" },
      { url: "/placeholder.svg", caption: "Breakfast Setup" },
      { url: "/placeholder.svg", caption: "Dinner Time" },
      { url: "/placeholder.svg", caption: "Food Preparation" },
      { url: "/placeholder.svg", caption: "Dining Tables" },
    ]
  };

  const renderImageGrid = (images: typeof galleryData.rooms) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((item, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
          <CardContent className="p-0">
            <div className="aspect-video bg-muted relative">
              <img 
                src={item.url} 
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2">
                <p className="text-sm">{item.caption}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Gallery
        </h2>
        
        <Tabs defaultValue="rooms" className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
            <TabsTrigger value="commonAreas">Common Areas</TabsTrigger>
            <TabsTrigger value="dining">Dining</TabsTrigger>
          </TabsList>
          
          <TabsContent value="rooms" className="mt-6">
            {renderImageGrid(galleryData.rooms)}
          </TabsContent>
          
          <TabsContent value="commonAreas" className="mt-6">
            {renderImageGrid(galleryData.commonAreas)}
          </TabsContent>
          
          <TabsContent value="dining" className="mt-6">
            {renderImageGrid(galleryData.dining)}
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            * Gallery images can be easily updated by modifying the galleryData object in the Gallery component
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;