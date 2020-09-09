import axios from 'axios'

export default axios.create({
  baseURL: `https://api.yelp.com/v3/businesses`,
  headers: {
    Authorization:
      'Bearer ybggzxGjeCOJcTcufd9d4Ith8hpFXYUxPdeHbAKLbt1c64P1t2TTvZDCPx1RKtEbhBfUfrPzMcHYfi9W3IrDsluMCKBsclxz81T8T4um2htyo-2JyZRZPojAAMNXX3Yx',
  },
})
