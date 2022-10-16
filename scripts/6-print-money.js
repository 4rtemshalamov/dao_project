import sdk from './1-initialize-sdk.js'

// This is the address of our ERC-20 contract printed out in the step before.
const token = sdk.getToken('0x8266a0CB66aE69491Ba88d2B6e0aF2E4697587d0')

;(async () => {
  try {
    // What's the max supply you want to set? 1,000,000 is a nice number!
    const amount = 1_000_000
    // Interact with your deployed ERC-20 contract and mint the tokens!
    await token.mintToSelf(amount)
    const totalSupply = await token.totalSupply()

    // Print out how many of our token's are out there now!
    console.log(
      '✅ There now is',
      totalSupply.displayValue,
      '$Obeme naxuy in circulation'
    )
  } catch (error) {
    console.error('Failed to print money', error)
  }
})()
