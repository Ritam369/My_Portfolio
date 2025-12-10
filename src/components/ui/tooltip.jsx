import * as React from "react"
import { cn } from "@/lib/utils"

const TooltipProvider = ({ children }) => <>{children}</>

const Tooltip = ({ children }) => {
  const [open, setOpen] = React.useState(false)
  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { open })
      )}
    </div>
  )
}

const TooltipTrigger = React.forwardRef(({ children, ...props }, ref) => (
  <div ref={ref} {...props}>
    {children}
  </div>
))
TooltipTrigger.displayName = "TooltipTrigger"

const TooltipContent = React.forwardRef(({ className, open, children, ...props }, ref) => (
  open ? (
    <div
      ref={ref}
      className={cn(
        "absolute -top-10 left-1/2 -translate-x-1/2 z-50 px-3 py-1.5 text-sm bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-md whitespace-nowrap",
        className
      )}
      {...props}
    >
      {children}
    </div>
  ) : null
))
TooltipContent.displayName = "TooltipContent"

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
