// "use client"

// import * as React from "react"
// import * as ToastPrimitives from "@radix-ui/react-toast"
// import { cva, type VariantProps } from "class-variance-authority"
// import { X } from "lucide-react"

// import { cn } from "@/lib/utils"

// const ToastProvider = ToastPrimitives.Provider

// const ToastViewport = React.forwardRef<
//   React.ElementRef<typeof ToastPrimitives.Viewport>,
//   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
// >(({ className, ...props }, ref) => (
//   <ToastPrimitives.Viewport
//     ref={ref}
//     className={cn(
//       // Re-ordered class names here according to Tailwind's recommended order.
//       "fixed z-[100] top-0 w-full max-h-screen flex flex-col-reverse p-4 sm:right-0 sm:top-auto sm:bottom-0 sm:flex-col md:max-w-[420px]",
//       className
//     )}
//     {...props}
//   />
// ))
// ToastViewport.displayName = ToastPrimitives.Viewport.displayName

// const toastVariants = cva(
//   // Fixed the custom class issue by removing or correcting the custom class name.
//   "group pointer-events-auto relative w-full flex items-center justify-between space-x-4 rounded-md border p-6 pr-8 shadow-lg transition-all overflow-hidden dark:border-slate-800 data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full data-[swipe=move]:transition-none data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]",
//   {
//     variants: {
//       variant: {
//         default:
//           "border bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
//         destructive:
//           "border-red-500 bg-red-500 text-slate-50 dark:border-red-900 dark:bg-red-900 dark:text-slate-50", // Removed invalid group-[.destructive]
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//     },
//   }
// )

// const Toast = React.forwardRef<
//   React.ElementRef<typeof ToastPrimitives.Root>,
//   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
//     VariantProps<typeof toastVariants>
// >(({ className, variant, ...props }, ref) => {
//   return (
//     <ToastPrimitives.Root
//       ref={ref}
//       className={cn(toastVariants({ variant }), className)}
//       {...props}
//     />
//   )
// })
// Toast.displayName = ToastPrimitives.Root.displayName

// const ToastAction = React.forwardRef<
//   React.ElementRef<typeof ToastPrimitives.Action>,
//   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
// >(({ className, ...props }, ref) => (
//   <ToastPrimitives.Action
//     ref={ref}
//     className={cn(
//       // Re-ordered and fixed the class names
//       "inline-flex h-8 items-center justify-center rounded-md border px-3 text-sm font-medium transition-colors bg-transparent ring-offset-white focus:ring-2 focus:ring-offset-2 focus:outline-none hover:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 dark:border-slate-800 dark:hover:bg-slate-800 dark:focus:ring-slate-300 dark:ring-offset-slate-950",
//       className
//     )}
//     {...props}
//   />
// ))
// ToastAction.displayName = ToastPrimitives.Action.displayName

// const ToastClose = React.forwardRef<
//   React.ElementRef<typeof ToastPrimitives.Close>,
//   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
// >(({ className, ...props }, ref) => (
//   <ToastPrimitives.Close
//     ref={ref}
//     className={cn(
//       // Re-ordered and fixed invalid class names
//       "absolute top-2 right-2 p-1 rounded-md transition-opacity text-slate-950/50 opacity-0 hover:text-slate-950 focus:outline-none focus:opacity-100 focus:ring-2 group-hover:opacity-100 dark:text-slate-50/50 dark:hover:text-slate-50",
//       className
//     )}
//     toast-close=""
//     {...props}
//   >
//     <X className="size-4" />
//   </ToastPrimitives.Close>
// ))
// ToastClose.displayName = ToastPrimitives.Close.displayName

// const ToastTitle = React.forwardRef<
//   React.ElementRef<typeof ToastPrimitives.Title>,
//   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
// >(({ className, ...props }, ref) => (
//   <ToastPrimitives.Title
//     ref={ref}
//     className={cn("text-sm font-semibold", className)}
//     {...props}
//   />
// ))
// ToastTitle.displayName = ToastPrimitives.Title.displayName

// const ToastDescription = React.forwardRef<
//   React.ElementRef<typeof ToastPrimitives.Description>,
//   React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
// >(({ className, ...props }, ref) => (
//   <ToastPrimitives.Description
//     ref={ref}
//     className={cn("text-sm opacity-90", className)}
//     {...props}
//   />
// ))
// ToastDescription.displayName = ToastPrimitives.Description.displayName

// type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

// type ToastActionElement = React.ReactElement<typeof ToastAction>

// export {
//   type ToastProps,
//   type ToastActionElement,
//   ToastProvider,
//   ToastViewport,
//   Toast,
//   ToastTitle,
//   ToastDescription,
//   ToastClose,
//   ToastAction,
// }
