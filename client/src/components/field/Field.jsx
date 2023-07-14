import { forwardRef } from "react"

export const Field = forwardRef(({ error, className, type, ...props }, ref) => {
  return (
    <>
      <input type={type} className={className} ref={ref} {...props} />
      {error && (
        <span className="text-red-800 text-xs uppercase underline">
          {error.message}
        </span>
      )}
    </>
  )
})
