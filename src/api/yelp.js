import axios from "axios"

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer qqLPfij8mGEKf1F7gmNB2YgyDAj2B_MQXTrQ7rkB6OYUTo6F7dwLfq31L_8pFftr4oSfhnWO2gzMM7ZvRdfuXECtWY21rW-ztlPwF1uTuoH2YfpJ3MmIeMZsfFW8Y3Yx",
  },
})
