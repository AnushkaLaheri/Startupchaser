import PricingCard from "./PricingCard"

export default function PricingSection() {
  return (
    <section className="text-center py-16 bg-background text-foreground">
      <h4 className="text-l font-medium  mb-2">Pricing</h4>
      <h2 className="text-3xl md:text-4xl text-orange-600 font-bold mb-2">Simple, scalable pricing.</h2>
      <p className="text-muted-foreground mb-12">No extra charges. No hidden fees.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <PricingCard
          title="Starter"
          price="Rs. 4999"
          description="For creating impressive tools that generate results."
          ctaText="Get started"
          features={[
            "Up to 10 individual users",
            "Basic reporting and analytics",
            "Project Management",
            "20GB individual data each user",
            "Basic chat and email support",
          ]}
        />

        <PricingCard
          title="Pro"
          price="Rs. 11999"
          description="For seamless integrations and sending tools in bulk."
          ctaText="Start a free trial"
          popular
          features={[
            "Access to all Starter features",
            "200+ integrations",
            "Unlimited team workspaces",
            "Approval workflows",
            "Salesforce integration*",
          ]}
        />
      </div>

      <div className="mt-10">
        <button className="text-sm border px-4 py-2 rounded-md hover:bg-muted transition">Compare plans</button>
      </div>
    </section>
  )
}
