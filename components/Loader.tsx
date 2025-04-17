import { Loader2 } from 'lucide-react'

const Loader = () => {
  return (
    <div className="flex justify-center">
      <Loader2 className="h-10 w-10 animate-spin text-muted-foreground" />
    </div>
  )
}

export default Loader