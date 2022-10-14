import sdk from './1-initialize-sdk.js'
import { readFileSync } from 'fs'

const editionDrop = await sdk.getEditionDrop(
  '0xD53843Ab22dB29d345cB45C68a6d9029b31F03A7'
)

;(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: 'How to become San Sanych',
        description: 'This NFT will give you access to SanSanychDAO!',
        image: readFileSync('scripts/assets/vodka.jpg'),
      },
    ])
    console.log('✅ Successfully created a new NFT in the drop!')
  } catch (error) {
    console.error('failed to create the new NFT', error)
  }
})()
