import { 
  SubscriberArgs, 
  SubscriberConfig 
} from "@medusajs/framework"

export default async function orderPlacedHandler({
  event: { name, data },
  container,
}: SubscriberArgs<{ id: string }>) {
  const logger = container.resolve("logger")
  
  logger.info(`New order placed with name: ${name}`)
  logger.info(`New order placed with ID: ${data.id}`)
  
}
export const config: SubscriberConfig = {
  event: "order.placed",
}