import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  ctaText: string
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  popular = false,
  ctaText,
}: PricingCardProps) {
  return (
    <div className={clsx(
      "bg-muted/30 p-8 rounded-2xl shadow-sm border transition hover:shadow-md relative",
      popular && "ring-2 ring-orange-500"
    )}>
      {popular && (
        <span className="text-xs font-medium text-orange-600 mb-2 absolute top-2 right-2">POPULAR</span>
      )}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-2">{price} <span className="text-base font-normal">/mo</span></div>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <Button className="w-full mb-2">{ctaText}</Button>
      <p className="text-xs text-muted-foreground text-center mb-4">Billed annually.</p>
      <ul className="space-y-2 text-sm">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <CheckCircle className="text-orange-500 w-4 h-4 mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
