import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-mono font-bold mb-8 text-center">
              Get in <span className="text-accent">Touch</span>
            </h1>
            
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              Have questions or need assistance? Our team is here to help. Reach out to us through any of the channels below.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-mono font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 border-2 border-border hover:border-accent transition-colors">
                    <MapPin className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-mono font-bold mb-2">Address</h3>
                      <p className="text-muted-foreground">
                        595 Market St #200<br />
                        San Francisco, CA 94105, USA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 border-2 border-border hover:border-accent transition-colors">
                    <Phone className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-mono font-bold mb-2">Phone</h3>
                      <p className="text-muted-foreground">
                        +1 (818) 792-1089<br />
                        +1 (818) 913-2465
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Contact: Daniel Martin
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 border-2 border-border hover:border-accent transition-colors">
                    <Mail className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-mono font-bold mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        info@quicklendingfunds.com<br />
                        support@quicklendingfunds.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 border-2 border-border hover:border-accent transition-colors">
                    <Clock className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-mono font-bold mb-2">Business Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <div className="flex justify-between gap-8">
                          <span>Sunday</span>
                          <span className="text-destructive">Closed</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Monday</span>
                          <span>6:00 am – 5:00 pm</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Tuesday</span>
                          <span>6:00 am – 5:00 pm</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Wednesday</span>
                          <span>6:00 am – 5:00 pm</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Thursday</span>
                          <span>6:00 am – 5:00 pm</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Friday</span>
                          <span>6:00 am – 5:00 pm</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Saturday</span>
                          <span>8:00 am – 5:00 pm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-mono font-bold mb-8">Send us a Message</h2>
                
                <form className="space-y-4">
                  <Input 
                    placeholder="Your name" 
                    className="border-2"
                    required
                  />
                  <Input 
                    placeholder="Company name" 
                    className="border-2"
                  />
                  <Input 
                    placeholder="Phone number" 
                    type="tel" 
                    className="border-2"
                    required
                  />
                  <Input 
                    placeholder="Email address" 
                    type="email" 
                    className="border-2"
                    required
                  />
                  <Textarea 
                    placeholder="Anything else you would like us to know?" 
                    className="border-2 min-h-40"
                    required
                  />
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-mono">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
