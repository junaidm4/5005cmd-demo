git add .
git commit -m "Initial commit"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Welcome to Your Website
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            This is a beautiful, minimal starting point for your next project.
          </p>
          <Button size="lg" className="font-medium">
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Feature One",
              description:
                "Build something amazing with modern tools and frameworks.",
            },
            {
              title: "Feature Two",
              description:
                "Responsive design that works beautifully on all devices.",
            },
            {
              title: "Feature Three",
              description:
                "Clean and minimal design focused on user experience.",
            },
          ].map((feature, i) => (
            <Card key={i} className="border-none shadow-sm">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ready to Begin?
          </h2>
          <div className="prose prose-gray mx-auto">
            <p>
              This minimal template provides everything you need to start building
              your next web application. With modern styling using Tailwind CSS and
              Shadcn UI components, you can quickly create beautiful and responsive
              user interfaces.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
