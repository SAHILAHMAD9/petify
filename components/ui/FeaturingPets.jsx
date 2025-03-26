import React from 'react'
import EnhancedPetCard from "@/components/ui/Petcard";

const FeaturingPets = () => {
  return (
      <section className="py-24 w-full z-0 bg-white">
          <div className="mx-auto px-4">
              <div className="flex justify-between items-center mb-16">
                  <div className='flex justify-center items-center flex-col '>
                      <h2 className="text-4xl md:text-5xl text-black font-bold mb-4">Featured Pets</h2>
                      <p className="text-black text-xl">Meet our adorable friends waiting for a home</p>
                  </div>
                  {/* <Button variant="outline" size="lg" className="gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button> */}
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  <EnhancedPetCard
                      image="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3"
                      name="Whiskers"
                      type="Cat"
                      breed="Persian"
                      age="1 year"
                      location="New Delhi, IN"
                      price="Free to Good Home"
                  />
                  <EnhancedPetCard
                      image="https://images.unsplash.com/photo-1587764379873-97837921fd44?ixlib=rb-4.0.3"
                      name="Rocky"
                      type="Dog"
                      breed="Golden Retriever"
                      age="2 years"
                      location="Munbai, IN"
                      price="$500"
                  />
                  <EnhancedPetCard
                      image="https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-4.0.3"
                      name="Luna"
                      type="Cat"
                      breed="Siamese"
                      age="6 months"
                      location="Delhi, IN"
                      price="Free to Good Home"
                  />
              </div>
          </div>
      </section>
  )
}
export default FeaturingPets;