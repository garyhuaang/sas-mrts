import { InputWithLabel } from '../common'

function ShippingInfo() {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <InputWithLabel label="Email Address *" />
      <div className="flex gap-4">
        <InputWithLabel label="First Name *" />
        <InputWithLabel label="Last Name *" />
      </div>
      <InputWithLabel label="Address *" />
      <InputWithLabel label="Apartment, siute, etc." />
      <div className="flex gap-4">
        <InputWithLabel label="City" />
        <InputWithLabel label="State" />
        <InputWithLabel label="ZIP code" />
      </div>
      <InputWithLabel label="Phone" />
    </div>
  )
}

export { ShippingInfo }
