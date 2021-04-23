<template>
  <div>
    <div class="header">
      <h1>
        Find your product <br />
        on eBay
      </h1>
    </div>
    <div class="search">
      <input v-model="searchText" placeholder="Search for an item.." />
      <button @click="apiCall()">Search</button>
    </div>

    <div>
      <label class="range-label">Maximum price: {{ range }}</label>
      <input
        class="range-slider"
        type="range"
        v-model="range"
        min="0"
        max="5000"
        step="100"
      />

      <div class="items-wrapper" v-if="items">
        <div
          v-for="(item, index) in filterProductsByRange"
          :key="index"
          class="item"
        >
          <div class="top-rated" v-if="item.topRatedListing[0] === 'true'">
            <span>Top Rated</span
            ><svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.09434 1.52829L8.7851 4.95357L12.566 5.50621L9.83019 8.17093L10.4759 11.9355L7.09434 10.1572L3.71284 11.9355L4.3585 8.17093L1.62265 5.50621L5.40359 4.95357L7.09434 1.52829Z"
                fill="#555151"
              />
            </svg>
          </div>
          <!-- <img v-bind:src="item.galleryInfoContainer.galleryURL" /> -->
          <div class="info">
            <h4 class="title">{{ item.title[0] }}</h4>
            <p class="price">
              {{ item.sellingStatus[0]["currentPrice"][0]["__value__"] }}
              {{ item.sellingStatus[0]["currentPrice"][0]["@currencyId"] }}
            </p>
            <p
              class="shipping-info"
              v-if="item.shippingInfo[0]['shippingType'][0] === 'Free'"
            >
              Free shipping available
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      searchText: "",
      items: [{
				"itemId": ["110533337127"],
				"title": ["Apple Mac Pro (Tower, Early 2008) 2.8GHz 2 x 4-Core Xeon 1TB HDD 4GB MA970LL/A"],
				"globalId": ["EBAY-US"],
				"primaryCategory": [{
					"categoryId": ["111418"],
					"categoryName": ["Apple Desktops & All-In-Ones"]
				}],
				"viewItemURL": ["https://cgi.sandbox.ebay.com/Apple-Mac-Pro-Tower-Early-2008-2-8GHz-2-x-4-Core-Xeon-1TB-HDD-4GB-MA970LL-A-/110533337127"],
				"paymentMethod": ["PayPal"],
				"autoPay": ["false"],
				"postalCode": ["452**"],
				"location": ["Cincinnati,OH,USA"],
				"country": ["US"],
				"shippingInfo": [{
					"shippingServiceCost": [{
						"@currencyId": "USD",
						"__value__": "0.0"
					}],
					"shippingType": ["Free"],
					"shipToLocations": ["Worldwide"],
					"expeditedShipping": ["true"],
					"oneDayShippingAvailable": ["true"],
					"handlingTime": ["1"]
				}],
				"sellingStatus": [{
					"currentPrice": [{
						"@currencyId": "USD",
						"__value__": "599.0"
					}],
					"convertedCurrentPrice": [{
						"@currencyId": "USD",
						"__value__": "599.0"
					}],
					"sellingState": ["Active"],
					"timeLeft": ["P28DT18H54M48S"]
				}],
				"listingInfo": [{
					"bestOfferEnabled": ["false"],
					"buyItNowAvailable": ["false"],
					"startTime": ["2021-04-22T04:14:01.000Z"],
					"endTime": ["2021-05-22T04:14:01.000Z"],
					"listingType": ["FixedPrice"],
					"gift": ["false"]
				}],
				"returnsAccepted": ["true"],
				"condition": [{
					"conditionId": ["3000"],
					"conditionDisplayName": ["Used"]
				}],
				"isMultiVariationListing": ["false"],
				"topRatedListing": ["false"]
			}, {
				"itemId": ["110532866287"],
				"title": ["Kaspersky Internet Security 2021✔️ 1 Devices ✔️ 1 Years + GLOBAL Win Mac Android"],
				"globalId": ["EBAY-US"],
				"primaryCategory": [{
					"categoryId": ["175689"],
					"categoryName": ["Antivirus & Security"]
				}],
				"viewItemURL": ["https://cgi.sandbox.ebay.com/Kaspersky-Internet-Security-2021-1-Devices-1-Years-GLOBAL-Win-Mac-Android-/110532866287"],
				"paymentMethod": ["PayPal"],
				"autoPay": ["false"],
				"postalCode": ["060**"],
				"location": ["Bristol,CT,USA"],
				"country": ["US"],
				"shippingInfo": [{
					"shippingServiceCost": [{
						"@currencyId": "USD",
						"__value__": "0.0"
					}],
					"shippingType": ["Free"],
					"shipToLocations": ["Worldwide"],
					"expeditedShipping": ["false"],
					"oneDayShippingAvailable": ["false"],
					"handlingTime": ["2"]
				}],
				"sellingStatus": [{
					"currentPrice": [{
						"@currencyId": "USD",
						"__value__": "10.99"
					}],
					"convertedCurrentPrice": [{
						"@currencyId": "USD",
						"__value__": "10.99"
					}],
					"sellingState": ["Active"],
					"timeLeft": ["P15DT8H12M41S"]
				}],
				"listingInfo": [{
					"bestOfferEnabled": ["false"],
					"buyItNowAvailable": ["false"],
					"startTime": ["2021-04-08T17:31:54.000Z"],
					"endTime": ["2021-05-08T17:31:54.000Z"],
					"listingType": ["FixedPrice"],
					"gift": ["false"]
				}],
				"returnsAccepted": ["true"],
				"condition": [{
					"conditionId": ["1000"],
					"conditionDisplayName": ["Brand New"]
				}],
				"isMultiVariationListing": ["false"],
				"topRatedListing": ["false"]
			}, {
				"itemId": ["110533026011"],
				"title": ["Wireless USB3.0 Dual Band WiFi Adapter 802.11ac Network mini USB Card Mac Window"],
				"globalId": ["EBAY-US"],
				"primaryCategory": [{
					"categoryId": ["20318"],
					"categoryName": ["Network Cards"]
				}],
				"galleryURL": ["https://thumbs4.sandbox.ebaystatic.com/pict/1105330260114040_0.jpg"],
				"viewItemURL": ["https://cgi.sandbox.ebay.com/Wireless-USB3-0-Dual-Band-WiFi-Adapter-802-11ac-Network-mini-USB-Card-Mac-Window-/110533026011"],
				"paymentMethod": ["PayPal"],
				"autoPay": ["false"],
				"location": ["China"],
				"country": ["CN"],
				"shippingInfo": [{
					"shippingServiceCost": [{
						"@currencyId": "USD",
						"__value__": "0.0"
					}],
					"shippingType": ["Free"],
					"shipToLocations": ["Worldwide"],
					"expeditedShipping": ["false"],
					"oneDayShippingAvailable": ["false"],
					"handlingTime": ["2"]
				}],
				"sellingStatus": [{
					"currentPrice": [{
						"@currencyId": "USD",
						"__value__": "12.99"
					}],
					"convertedCurrentPrice": [{
						"@currencyId": "USD",
						"__value__": "12.99"
					}],
					"sellingState": ["Active"],
					"timeLeft": ["P21DT22H33M25S"]
				}],
				"listingInfo": [{
					"bestOfferEnabled": ["true"],
					"buyItNowAvailable": ["false"],
					"startTime": ["2021-04-15T07:52:38.000Z"],
					"endTime": ["2021-05-15T07:52:38.000Z"],
					"listingType": ["FixedPrice"],
					"gift": ["false"]
				}],
				"returnsAccepted": ["true"],
				"condition": [{
					"conditionId": ["1000"],
					"conditionDisplayName": ["New"]
				}],
				"isMultiVariationListing": ["false"],
				"topRatedListing": ["false"]
			}, {
				"itemId": ["110532867727"],
				"title": ["Kaspersky Internet Security 2021✔️ 1 Devices ✔️ 1 Years + GLOBAL Win Mac Android"],
				"globalId": ["EBAY-US"],
				"primaryCategory": [{
					"categoryId": ["175689"],
					"categoryName": ["Antivirus & Security"]
				}],
				"viewItemURL": ["https://cgi.sandbox.ebay.com/Kaspersky-Internet-Security-2021-1-Devices-1-Years-GLOBAL-Win-Mac-Android-/110532867727"],
				"paymentMethod": ["PayPal"],
				"autoPay": ["false"],
				"postalCode": ["060**"],
				"location": ["Bristol,CT,USA"],
				"country": ["US"],
				"shippingInfo": [{
					"shippingServiceCost": [{
						"@currencyId": "USD",
						"__value__": "0.0"
					}],
					"shippingType": ["Free"],
					"shipToLocations": ["Worldwide"],
					"expeditedShipping": ["false"],
					"oneDayShippingAvailable": ["false"],
					"handlingTime": ["2"]
				}],
				"sellingStatus": [{
					"currentPrice": [{
						"@currencyId": "USD",
						"__value__": "10.99"
					}],
					"convertedCurrentPrice": [{
						"@currencyId": "USD",
						"__value__": "10.99"
					}],
					"sellingState": ["Active"],
					"timeLeft": ["P15DT8H57M8S"]
				}],
				"listingInfo": [{
					"bestOfferEnabled": ["false"],
					"buyItNowAvailable": ["false"],
					"startTime": ["2021-04-08T18:16:21.000Z"],
					"endTime": ["2021-05-08T18:16:21.000Z"],
					"listingType": ["FixedPrice"],
					"gift": ["false"]
				}],
				"returnsAccepted": ["true"],
				"condition": [{
					"conditionId": ["1000"],
					"conditionDisplayName": ["Brand New"]
				}],
				"isMultiVariationListing": ["false"],
				"topRatedListing": ["false"]
			}],
      range: 2000,
    };
  },
  computed: {
    filterProductsByRange: function () {
      return this.items.filter((item) =>
        Math.trunc(item.sellingStatus[0]["currentPrice"][0]["__value__"]) > 0 &&
        Math.trunc(item.sellingStatus[0]["currentPrice"][0]["__value__"]) <
          this.range
          ? item
          : ""
      );
    },
  },
  methods: {
    getImgUrl(pic) {
      return require("'" + pic + "'");
    },
    apiCall() {
      let self = this;
      self.items = null
      const params = new URLSearchParams();

      params.append("keyword", self.searchText);

      axios
        .get(
          "/",
          {
            params: {
              keyword: self.searchText,
            },
          },
          {
            headers: { "content-type": "application/x-www-form-urlencoded" },
          }
        )
        .then((response) => {
          this.items =
            response.data.findItemsByKeywordsResponse[0]["searchResult"][0][
              "item"
            ];
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body {
  margin: 0;
}

.header {
  background: url("../assets/denisse-leon-0k795_HZzns-unsplash.jpg");
  height: 260px;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 50px;

  h1 {
    color: white;
    font-size: 55px;
    margin: 0;
  }
}

.search {
  background: white;
  position: relative;
  top: -50px;
  height: 100px;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 12px;
  box-shadow: -1px 1px 13px 2px #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    height: 50px;
    width: 250px;
    border-radius: 4px;
    border: 1px solid #b2b2b2;
    padding-left: 16px;
    margin-right: 4px;
    font-size: 18px;
    outline: none;
  }

  button {
    height: 54px;
    width: 100px;
    border: 1px solid #a3679b;
    color: white;
    border-radius: 4px;
    background: #a3679b;
    font-size: 18px;
    cursor: pointer;
    outline: none;
  }
}

.items-wrapper {
  max-width: 1260px;
  padding-right: 30px;
  padding-left: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
}

.item {
  width: 300px;
  height: 400px;
  background: url("../assets/creative-headline-APNnyM36puU-unsplash.jpg")
    no-repeat;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 8px 16px rgba(89, 89, 89, 0.15);
  border-radius: 12px;
  position: relative;
  margin-bottom: 40px;
}

.info {
  position: absolute;
  bottom: 0;
  width: calc(100% - 36px);
  min-height: 75px;
  background: linear-gradient(
    360deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 182.5%
  );
  backdrop-filter: blur(10px);
  border-radius: 12px;
  text-align: left;
  padding: 18px;

  .title {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #555151;
    margin: 0;
  }

  .price {
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #555151;
  }
}

.range-label {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #555151;
}

.range-slider {
  position: relative;
  //top: 2px;
  width: 300px;
  margin-left: 20px;
  -webkit-appearance: none;
  //background-color: white;
  border: 1px solid #847ea6;
  height: 8px;
  outline: none;
  border-radius: 8px;
}

.range-slider::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  color: #847ea6;
  height: 8px;
  border-radius: 8px;
}

.range-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 26px;
  height: 26px;
  background: #847ea6;
  border-radius: 50%;
  margin-top: -9px;
  cursor: pointer;
}

.shipping-info {
  margin-bottom: 0;
  font-size: 12px;
  color: #555151;
}

.top-rated {
  text-align: right;
  padding: 18px;

  span {
    font-weight: bold;
    font-size: 12px;
    color: #555151;
  }

  svg {
    position: relative;
    top: 2px;
    left: 2px;
  }
}
</style>
