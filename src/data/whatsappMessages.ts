const BASE = 'https://wa.me/918095032355?text='
const encode = (msg: string) => BASE + encodeURIComponent(msg)

export const WA = {
  hero: encode("Hi SKE, I'm interested in bulk areca leaf plates. Please share details and pricing."),
  export: encode("Hi SKE, I'm an international buyer interested in areca leaf plates. Please share your export catalogue and pricing."),
  general: encode("Hi Sri Kalleshwara Enterprises, I would like to enquire about your products."),
  roundPlate4: encode("Hi, I need bulk 4 inch round areca leaf plates. What are your prices and MOQ?"),
  roundPlate6: encode("Hi, I need bulk 6 inch round areca leaf plates. What are your prices and MOQ?"),
  roundPlate8: encode("Hi, I need bulk 8 inch round areca leaf plates. What are your prices and MOQ?"),
  roundPlate10: encode("Hi, I need bulk 10 inch round areca leaf plates. What are your prices and MOQ?"),
  roundPlate12: encode("Hi, I need bulk 12 inch round areca leaf plates (thali size). What are your prices and MOQ?"),
  squarePlate4: encode("Hi, I need bulk 4 inch square areca leaf plates. What are your prices and MOQ?"),
  squarePlate6: encode("Hi, I need bulk 6 inch square areca leaf plates. What are your prices and MOQ?"),
  squarePlate8: encode("Hi, I need bulk 8 inch square areca leaf plates. What are your prices and MOQ?"),
  squarePlate10: encode("Hi, I need bulk 10 inch square areca leaf plates. What are your prices and MOQ?"),
  squarePlate12: encode("Hi, I need bulk 12 inch square areca leaf plates (thali size). What are your prices and MOQ?"),
  roundBowl: encode("Hi, I need bulk areca leaf round bowls. Please share sizes available and pricing."),
  squareBowl: encode("Hi, I need bulk areca leaf square bowls. Please share sizes available and pricing."),
  ovalBowl: encode("Hi, I need bulk areca leaf oval bowls. Please share pricing and MOQ."),
  heartBowl: encode("Hi, I'm interested in heart-shaped areca leaf bowls. Please share pricing and MOQ."),
  tray: encode("Hi, I need bulk areca leaf flat trays. Please share pricing and MOQ."),
  spoon: encode("Hi, I need bulk areca leaf spoons. Please share pricing and MOQ."),
  cup: encode("Hi, I need bulk areca leaf cups/tumblers. Please share pricing and MOQ."),
  dividedPlate: encode("Hi, I need bulk 2-compartment areca leaf plates. Please share pricing and MOQ."),
}
