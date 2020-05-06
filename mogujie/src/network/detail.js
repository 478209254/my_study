import {request} from './request'

export function getDetailDate(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommendDate() {
  return request({
    url: '/recommend'
  })
}

// 商品信息
export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.lowNowPrice = itemInfo.lowNowPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
  }
}

// 店铺信息
export class ShopInfo {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.cFans = shopInfo.cFans;
    this.cSells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.cGoods = shopInfo.cGoods;
  }
}

// 参数信息
export class GoodsParam {
  constructor(info, rule) {
    // images可能没有值
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}