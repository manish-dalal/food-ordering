import api_response from "./api_response";
import isEmpty from "lodash/isEmpty";
import orderBy from "lodash/orderBy";

export const APIhandler = options => {
  let params = {};
  // get url params
  const routeParams = options.url.split("?");
  if (routeParams.length > 1) {
    let paramsStr = routeParams[1];
    paramsStr.split("&").map(data => {
      let keyValue = data.split("=");
      params[keyValue[0]] = keyValue[1] ? keyValue[1] : "";
      return "";
    });
  }

  return new Promise(async (resolve, reject) => {
    if (api_response.length) {
      if (!isEmpty(params)) {
        let response = api_response.filter(item =>
          item.itemname.includes(params.search.toLowerCase())
        );
        if (params.sort.length && params.order.length) {
          response = orderBy(response, params.sort, params.order);
        }
        return resolve({ data: response });
      } else {
        return resolve({ data: api_response });
      }
    } else {
      return reject({});
    }
  });
};
