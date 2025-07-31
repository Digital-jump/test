import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./button"

const CarouselContext = React.createContext<{
  currentIndex: number
  setCurrentIndex: (index: number) => void
  itemCount: number
}>({
  currentIndex: 0,
  setCurrentIndex: () => {},
  itemCount: 0,
})

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode
  }
>(({ className, children, ...props }, ref) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const itemCount = React.Children.count(children)

  return (
    <CarouselContext.Provider value={{ currentIndex, setCurrentIndex, itemCount }}>
      <div
        ref={ref}
        className={cn("relative", className)}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { currentIndex } = React.useContext(CarouselContext)
  
  return (
    <div
      ref={ref}
      className={cn("overflow-hidden", className)}
      {...props}
    >
      <div 
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children}
      </div>
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
    {...props}
  />
))
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { currentIndex, setCurrentIndex, itemCount } = React.useContext(CarouselContext)
  
  const handlePrevious = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : itemCount - 1)
  }

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full",
        className
      )}
      onClick={handlePrevious}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { currentIndex, setCurrentIndex, itemCount } = React.useContext(CarouselContext)
  
  const handleNext = () => {
    setCurrentIndex(currentIndex < itemCount - 1 ? currentIndex + 1 : 0)
  }

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full",
        className
      )}
      onClick={handleNext}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}