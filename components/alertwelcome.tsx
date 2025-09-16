import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertWelcome() {
  return (
    <Alert className="mb-4">
      <AlertTitle>Welcome to Our Application!</AlertTitle>
      <AlertDescription>
        We're glad to have you here. Explore the features and enjoy your stay!
      </AlertDescription>
    </Alert>
  )
}